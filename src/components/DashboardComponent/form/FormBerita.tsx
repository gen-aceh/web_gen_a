"use client";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import React, { Suspense, useState } from "react";
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
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { status } from "@/lib/Constant";
import { cn } from "@/lib/utils";
import { BeritaSchema } from "@/lib/validation/PostValidation";
import { zodResolver } from "@hookform/resolvers/zod";
import { Editor } from "@tinymce/tinymce-react";
import { format } from "date-fns";
import { CalendarIcon, Check, ChevronsUpDown, Loader2, Save } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import Hourglass from "@/components/loading/Hourglass";
import { Anggota, Kategori, User } from "@prisma/client";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem } from "@/components/ui/command";
import { toast } from "sonner";
import { addBerita } from "@/action/beritaAction";
import { useRouter } from "next/navigation";
import Select2 from "react-select"
import { SingleImageDropzone } from "@/components/Upload/SingleImageDropZone";
import { Progress } from "@/components/ui/progress";
import { useEdgeStore } from "@/lib/edgstore";

interface IKategoriOption {
  value: number,
  label: string
}

const FormBerita = ({ kategori, authors, editors }: { kategori: Kategori[], authors: Anggota[], editors: User[] }) => {
  const [file, setFile] = useState<File | undefined>()
  const [progress, setProgress] = useState(0)

  const { edgestore } = useEdgeStore()

  const router = useRouter()

  const form = useForm<z.infer<typeof BeritaSchema>>({
    resolver: zodResolver(BeritaSchema),
    defaultValues: {
      editor: "clozue9ou00007pjavfzuwelh",
      author: "",
      gambarBerita: null,
      judul: "",
      link: "",
      kategori: [],
      konten: "",
      status: "pending",
      tanggal: new Date(),
    }
  });

  const handleSubmit = async (values: z.infer<typeof BeritaSchema>) => {
    try {

      if (!file) {
        await addBerita(values)
  
        toast.success("Success", {
          description: "Berita Berhasil ditambahkan"
        })
  
        router.push("/dashboard/berita")
      } else {
        const res = await edgestore.publicImages.upload({
          file,
          input: { type: "post" },
          onProgressChange: (progress) => {
            setProgress(progress)
          }
        })

        if (!res.url) throw new Error("maaf sepertinya ada kesalahan, silahkan hubungi pocong sebelah")

        const data = { ...values, gambarBerita: res.url }

        await addBerita(data)

        toast.success("Success", {
          description: "Berita Berhasil ditambahkan"
        })

        router.push("/dashboard/berita")
      }


    } catch (error) {
      toast.error("Error!!", {
        description: "Something went wrong"
      })
      console.log(error)
    }

  };

  const kategoriOption: IKategoriOption[] = kategori.map(itemOri => {
    return {
      value: itemOri.id,
      label: itemOri.nama
    }
  })

  const option = kategoriOption

  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-8">
          <div className="flex flex-wrap gap-5">
            <FormField
              control={form.control}
              name="judul"
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
              name="link"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Link</FormLabel>
                  <FormControl>
                    <Input
                      type="url"
                      placeholder="https://example.com"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="kategori"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Kategori</FormLabel>
                  <FormControl>
                    {/* @ts-ignore */}
                    <Select2
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
                      placeholder="Pilih Kategori..."
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
          </div>
          <div>
            <FormField
              control={form.control}
              name="gambarBerita"
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
          <Suspense fallback={<Hourglass />}>
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
          </Suspense>
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
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="status"
              render={({ field }) => (
                <FormItem className="flex-grow">
                  <FormLabel>Status</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Pilih Status" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>status...</SelectLabel>
                        {status.map((data) => {
                          return (
                            <SelectItem key={data} value={data}>
                              {data}
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
            <FormField
              control={form.control}
              name="author"
              render={({ field }) => (
                <FormItem className="flex flex-col flex-grow m-[10px]">
                  <FormLabel>Author</FormLabel>
                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button
                          variant="outline"
                          role="combobox"
                          className={cn(
                            "min-w-[200px] justify-between",
                            !field.value && "text-muted-foreground"
                          )}
                        >
                          {field.value
                            ? authors.find(
                              (author) => author.id === field.value
                            )?.nama
                            : "Pilih Author"}
                          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent className="min-w-[240px] p-0">
                      <Command>
                        <CommandInput placeholder="Search author..." />
                        <CommandEmpty>No author found.</CommandEmpty>
                        <CommandGroup>
                          {authors.map((author) => (
                            <CommandItem
                              value={author?.nama}
                              key={author.id}
                              onSelect={() => {
                                form.setValue("author", author.id)
                              }}
                            >
                              <Check
                                className={cn(
                                  "mr-2 h-4 w-4",
                                  author.id === field.value
                                    ? "opacity-100"
                                    : "opacity-0"
                                )}
                              />
                              {author?.nama}
                            </CommandItem>
                          ))}
                        </CommandGroup>
                      </Command>
                    </PopoverContent>
                  </Popover>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="editor"
              render={({ field }) => (
                <FormItem className="flex-grow">
                  <FormLabel>Editor</FormLabel>
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
                        {editors.map((data) => {
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

export default FormBerita;
