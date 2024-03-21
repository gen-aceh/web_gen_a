"use client";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginSchema } from "@/lib/validation/AuthValidation";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useForm } from "react-hook-form";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTrigger,
} from "../ui/alert-dialog";
import {
  AlertDialogCancel,
  AlertDialogDescription,
  AlertDialogTitle,
} from "@radix-ui/react-alert-dialog";
import { toast } from "../ui/use-toast";

const LoginForm = () => {
  const form = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const handleSubmit = (values: z.infer<typeof LoginSchema>) => {
    try {
      
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "you got this error: " + error
      })
    }
    console.log(values);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-5">
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder="Salmon Kuah" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input type="password" placeholder="****" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <AlertDialog>
          <p className="text-xs">
            Belum Punya akun?
            <AlertDialogTrigger>
              <span className="font-bold cursor-pointer ml-1 hover:underline">klik disini</span>
            </AlertDialogTrigger>
          </p>
          <AlertDialogContent className="border-l-4 border-l-primary">
            <AlertDialogHeader className="space-y-4">
              <AlertDialogTitle className="text-xl">
                Ihh, Beneran Nggak Punya?
              </AlertDialogTitle>
              <hr className="bg-black mr-auto w-3/5" />
              <AlertDialogDescription className="text-sm">
                Kasian deh <span className="text-xl">&#128569;</span> <br />{" "}
                makanya hubungin admin dulu sana gih... gua mana bisa bantu
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel asChild>
                <Button className="flex justify-center items-center"><span className="text-2xl mr-2">&#128083;</span>Bye</Button>
              </AlertDialogCancel>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
        <Button type="submit">Sign In</Button>
      </form>
    </Form>
  );
};

export default LoginForm;
