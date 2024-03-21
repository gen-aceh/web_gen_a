"use client";

import { updateSubUnit } from "@/action/subUnitAction";
import { SingleImageDropzone } from "@/components/Upload/SingleImageDropZone";
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
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Warna, kumpulanWarna } from "@/lib/Constant";
import { useEdgeStore } from "@/lib/edgstore";
import { cn } from "@/lib/utils";
import { AfiliasiSchema } from "@/lib/validation/PostValidation";
import { zodResolver } from "@hookform/resolvers/zod";
import { Afiliasi } from "@prisma/client";
import { Progress } from "@radix-ui/react-progress";
import { Editor } from "@tinymce/tinymce-react";
import { Loader, PencilLine, Save } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

type propsDialog = {
    open: boolean,
    onOpenChange: (open: boolean) => void
    dataAfiliasi: Afiliasi
}

const FormUpdateAfiliasi = ({ open, onOpenChange, dataAfiliasi }: propsDialog) => {
    const [file, setFile] = useState<File | undefined>()
    const [progress, setProgress] = useState(0)

    const { edgestore } = useEdgeStore()

    const form = useForm<z.infer<typeof AfiliasiSchema>>({
        resolver: zodResolver(AfiliasiSchema),
        defaultValues: {
            nama: dataAfiliasi.nama,
            deskripsi: dataAfiliasi.deskripsi,
            logo: dataAfiliasi.logo,
            singkatan: dataAfiliasi.singkatan,
            warna: dataAfiliasi.warna,
        }
    });

    const router = useRouter();

    const handleSubmit = async (values: z.infer<typeof AfiliasiSchema>) => {
        try {
            const id = dataAfiliasi.id

            const res = await edgestore.publicImages.upload({
                file,
                input: { type: "profile" },
                options: {
                    replaceTargetUrl: dataAfiliasi.logo
                },
                onProgressChange: (progress) => {
                    setProgress(progress)
                }
            })

            if (!res.url) throw new Error("terjadi sedikit masalah, silahkan hubungin pocong sebelah")

            const data = { ...values, logo: res.url }

            await updateSubUnit({ id, data })

            toast.success("Success", {
                description: "Sub-unit Berhasil Diupdate"
            })

            router.refresh()
            onOpenChange(!open)

        } catch (error) {
            toast.error("Error", {
                description: "Err: ada yang salah, monggo teh"
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
                                    <FormLabel>Nama Sub-unit</FormLabel>
                                    <FormControl>
                                        <Input
                                            type="text"
                                            placeholder="Isi nama sub-unit"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="singkatan"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>singkatan Sub-unit</FormLabel>
                                    <FormControl>
                                        <Input
                                            type="text"
                                            placeholder="Isi singkatan sub-unit"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="warna"
                            render={({ field }) => (
                                <FormItem className="flex-grow">
                                    <FormLabel>Warna</FormLabel>
                                    <Select
                                        onValueChange={warna => field.onChange(warna)}
                                    >
                                        <FormControl>
                                            <SelectTrigger className={cn("dark:text-white text-black", kumpulanWarna[field.value as Warna],
                                                { "text-white": field.value === "black" })}>
                                                <SelectValue placeholder={dataAfiliasi.warna} />
                                            </SelectTrigger>
                                        </FormControl>
                                        <SelectContent>
                                            <SelectGroup>
                                                <SelectLabel>Warna...</SelectLabel>
                                                {Object.keys(kumpulanWarna).map(warna => (
                                                    <SelectItem key={warna} value={warna} className={cn("text-white my-1 focus:ring-2 focus:ring-black focus:dark:ring-white cursor-pointer focus-within:font-semibold focus:ring-inset focus:px-8 transition-all duration-300", kumpulanWarna[warna as Warna],
                                                        {
                                                            "text-white": warna === "black",
                                                            "text-black": warna === "white"
                                                        })}>
                                                        {warna}
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
                    <div className="flex flex-col">
                        <FormField
                            control={form.control}
                            name="logo"
                            render={({ field }) => (
                                <FormItem className="">
                                    <FormLabel>Logo</FormLabel>
                                    <FormControl>
                                        <SingleImageDropzone
                                            width={300}
                                            height={300}
                                            value={file ? file : dataAfiliasi.logo}
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
                                <FormLabel>Deskripsi Sub-unit</FormLabel>
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
                                        initialValue={dataAfiliasi.deskripsi}
                                        onEditorChange={(Content) => field.onChange(Content)}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <Button disabled={form.formState.isSubmitting} aria-disabled={form.formState.isSubmitting} type="submit">
                        {form.formState.isSubmitting ? <Loader className="mr-2 w-5 animate-spin" /> : <PencilLine className="mr-2 w-5" />}
                        Update
                    </Button>
                </form>
            </Form>
        </>
    );
};

export default FormUpdateAfiliasi;
