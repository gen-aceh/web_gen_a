"use server"

import { Konfigurasi } from "@prisma/client";
import { prisma } from "./Prisma";

export const getConfig = async () => {
  const config = await prisma.konfigurasi.findFirst();

  return config;
};

export const getUsers = async () => {
  const users = await prisma.user.findMany()

  return users
}

export const getKategori = async () => {
  const kategori = await prisma.kategori.findMany()

  return kategori
}

export const getAfiliasi = async  () => {
  const afiliasi = await prisma.afiliasi.findMany();

  return afiliasi
}

export const getAnggota = async () => {
  const anggota = await prisma.anggota.findMany()

  return anggota
}

// export const siteConfig: Konfigurasi = {
  
// }