import { z } from "zod";
import { Role } from "../Constant";

const MAX_IMAGE_SIZE = 3;
const ALLOWED_IMAGE_TYPES = [
  "image/jpeg",
  "image/png",
  "image/webp",
  "image/jpg",
];

export const LoginSchema = z.object({
  username: z.string().min(1, { message: "Harus isi username" }),
  password: z.string().min(1, { message: "Harus isi password" }),
});

export const RegisterSchema = z.object({
  nama: z.string({ required_error: "Harus masukkan nama lengkap" }),
  username: z
    .string({ required_error: "Harus masukkan nama panggilan" })
    .max(30, {
      message: "panjang banget panggilanmu bahh, pendekkan lagi!!",
    }),
  email: z
    .string()
    .email()
    .refine(val => val.endsWith("@gmail.com") || val.endsWith("@yahoo.com"), {
      message: "Emailnya yang bener dong (...@gmail.com) atau (...@yahoo.com)",
    }),
  password: z
    .string()
    .min(1, { message: "Password harus diisi" })
    .min(3, { message: "sikit banget bahh, jangan kurang dari 3 karakter" })
    .regex(/^(?=.*[A-Z])(?=.*\d)/, {
      message:
        "Password harus setidaknya memiliki satu huruf kapital dan satu angka",
    }),
  profil: z.any(),
  role: z.enum(Role),
});

export const EmailSchema = z.object({
  email: z
    .string({ required_error: "email harus diisi" })
    .email()
    .refine(val => val.endsWith("@gmail.com") || val.endsWith("@yahoo.com"), {
      message: "Emailnya yang bener dong (...@gmail.com) atau (...@yahoo.com)",
    }),
});

export const NewPasswordSchema = z
  .object({
    newPassword: z
      .string({ required_error: "Harus diisi !!" })
      .min(3, { message: "sikit banget bahh, jangan kurang dari 3 karakter" })
      .regex(/^(?=.*[A-Z])(?=.*\d)/, {
        message:
          "Password harus setidaknya memiliki satu huruf kapital dan satu angka",
      }),
    confirmPassword: z.string({ required_error: "harus diisi !!" }),
  })
  .refine(val => val.newPassword === val.confirmPassword, {
    path: ["confirmPassword"],
    message: "Konfirmasi Password tidak sesuai",
  });
