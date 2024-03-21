"use client";

import { updateKonfigurasi } from "@/action/konfigurasiAction";
import { Button } from "@/components/ui/button";
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
import { Textarea } from "@/components/ui/textarea";
import { ConfigSchema } from "@/lib/validation/ConfigValidation";
import { zodResolver } from "@hookform/resolvers/zod";
import { Konfigurasi } from "@prisma/client";
import { Editor } from "@tinymce/tinymce-react";
import { Facebook, Instagram, Loader2, PencilLine, YoutubeIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

const FormConfig = ({ config }: { config: Konfigurasi }) => {
  const form = useForm<z.infer<typeof ConfigSchema>>({
    resolver: zodResolver(ConfigSchema),
    defaultValues: {
      keyword: config?.keyword ? config.keyword : "",
      metadata: config?.metadata ? config.metadata : "",
      namaOrganisasi: config?.namaOrganisasi ? config.namaOrganisasi : "",
      singkatan: config?.singkatanOrganisasi ? config.singkatanOrganisasi : "",
      motto1: config?.motto ? config.motto : "",
      motto2: config?.motto2 ? config.motto2 : "",
      deskripsiOrganisasi: config?.deskripsiOrganisasi ? config.deskripsiOrganisasi : "",
      deskripsiWeb: config?.deskripsiWeb ? config.deskripsiWeb : "",
      website: config?.URLWebsite ? config.URLWebsite : "",
      emaiOrganisasi: config?.emailOrganisasi ? config.emailOrganisasi : "",
      telephone: config?.telOrganisasi ? config.telOrganisasi : "",
      alamat: config?.alamatOrganisasi ? config.alamatOrganisasi : "",
      instagram: config?.instagram ? config.instagram : "",
      urlinstagram: config?.URLinstagram ? config.URLinstagram : "",
      facebook: config?.facebook ? config.facebook : "",
      urlfacebook: config?.URLfacebook ? config.URLfacebook : "",
      youtube: config?.youtube ? config.youtube : "",
      urlyoutube: config?.URLyoutube ? config.URLyoutube : "",
    }
  });

  const router = useRouter()

  const handleSubmit = async (data: z.infer<typeof ConfigSchema>) => {
    try {
      await updateKonfigurasi(data);

      toast.success("Success", {
        description: "Konfigurasi sukses di-update"
      })

      router.refresh();

    } catch (error) {

      toast.error("Error", {
        description: "Err: " + error
      })

    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-8">
        <div className="backdrop-blur border-b-2 border-b-primary w-full lg:w-5/12 shadow-sm py-2 text-lg font-semibold">
          SEO Modul (Biar enak di cari di google)
        </div>
        <div className="flex flex-wrap gap-5">
          <FormField
            control={form.control}
            name="keyword"
            render={({ field }) => (
              <FormItem className="flex-grow">
                <FormLabel>Keyword (untuk pencarian browser)</FormLabel>
                <FormControl>
                  <Textarea placeholder="Tulis Keyword Disini..." {...field} />
                </FormControl>
                <FormDescription>
                  Ex : Education, Organization, LSM, etc
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="metadata"
            render={({ field }) => (
              <FormItem className="flex-grow">
                <FormLabel>
                  Metadata (penjelasan singkat web/organisasi)
                </FormLabel>
                <FormControl>
                  <Textarea placeholder="Tulis Metadata Disini..." {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="backdrop-blur border-b-2 border-b-primary w-full lg:w-3/12 shadow-sm py-2 text-lg font-semibold">
          Informasi Dasar
        </div>
        <div className="flex flex-wrap gap-5">
          <FormField
            control={form.control}
            name="namaOrganisasi"
            render={({ field }) => (
              <FormItem className="flex-grow">
                <FormLabel>Nama Organisasi</FormLabel>
                <FormControl>
                  <Input placeholder="LDF Ash...." {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="singkatan"
            render={({ field }) => (
              <FormItem className="flex-grow">
                <FormLabel>singkatan</FormLabel>
                <FormControl>
                  <Input placeholder="BEM..." {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="flex flex-wrap gap-5">
          <FormField
            control={form.control}
            name="motto1"
            render={({ field }) => (
              <FormItem className="flex-grow">
                <FormLabel>Motto Organisasi (1)</FormLabel>
                <FormControl>
                  <Input placeholder="Motto..." {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="motto2"
            render={({ field }) => (
              <FormItem className="flex-grow">
                <FormLabel>Motto Organisasi (2)</FormLabel>
                <FormControl>
                  <Input placeholder="Motto..." {...field} />
                </FormControl>
                <FormDescription className="text-xs">
                  Ini Optional
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <FormField
          control={form.control}
          name="deskripsiOrganisasi"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormLabel>Deskripsi Organisasi</FormLabel>
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
                  initialValue={config?.deskripsiOrganisasi}
                  onEditorChange={(Content) => field.onChange(Content)}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="deskripsiWeb"
          render={({ field }) => (
            <FormItem className="flex-grow">
              <FormLabel>Deskripsi Web</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Tulis Deskripsi Web Disini..."
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex flex-wrap gap-5">
          <FormField
            control={form.control}
            name="website"
            render={({ field }) => (
              <FormItem className="flex-grow">
                <FormLabel>URL Website</FormLabel>
                <FormControl>
                  <Input placeholder="https://loca..." {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="emaiOrganisasi"
            render={({ field }) => (
              <FormItem className="flex-grow">
                <FormLabel>Email Organisasi</FormLabel>
                <FormControl>
                  <Input placeholder="Exam@gmail.com..." {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="telephone"
            render={({ field }) => (
              <FormItem className="flex-grow">
                <FormLabel>Telephone</FormLabel>
                <FormControl>
                  <Input type="number" placeholder="0821374..." {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <FormField
          control={form.control}
          name="alamat"
          render={({ field }) => (
            <FormItem className="flex-grow">
              <FormLabel>Alamat Organisasi</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Tulis Alamat Organisasi Disini..."
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="backdrop-blur border-b-2 border-b-primary w-full lg:w-3/12 shadow-sm py-2 text-lg font-semibold">
          Social Media <span className="text-xs">(Optional)</span>
        </div>
        <div className="flex flex-wrap gap-5">
          <FormField
            control={form.control}
            name="instagram"
            render={({ field }) => (
              <FormItem className="flex-grow">
                <FormLabel className="flex items-center gap-2"><Instagram className="w-5 h-5" />Instagram</FormLabel>
                <FormControl>
                  <Input placeholder="@instag..." {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="facebook"
            render={({ field }) => (
              <FormItem className="flex-grow">
                <FormLabel className="flex items-center gap-2"><Facebook className="w-5 h-5" />Facebook</FormLabel>
                <FormControl>
                  <Input placeholder="@faceb..." {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="youtube"
            render={({ field }) => (
              <FormItem className="flex-grow">
                <FormLabel className="flex items-center gap-2"><YoutubeIcon className="w-5 h-5" />Youtube</FormLabel>
                <FormControl>
                  <Input placeholder="@youtube..." {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="flex flex-wrap gap-5">
          <FormField
            control={form.control}
            name="urlinstagram"
            render={({ field }) => (
              <FormItem className="flex-grow">
                <FormLabel>URL Instagram</FormLabel>
                <FormControl>
                  <Input placeholder="https://instag..." {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="urlfacebook"
            render={({ field }) => (
              <FormItem className="flex-grow">
                <FormLabel>URL Facebook</FormLabel>
                <FormControl>
                  <Input placeholder="https://www.faceb..." {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="urlyoutube"
            render={({ field }) => (
              <FormItem className="flex-grow">
                <FormLabel>URL Youtube</FormLabel>
                <FormControl>
                  <Input placeholder="https://www.yotube..." {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <Button disabled={form.formState.isSubmitting} aria-disabled={form.formState.isSubmitting} type="submit">
          {form.formState.isSubmitting ?
            <Loader2 className="mr-2 w-5 h-5 animate-spin" />
            :
            <PencilLine className="mr-2 w-5 h-5" />
          }
          Update
        </Button>
      </form>
    </Form>
  );
};

export default FormConfig;