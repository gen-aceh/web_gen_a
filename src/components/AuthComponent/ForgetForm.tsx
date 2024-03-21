"use client";

import { useForm } from "react-hook-form";
import { Button } from "../ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";
import { toast } from "../ui/use-toast";
import { z } from "zod";
import { EmailSchema, NewPasswordSchema } from "@/lib/validation/AuthValidation";
import { zodResolver } from "@hookform/resolvers/zod";

const ForgetForm = () => {
  const [openModal, setOpenModal] = useState<boolean>(false);

  const formEmail = useForm<z.infer<typeof EmailSchema>>({
    resolver : zodResolver(EmailSchema),
    defaultValues : {
      email : undefined,
    }
  });

  const handleEmail = (data : z.infer<typeof EmailSchema>) => {
    setOpenModal(true);
    console.log(data);
  };

  const formPassword = useForm<z.infer<typeof NewPasswordSchema>>({
    resolver : zodResolver(NewPasswordSchema),
    defaultValues : {
      newPassword : undefined,
      confirmPassword : undefined
    }
  });

  const handlePasswordChange = (data : z.infer<typeof NewPasswordSchema>) => {
    toast({
      variant: "success",
      description: `Action Success <br />Isinya ${data}`,
    });
    console.log(data);
    setOpenModal(false);
  };
  
  return (
    <>
      <Form {...formEmail}>
        <form
          onSubmit={formEmail.handleSubmit(handleEmail)}
          className="space-y-8"
        >
          <FormField
            control={formEmail.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="example@gmail.com" {...field} />
                </FormControl>
                <FormDescription>Isikan Emailmu!</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">Submit</Button>
        </form>
      </Form>
      <Dialog open={openModal} onOpenChange={setOpenModal}>
        <Form {...formPassword}>
          <form onSubmit={formPassword.handleSubmit(handlePasswordChange)}>
            <DialogContent className="border-l-4 border-l-primary">
              <DialogHeader className="space-y-5">
                <DialogTitle className="text-xl">Ubah Password</DialogTitle>
                <FormField
                  control={formPassword.control}
                  name="newPassword"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>New Password</FormLabel>
                      <FormControl>
                        <Input type="password" placeholder="****" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={formPassword.control}
                  name="confirmPassword"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Confirm Password</FormLabel>
                      <FormControl>
                        <Input type="password" placeholder="****" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </DialogHeader>
              <DialogFooter>
                <Button type="submit">Submit</Button>
              </DialogFooter>
            </DialogContent>
          </form>
        </Form>
      </Dialog>
    </>
  );
};

export default ForgetForm;
