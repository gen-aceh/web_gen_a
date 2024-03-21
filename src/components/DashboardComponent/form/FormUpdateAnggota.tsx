"use client";

import { updateAnggota } from "@/action/anggotaAction";
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
import { fetcher } from "@/lib/fetcher";
import { cn } from "@/lib/utils";
import { AnggotaSchema } from "@/lib/validation/PostValidation";
import { zodResolver } from "@hookform/resolvers/zod";
import { Afiliasi, Anggota } from "@prisma/client";
import { Editor } from "@tinymce/tinymce-react";
import { format } from "date-fns";
import { CalendarIcon, InstagramIcon, Loader2Icon, MailIcon, PencilLine, PhoneIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import useSWR from "swr";
import { z } from "zod";

type DataAnggota = Anggota & {
  afiliasi: { singkatan: string }
}

type props = {
  dataAnggota: DataAnggota
  open: boolean
  onOpenChange: (open: boolean) => void
}

const FormUpdateAnggota = ({ dataAnggota, open, onOpenChange }: props) => {
  const [file, setFile] = useState<File | undefined>()
  const [progress, setProgress] = useState(0)

  const { edgestore } = useEdgeStore()

  const router = useRouter();

  const form = useForm<z.infer<typeof AnggotaSchema>>({
    resolver: zodResolver(AnggotaSchema),
    defaultValues: {
      nama: dataAnggota.nama,
      jabatan: dataAnggota.jabatan,
      subUnit: dataAnggota.afiliasiId,
      pendidikan: dataAnggota.pendidikan,
      bidang: dataAnggota.bidang,
      gender: dataAnggota.gender,
      tanggalLahir: dataAnggota.tanggalLahir,
      ahli: dataAnggota.keahlian,
      email: dataAnggota.email,
      instagram: dataAnggota.instagram,
      telephon: dataAnggota.telephone,
      gambar: dataAnggota.profile,
      deskripsi: dataAnggota.about,
      status: dataAnggota.status
    }
  });

  const { data: subUnit, isLoading, error } = useSWR<Afiliasi[], Error>("/api/subUnit", fetcher);

  const handleSubmit = async (values: z.infer<typeof AnggotaSchema>) => {
    try {
      const id = dataAnggota.id

      if (!file) {
        const data = values
        
        await updateAnggota({ id, data });
  
        toast.success("Success", {
          description: "Anggota berhasil DiUpdate"
        })
  
        onOpenChange(!open)
        router.refresh()
      } else {
        const res = await edgestore.publicImages.upload({
          file,
          input: { type: "profile" },
          options: {
            replaceTargetUrl: dataAnggota.profile
          },
          onProgressChange: (progress) => {
            setProgress(progress)
          }
        })

        if (!res.url) throw new Error("maaf terjadi kesalahan, silahkan hubungin pocong sebelah")

        const data = { ...values, gambar: res.url }

        await updateAnggota({ id, data });

        toast.success("Success", {
          description: "Anggota berhasil DiUpdate"
        })

        onOpenChange(!open)
        router.refresh()
      }

    } catch (error) {
      toast.error("Error!!", {
        description: "Something went wrong"
      })
      console.error(error)
      onOpenChange(!open)
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
                      <Calendar mode="single" selected={field.value} onSelect={field.onChange} initialFocus />
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
                      {isLoading && (<SelectItem value="loading">Loading...</SelectItem>)}
                      {error && (<SelectItem value="error">Error</SelectItem>)}
                      {subUnit && subUnit.map(data => (
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
            name="status"
            render={({ field }) => (
              <FormItem className="max-w-xl flex-grow">
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
                      <SelectItem value="Aktif">
                        Aktif
                      </SelectItem>
                      <SelectItem value="TidakAktif">
                        Tidak Aktif
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
                  <Input placeholder="bidang kuliah..." {...field} />
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
                    value={file ? file : dataAnggota.profile}
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
                  initialValue={dataAnggota.about}
                  onEditorChange={(Content) => field.onChange(Content)}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button disabled={form.formState.isSubmitting} aria-disabled={form.formState.isSubmitting} type="submit">
          {form.formState.isSubmitting ? <Loader2Icon className="mr-2 w-5 animate-spin" /> : <PencilLine className="mr-2 w-5" />}
          Update
        </Button>
      </form>
    </Form>
  );
};

export default FormUpdateAnggota;
