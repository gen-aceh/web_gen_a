"use client";

import { addAnggota } from "@/action/anggotaAction";
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
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
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
import { JabatanAnggota, Pendidikan } from "@/lib/Constant";
import { useEdgeStore } from "@/lib/edgstore";
import { cn } from "@/lib/utils";
import { AnggotaSchema } from "@/lib/validation/PostValidation";
import { zodResolver } from "@hookform/resolvers/zod";
import { Afiliasi } from "@prisma/client";
import { Editor } from "@tinymce/tinymce-react";
import { format } from "date-fns";
import { CalendarIcon, InstagramIcon, Loader2, MailIcon, PhoneIcon, Save } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

type props = {
  subUnit: Afiliasi[]
}

const FormAnggota = ({ subUnit }: props) => {
  const [file, setFile] = useState<File | undefined>()
  const [progress, setProgress] = useState(0)
  const { edgestore } = useEdgeStore()

  const router = useRouter();

  const form = useForm<z.infer<typeof AnggotaSchema>>({
    resolver: zodResolver(AnggotaSchema),
    defaultValues: {
      nama: "",
      jabatan: undefined,
      subUnit: undefined,
      pendidikan: undefined,
      bidang: "",
      gender: "L",
      tanggalLahir: new Date("2000-01-01"),
      ahli: "",
      email: "",
      instagram: "",
      telephon: "",
      gambar: null,
      deskripsi: ""
    }
  });

  const handleSubmit = async (values: z.infer<typeof AnggotaSchema>) => {
    try {

      if (!file) {
        await addAnggota(values);

        toast.success("Success", {
          description: "Anggota berhasil Ditambahkan"
        })

        router.push("/dashboard/anggota")
      } else {
        const res = await edgestore.publicImages.upload({
          file,
          input: { type: "profile" },
          onProgressChange: (progress) => {
            setProgress(progress)
          }
        })

        if (!res.url) throw new Error("Maaf sepertinya terjadi sedikit kesalahan, silahkan hubungi pocong sebelah")

        const data = { ...values, gambar: res.url }

        await addAnggota(data)

        toast.success("Succes", {
          description: "Anggota berhasil ditambahkan"
        })
      }

      router.push("/dashboard/anggota")

    } catch (error) {
      toast.error("Error!!", {
        description: "Something went wrong"
      })
      console.error(error)
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-8">
        <div className="flex flex-wrap gap-5">
          <FormField
            control={form.control}
            name="nama"
            render={({ field }) => (
              <FormItem className="flex-grow">
                <FormLabel>Nama</FormLabel>
                <FormControl>
                  <Input placeholder="Bambang" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="gender"
            render={({ field }) => (
              <FormItem className="w-16">
                <FormLabel>Gender</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Pilih Gender" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Gender...</SelectLabel>
                      <SelectItem value={"L"}>
                        L
                      </SelectItem>
                      <SelectItem value={"P"}>
                        P
                      </SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="tanggalLahir"
            render={({ field }) => (
              <FormItem className="flex-grow w-20">
                <FormLabel>Tanggal lahir</FormLabel>
                <FormControl>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button variant="outline" className={cn("flex w-full justify-between", !field.value && "text-sm text-neutral-600")}>
                        <CalendarIcon className="w-5 h-5" />
                        {field.value && format(field.value, "PPP")}
                        {!field.value && format(new Date(), "PPP")}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent>
                      <Calendar defaultMonth={field.value} mode="single" selected={field.value} onSelect={field.onChange} initialFocus />
                    </PopoverContent>
                  </Popover>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="jabatan"
            render={({ field }) => (
              <FormItem className="max-w-xs flex-grow">
                <FormLabel>Jabatan</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Pilih Jabatan" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Jabatan...</SelectLabel>
                      {JabatanAnggota.map((data) => {
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
            name="subUnit"
            render={({ field }) => (
              <FormItem className="max-w-xs flex-grow">
                <FormLabel>Sub-unit</FormLabel>
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
                      {subUnit.map(data => (
                        <SelectItem key={data.id} value={data.id}>
                          {data.singkatan}
                        </SelectItem>
                      ))}
                    </SelectGroup>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="flex flex-wrap gap-5">
          <FormField
            control={form.control}
            name="pendidikan"
            render={({ field }) => (
              <FormItem className="max-w-xl flex-grow">
                <FormLabel>Pendidikan</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Pilih Pendidikan" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Pendidikan...</SelectLabel>
                      {Pendidikan.map((data) => {
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
            name="bidang"
            render={({ field }) => (
              <FormItem className="flex-grow">
                <FormLabel>Bidang</FormLabel>
                <FormControl>
                  <Input required placeholder="bidang kuliah..." {...field} />
                </FormControl>
                <FormDescription>**Optional</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="ahli"
            render={({ field }) => (
              <FormItem className="flex-grow">
                <FormLabel>Keahlian</FormLabel>
                <FormControl>
                  <Input placeholder="bidang keahlian..." {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="flex flex-wrap gap-5">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="flex-grow">
                <FormLabel className="flex gap-3 items-center">{<MailIcon className="w-5 h-5" />} Kontak (Email)</FormLabel>
                <FormControl>
                  <Input placeholder="Email@go..." {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="instagram"
            render={({ field }) => (
              <FormItem className="flex-grow">
                <FormLabel className="flex gap-3 items-center">{<InstagramIcon className="w-5 h-5" />} Kontak (IG)</FormLabel>
                <FormControl>
                  <Input placeholder="@instagr..." {...field} />
                </FormControl>
                <FormDescription>**Optional</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="telephon"
            render={({ field }) => (
              <FormItem className="flex-grow">
                <FormLabel className="flex gap-3 items-center">{<PhoneIcon className="w-5 h-5" />} Kontak (Hp)</FormLabel>
                <FormControl>
                  <Input type="tel" placeholder="0821***..." {...field} />
                </FormControl>
                <FormDescription>**Optional</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="flex flex-col">
          <FormField
            control={form.control}
            name="gambar"
            render={({ field }) => (
              <FormItem className="">
                <FormLabel>Upload Profil</FormLabel>
                <FormControl>
                  <SingleImageDropzone
                    width={300}
                    height={300}
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
          name="deskripsi"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormLabel className="font-semibold">Tentang Anda</FormLabel>
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
                  initialValue="Tulis deskripsi anda disini..."
                  onEditorChange={(Content) => field.onChange(Content)}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button disabled={form.formState.isSubmitting} aria-disabled={form.formState.isSubmitting} type="submit">
          {form.formState.isSubmitting ? <Loader2 className="mr-2 w-5 animate-spin" /> : <Save className="mr-2 w-5" />}
          Submit
        </Button>
      </form>
    </Form>
  );
};

export default FormAnggota;
