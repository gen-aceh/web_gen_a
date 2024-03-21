import { columns } from "./column";
import { Metadata } from "next";
import { DataTableBerita } from "@/components/DashboardComponent/DataTableBerita";
import { prisma } from "@/lib/Prisma";
import { unstable_noStore as noStore } from 'next/cache';

export const metadata: Metadata = {
  title: "Berita"
}

const Inbox = async () => {
  noStore()

  const dataBerita = await prisma.berita.findMany({
    include: {
      author: {
        select: { nama: true }
      },
      editor: {
        select: { nama: true }
      },
      kategori: true
    },
    orderBy: { createdAt: "desc" }
  })

  return (
    <section>
      <DataTableBerita columns={columns} data={dataBerita} />
    </section>
  );
};

export default Inbox;