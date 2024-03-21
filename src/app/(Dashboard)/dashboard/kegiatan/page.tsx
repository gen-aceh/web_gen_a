import { columns } from "./column";
import { Metadata } from "next";
import { DataTableKegiatan } from "@/components/DashboardComponent/DataTableKegiatan";
import { prisma } from "@/lib/Prisma";
import { unstable_noStore as noStore } from 'next/cache';

export const metadata: Metadata = {
  title : "Kegiatan"
}

const Kegiatan = async () => {
  noStore()

  const dataKegiatan = await prisma.kegiatan.findMany({
    include: {
      author: {
        select: { nama: true }
      },
      subUnit: {
        select: { singkatan: true, warna: true }
      },
      tags: true
    },
    orderBy: { createdAt: "desc" }
  })

    return (
      <section>
        <DataTableKegiatan columns={columns} data={dataKegiatan} />
      </section>
    );
  };
  
  export default Kegiatan;