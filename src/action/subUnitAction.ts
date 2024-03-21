"use server"

import { prisma } from "@/lib/Prisma";
import { AfiliasiSchema } from "@/lib/validation/PostValidation";
import { z } from "zod";

export async function addSubUnit(data: z.infer<typeof AfiliasiSchema>) {
    const { deskripsi, logo, nama, singkatan, warna } = data

    return await prisma.afiliasi.create({
        data: {
            deskripsi : deskripsi,
            nama : nama,
            logo : logo,
            singkatan: singkatan,
            warna : warna,
        }
    })
}

export async function updateSubUnit({ id, data }: {id: string, data: z.infer<typeof AfiliasiSchema> }) {
    const { deskripsi, logo, nama, singkatan, warna } = data

    return await prisma.afiliasi.update({
        where: {
            id: id
        },
        data: {
            deskripsi : deskripsi,
            nama : nama,
            logo : logo,
            singkatan: singkatan,
            warna : warna,
        }
    })
}

export async function deleteSubUnit(id: string) {
    return await prisma.afiliasi.delete({
        where: {
            id: id
        }
    })
}