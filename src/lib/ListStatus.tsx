import { BsStars } from "react-icons/bs";
import { IListStatus } from "./Types";
import { HiMiniClipboardDocumentList, HiUserGroup } from "react-icons/hi2";
import { IoNewspaperSharp } from "react-icons/io5";
import { ArrowBigRightDash } from "lucide-react";
import { prisma } from "./Prisma";
import { formatDistance } from "date-fns";

// jumlah post
// @ts-ignore
const dataUnggulan = await prisma.kegiatan.count({ where: { isUnggulan: true } })

// @ts-ignore
const dataAfiliasi = await prisma.afiliasi.count()

// @ts-ignore
const dataKegiatan = await prisma.kegiatan.count()

// @ts-ignore
const dataBerita = await prisma.berita.count()

// @ts-ignore
const dataAnggota = await prisma.anggota.count()

// @ts-ignore
const dataUser = await prisma.user.count()

//Last Update
//@ts-ignore
const lastUnggulan = await prisma.kegiatan.findFirst({
  where: {
    isUnggulan: true
  },
  orderBy: {
    updatedAt: 'desc'
  },
  select: { unggulanUpdate: true }
})

//@ts-ignore
const lastAfiliasi = await prisma.afiliasi.findFirst({
  orderBy: {
    updatedAt: 'desc'
  },
  select: { updatedAt: true }
})

//@ts-ignore
const lastKegiatan = await prisma.kegiatan.findFirst({
  orderBy: {
    updatedAt: 'desc'
  },
  select: { updatedAt: true }
})

//@ts-ignore
const lastBerita = await prisma.berita.findFirst({
  orderBy: {
    updatedAt: 'desc'
  },
  select: { updatedAt: true }
})

//@ts-ignore
const lastAnggota = await prisma.anggota.findFirst({
  orderBy: {
    updatedAt: 'desc'
  },
  select: { updatedAt: true }
})

//@ts-ignore
const lastUser = await prisma.user.findFirst({
  orderBy: {
    updatedAt: 'desc'
  },
  select: { updatedAt: true }
})

export const ListStatus: IListStatus[] = [
  {
    post: dataUnggulan,
    title: "Unggulan",
    icon: <BsStars className="text-3xl" />,
    iconButton: <ArrowBigRightDash className="w-5" />,
    link: "/dashboard/unggulan",
    lastUpdate: dataUnggulan || lastUnggulan.unggulanUpdate ? formatDistance(lastUnggulan.unggulanUpdate, new Date()) : "Tidak ada Unggulan"
  },
  {
    post: dataKegiatan,
    title: "Kegiatan",
    icon: <HiMiniClipboardDocumentList className="text-3xl" />,
    iconButton: <ArrowBigRightDash className="w-5" />,
    link: "/dashboard/kegiatan",
    lastUpdate: lastKegiatan.updatedAt ? formatDistance(lastKegiatan.updatedAt, new Date()) : "Tidak ada Kegiatan"
  },
  {
    post: dataBerita,
    title: "Berita",
    icon: <IoNewspaperSharp className="text-3xl" />,
    iconButton: <ArrowBigRightDash className="w-5" />,
    link: "/dashboard/berita",
    lastUpdate: lastBerita.updatedAt ? formatDistance(lastBerita.updatedAt, new Date()) : "Tidak ada Berita"
  },
  {
    post: dataAnggota,
    title: "Anggota",
    icon: <HiUserGroup className="text-3xl" />,
    iconButton: <ArrowBigRightDash className="w-5" />,
    link: "/dashboard/anggota",
    lastUpdate: lastAnggota.updatedAt ? formatDistance(lastAnggota.updatedAt, new Date()) : "Tidak ada Anggota"
  },
  // {
  //   post: 5,
  //   title: "Galeri",
  //   icon: <HiUserGroup className="text-3xl" />,
  //   iconButton: <ArrowBigRightDash className="w-5" />,
  //   link: "/dashboard/gallery",
  // },
  {
    post: dataAfiliasi,
    title: "Sub-Unit",
    icon: <HiUserGroup className="text-3xl" />,
    iconButton: <ArrowBigRightDash className="w-5" />,
    link: "/dashboard/afiliasi",
    lastUpdate: lastAfiliasi.updatedAt ? formatDistance(lastAfiliasi.updatedAt, new Date()) : "Tidak ada Sub-Unit"
  },
  {
    post: dataUser,
    title: "User",
    icon: <HiUserGroup className="text-3xl" />,
    iconButton: <ArrowBigRightDash className="w-5" />,
    link: "/dashboard/user",
    lastUpdate: lastUser.updatedAt ? formatDistance(lastUser.updatedAt, new Date()) : "Tidak ada User"
  },
];
