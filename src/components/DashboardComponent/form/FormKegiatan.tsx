"use client";

import { addKegiatan } from "@/action/kegiatanAction";
import { SingleImageDropzone } from "@/components/Upload/SingleImageDropZone";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Progress } from "@/components/ui/progress";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useEdgeStore } from "@/lib/edgstore";
import { cn } from "@/lib/utils";
import { KegiatanSchema } from "@/lib/validation/PostValidation";
import { zodResolver } from "@hookform/resolvers/zod";
import { Editor } from "@tinymce/tinymce-react";
import { format } from "date-fns";
import { CalendarIcon, Loader2, Save } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import Select2 from "react-select"
import { toast } from "sonner";
import { z } from "zod";

type props = {
  subUnit: {
    id: string
    singkatan: string;
  }[]
  users: {
    id: string;
    nama: string;
  }[]
  tags: {
    id: number,
    nama: string
  }[]
}

type TagOptions = {
  value: number,
  label: string
}

const FormKegiatan = ({ subUnit, users, tags }: props) => {
  const [file, setFile] = useState<File | undefined>()
  const [progress, setProgress] = useState(0)

  const { edgestore } = useEdgeStore()

  const form = useForm<z.infer<typeof KegiatanSchema>>({
    resolver: zodResolver(KegiatanSchema),
    defaultValues: {
      author: "clozue9ou00007pjavfzuwelh",
      gambarKegiatan: null,
      nama: "",
      tags: [],
      konten: "",
      ringkasan: "",
      unggulan: "false",
      tanggal: new Date(),
    }
  });

  const router = useRouter()

  const tagOptions: TagOptions[] = tags.map(itemOri => {
    return {
      value: itemOri.id,
      label: itemOri.nama
    }
  })

  const option = tagOptions

  const handleSubmit = async (values: z.infer<typeof KegiatanSchema>) => {

    try {

      if (!file) {
        await addKegiatan(values)

        toast.success("Success", {
          description: "Kegiatan berhasil ditambahkan"
        })

        router.push("/dashboard/kegiatan")
      } else {

        const res = await edgestore.publicImages.upload({
          file,
          input: { type: "post" },
          onProgressChange: (progress) => {
            setProgress(progress)
          }
        })

        if (!res.url) throw new Error("maaf sepertinya terjadi masalah, hubungin pocong sebelah")

        const data = { ...values, gambarKegiatan: res.url }

        await addKegiatan(data)

        toast.success("Success", {
          description: "Kegiatan berhasil ditambahkan"
        })

        router.push("/dashboard/kegiatan")
      }

    } catch (error) {
      toast.error("Error", {
        description: "Ada sedikit masalah"
      })
      console.log(error)
    }

  };

  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-8">
          <div className="flex flex-wrap gap-5">
            <FormField
              control={form.control}
              name="nama"
              render={({ field }) => (
                <FormItem className="flex-grow">
                  <FormLabel>Judul</FormLabel>
                  <FormControl>
                    <Input
                      type="text"
                      placeholder="Isi judul berita"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="ringkasan"
              render={({ field }) => (
                <FormItem className="flex-grow">
                  <FormLabel>Ringkasan / Keyword</FormLabel>
                  <FormControl>
                    <Input
                      type="text"
                      placeholder="untuk pencarian google"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="tags"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Kategori</FormLabel>
                  <FormControl>
                    {/* @ts-ignore */}
                    <Select2
                      className="min-w-[350px]"
                      styles={{
                        control: (baseStyle, state) => ({
                          ...baseStyle,
                          borderColor: state.isFocused && "#facc15"
                        }),
                        option: (baseStyle, state) => ({
                          ...baseStyle,
                          backgroundColor: state.isFocused && "#facc15"
                        }),
                        menu: (baseStyle, state) => ({
                          ...baseStyle,
                          zIndex: 99
                        })
                      }}
                      placeholder="Pilih Tags..."
                      options={option}
                      isMulti
                      onChange={field.onChange}
                      value={field.value.find(v => v.value)}
                      {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="unggulan"
              render={({ field }) => (
                <FormItem className="w-28">
                  <FormLabel>Unggulan</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="apakah unggulan..." />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectGroup>
                        <SelectItem value="true">
                          Iya
                        </SelectItem>
                        <SelectItem value="false">
                          Tidak
                        </SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div>
            <FormField
              control={form.control}
              name="gambarKegiatan"
              render={({ field }) => (
                <FormItem className="">
                  <FormLabel>Gambar Utama</FormLabel>
                  <FormControl>
                    <SingleImageDropzone
                      width={"100%"}
                      height={350}
                      value={file}
                      onChange={(file) => {
                        setFile(file);
                      }}
                    />
                  </FormControl>
                  <FormDescription>**Optional</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            {progress > 0 && <Progress className="h-1 w-1/3 mt-2" value={progress} />}
          </div>
          <FormField
            control={form.control}
            name="konten"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>Content</FormLabel>
                <FormControl>
                  <Editor
                    apiKey={process.env.NEXT_PUBLIC_TINY_API_KEY}
                    init={{
                      plugins: [
                        "advlist",
                        "autolink",
                        "lists",
                        "link",
                        "image",
                        "charmap",
                        "preview",
                        "anchor",
                        "searchreplace",
                        "visualblocks",
                        "code",
                        "fullscreen",
                        "insertdatetime",
                        "media",
                        "table",
                        "code",
                        "help",
                        "wordcount",
                      ],
                    }}
                    initialValue="Tulis konten anda disini..."
                    onEditorChange={(Content) => field.onChange(Content)}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex flex-wrap gap-5">
            <FormField
              control={form.control}
              name="tanggal"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Waktu / Tanggal</FormLabel>
                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button
                          variant={"outline"}
                          className={cn(
                            "w-[240px] pl-3 text-left font-normal flex justify-between items-center",
                            !field.value && "text-muted-foreground"
                          )}
                        >
                          {field.value ? (
                            format(field.value, "PPP")
                          ) : (
                            <span>Pilih Tanggal</span>
                          )}
                          <CalendarIcon className="h-4 w-4 opacity-50" />
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={field.value}
                        onSelect={field.onChange}
                        disabled={(date) =>
                          date > new Date() || date < new Date("1900-01-01")
                        }
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                  <FormDescription>Tanggal Pelaksanaan</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="subUnit"
              render={({ field }) => (
                <FormItem className="flex-grow">
                  <FormLabel>Sub-Unit</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Pilih Sub-Unit" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>Sub-Unit...</SelectLabel>
                        {subUnit.map((data) => {
                          return (
                            <SelectItem key={data.id} value={data.id}>
                              {data.singkatan}
                            </SelectItem>
                          );
                        })}
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                  <FormDescription>Unit Pelaksana</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="author"
              render={({ field }) => (
                <FormItem className="flex-grow">
                  <FormLabel>Author</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value && "clozue9ou00007pjavfzuwelh"}
                    disabled
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Pilih Status" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>Editor...</SelectLabel>
                        {users.map((data) => {
                          return (
                            <SelectItem key={data.id} value={data.id}>
                              {data.nama}
                            </SelectItem>
                          );
                        })}
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <Button disabled={form.formState.isSubmitting} aria-disabled={form.formState.isSubmitting} type="submit">
            {form.formState.isSubmitting ? <Loader2 className="mr-2 w-5 animate-spin" /> : <Save className="mr-2 w-5" />}
            Submit
          </Button>
        </form>
      </Form>
    </>
  );
};

export default FormKegiatan;
