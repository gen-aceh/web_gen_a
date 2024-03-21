"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"

import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useForm } from "react-hook-form"
import { FormEvent } from "react"
import { ContactMailSchema } from "@/lib/validation/MailContactValidation"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "sonner"
import emailjs from '@emailjs/browser';
import { Loader2 } from "lucide-react"

export function FormContact() {
    const form = useForm<z.infer<typeof ContactMailSchema>>({
        resolver: zodResolver(ContactMailSchema),
        defaultValues: {
            nama: "",
            email: "",
            subjek: "",
            pesan: "",
        },
    })

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY

    const handleSubmit = (values: z.infer<typeof ContactMailSchema>) => {

        const templateParams = {
            from_name: values.nama,
            from_subject: values.subjek,
            from_email: values.email,
            message: values.pesan,
            to_name: 'gen-a'
        }

        emailjs.send(serviceId, templateId, templateParams, publicKey)
            .then((response) => {
                form.reset()
                toast.success("Success", {
                    description: "your message is accepted, please wait for our responds 😊"
                })
            }).catch(error => {
                console.log(error)
                toast.error("Error", {
                    description: "Something Went Wrong!"
                })
            })
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-8">
                <FormField
                    control={form.control}
                    name="nama"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Username</FormLabel>
                            <FormControl>
                                <Input placeholder="Namamu ..." {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>email</FormLabel>
                            <FormControl>
                                <Input placeholder="masukkan emailmu..." {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="subjek"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Subjek</FormLabel>
                            <FormControl>
                                <Input placeholder="tentang apakah ini..." {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="pesan"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Massage</FormLabel>
                            <FormControl>
                                <Textarea rows={10} placeholder="ketikkan pesan anda disini..." {...field} />
                            </FormControl>
                            <FormDescription>
                                kirimkan pesan/kesan/saran anda kepada kami
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button disabled={form.formState.isSubmitting} aria-disabled={form.formState.isSubmitting} type="submit">
                    {form.formState.isSubmitting && <Loader2 className="mr-2 w-5 animate-spin" />}
                    Submit
                </Button>
            </form>
        </Form>
    )
}