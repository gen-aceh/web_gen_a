"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Role } from "@/lib/Constant";
import { RegisterSchema } from "@/lib/validation/AuthValidation";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2, Save } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { addUser } from "@/action/userAction";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { useState } from "react";
import { useEdgeStore } from "@/lib/edgstore";
import Link from "next/link";
import { SingleImageDropzone } from "@/components/Upload/SingleImageDropZone";
import { Progress } from "@/components/ui/progress";

type propsDialog = {
  open: boolean,
  onOpenChange: (open: boolean) => void
}

const FormUser = ({ open, onOpenChange }: propsDialog) => {
  const [file, setFile] = useState<File>()
  const [progress, setProgress] = useState(0)
  const { edgestore } = useEdgeStore()
  const router = useRouter()

  const form = useForm<z.infer<typeof RegisterSchema>>({
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
      nama: "",
      email: "",
      password: "",
      profil: null,
      username: ""
    }
  });

  const handleSubmit = async (values: z.infer<typeof RegisterSchema>) => {
    try {

      if (!file) {

        await addUser(values)

        toast.success("Success", {
          description: "User Berhasil Dibuat"
        })

        form.reset();
        onOpenChange(!open)
        router.refresh();

      } else {

        const res = await edgestore.publicImages.upload({
          file,
          input: { type: "profile" },
          onProgressChange: (progress: number) => {
            setProgress(progress)
          }
        })

        if (!res.url) throw new Error("Masalah saat meng-upload (mungkin jaringan)")

        const finalData = {...values, profil: res.url}

        await addUser(finalData)

        toast.success("Success", {
          description: "User Berhasil Dibuat"
        })

        form.reset();
        onOpenChange(!open)
        router.refresh();
      }

    } catch (error) {
      console.log(error)
      toast.error("Error", {
        description: "Err: Ada yang salah"
      })
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
                  <Input placeholder="Boby..." {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem className="flex-grow">
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input placeholder="Top_G..." {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className="flex-grow">
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="exam@gmail.com..." {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex flex-wrap gap-5">
          <FormField
            control={form.control}
            name="role"
            render={({ field }) => (
              <FormItem className="flex-grow">
                <FormLabel>Role</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Pilih Kategori" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Role...</SelectLabel>
                      {Role.map((data) => {
                        return (
                          <SelectItem key={data} value={data}>
                            {" "}
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
            name="password"
            render={({ field }) => (
              <FormItem className="flex-grow">
                <FormLabel>Password</FormLabel  >
                <FormControl>
                  <Input type="password" placeholder="****" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="flex flex-col w-full items-center text-center">
          <FormField
            control={form.control}
            name="profil"
            render={({ field }) => (
              <FormItem className="">
                <FormLabel>Upload Profil</FormLabel>
                <FormControl>
                  <SingleImageDropzone
                    width={200}
                    height={200}
                    value={file}
                    onChange={(file) => {
                      setFile(file);
                    }}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {progress > 0 && <Progress className="h-1 w-1/2 mt-2" value={progress} />}
        </div>
        <Button disabled={form.formState.isSubmitting} aria-disabled={form.formState.isSubmitting} type="submit">
          {form.formState.isSubmitting ? <Loader2 className="w-4 h-4 mr-2 animate-spin" /> : <Save className="w-5 h-5 mr-2" />}
          Submit
        </Button>
      </form>
    </Form>
  );
};

export default FormUser;
