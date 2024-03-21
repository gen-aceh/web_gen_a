import { columns } from "./column";
import { Metadata } from "next";
import { DataTableUnggulan } from "@/components/DashboardComponent/DataTableUnggulan";
import { prisma } from "@/lib/Prisma";
import { unstable_noStore as noStore } from 'next/cache';

export const metadata: Metadata = {
  title : "Unggulan"
}

const Unggulan = async () => {
  noStore()

  const dataKegiatan = await prisma.kegiatan.findMany({
    where: {
      isUnggulan: true
    },
    include: {
      author: {
        select: { nama: true }
      },
      subUnit: {
        select: { singkatan: true, warna: true }
      },
      tags: true
    },
    orderBy: { unggulanUpdate: "desc" }
  })

    return (
      <section>
        <DataTableUnggulan columns={columns} data={dataKegiatan} />
      </section>
    );
  };
  
  export default Unggulan;