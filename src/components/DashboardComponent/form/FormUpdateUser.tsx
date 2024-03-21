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
import { Loader2, PencilLine, Save } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { toast } from "sonner";
import { UpdateUser } from "@/action/userAction";
import { useRouter } from "next/navigation";
import { User } from "@prisma/client";
import { SingleImageDropzone } from "@/components/Upload/SingleImageDropZone";
import { useState } from "react";
import { useEdgeStore } from "@/lib/edgstore";

type propsDialog = {
  open: boolean,
  onOpenChange: (open: boolean) => void
  dataUser: User
}

const FormUpdateUser = ({ open, onOpenChange, dataUser }: propsDialog) => {
  const [file, setFile] = useState<File | undefined>()
  const [progress, setProgress] = useState(0)

  const { edgestore } = useEdgeStore()
  const router = useRouter();

  const form = useForm<z.infer<typeof RegisterSchema>>({
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
      nama: dataUser.nama,
      email: dataUser.email,
      password: dataUser.hashedPassword,
      profil: dataUser.profile,
      username: dataUser.username,
      role: dataUser.role
    }
  });

  const handleSubmit = async ( values: z.infer<typeof RegisterSchema>) => {
    try {
      const id = dataUser.id

      if (!file) {

        const data = values;

        await UpdateUser({ id, data })

        toast.success("Success", {
          description: "User Berhasil Diupdate"
        })

        onOpenChange(!open)

        router.refresh();

      } else {

        const res = await edgestore.publicImages.upload({
          file,
          input: { type: "profile" },
          options: {
            replaceTargetUrl : dataUser.profile
          }
        })

        if (!res.url) return new Error("terjadi kesalahan silahkan hubungi pocong sebelah")

        const data = {...values, profil: res.url}

        await UpdateUser({ id, data })
  
        toast.success("Success", {
          description: "User Berhasil Diupdate"
        })
  
        onOpenChange(!open)
  
        router.refresh();
      }

    } catch (error) {
      toast.error("Error!!", {
        description: "Err: " + error
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
        </div>
        <div className="flex flex-wrap gap-5">
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
        </div>
        <div className="flex w-full justify-center text-center">
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
                    value={file ? file : dataUser.profile}
                    onChange={(file) => {
                      setFile(file);
                    }}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <Button disabled={form.formState.isSubmitting} aria-disabled={form.formState.isSubmitting} type="submit">
          {form.formState.isSubmitting ? <Loader2 className="w-4 h-4 mr-2 animate-spin" /> : <PencilLine className="w-5 h-5 mr-2" />}
          Update
        </Button>
      </form>
    </Form>
  );
};

export default FormUpdateUser;
