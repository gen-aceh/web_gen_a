import { DataTableAnggota } from "@/components/DashboardComponent/DataTableAnggota";
import { columns } from "./column";
import { Metadata } from "next";
import { prisma } from "@/lib/Prisma";
import { unstable_noStore as noStore } from 'next/cache';

export const metadata: Metadata = {
  title : "Anggota"
}

const Anggota = async() => {
  noStore()

  const dataAnggota = await prisma.anggota.findMany({
    include: {
      afiliasi : {
        select: { singkatan: true },
      }
    },
    orderBy: {
      createdAt: "desc"
    }
  })

  return (
    <section>
      <DataTableAnggota columns={columns} data={dataAnggota} />
    </section>
  );
};

export default Anggota;
