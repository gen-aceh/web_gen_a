export const kategori = [
  "Sosialisasi",
  "Edukasi",
  "Promosi",
  "Gotong Royong",
] as const;

export const status = ["publish", "pending"] as const;

export const kategoriAnggota = ["Internal", "Eksternal"] as const;

export const JabatanAnggota = [
  "Ketua",
  "Sekretaris",
  "Bendahara",
  "Anggota",
] as const;

export const Pendidikan = [
  "SMA",
  "KULIAH",
  "D3",
  "S1",
  "S2",
  "S3"
] as const;

export const Role = ["Admin", "User"] as const;

export enum kumpulanWarna {
  slate= "bg-gradient-to-br from-slate-400 via-slate-400 to-slate-500",
  black= "bg-black",
  white= "bg-white",
  gray= "bg-gradient-to-br from-gray-400 via-gray-400 to-gray-500",
  red= "bg-gradient-to-br from-red-500 via-red-500 to-red-600",
  orange= "bg-gradient-to-br from-orange-400 via-orange-400 to-orange-500",
  amber= "bg-gradient-to-br from-amber-400 via-amber-400 to-amber-500",
  yellow= "bg-gradient-to-br from-yellow-400 via-yellow-400 to-yellow-500",
  lime= "bg-gradient-to-br from-lime-400 via-lime-400 to-lime-500",
  teal= "bg-gradient-to-br from-teal-400 via-teal-400 to-teal-500",
  cyan= "bg-gradient-to-br from-cyan-400 via-cyan-400 to-cyan-500",
  blue= "bg-gradient-to-br from-blue-400 via-blue-400 to-blue-500",
  indigo= "bg-gradient-to-br from-indigo-400 via-indigo-400 to-indigo-500",
  violet= "bg-gradient-to-br from-violet-400 via-violet-400 to-violet-500",
  purple= "bg-gradient-to-br from-purple-400 via-purple-400 to-purple-500",
  fuchsia= "bg-gradient-to-br from-fuchsia-400 via-fuchsia-400 to-fuchsia-500",
}

export type Warna = keyof typeof kumpulanWarna;
