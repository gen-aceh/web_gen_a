import { Metadata } from "next";
import { DataTableAfiliasi } from "@/components/DashboardComponent/DataTableAfiliasi";
import { columns } from "./column";
import { prisma } from "@/lib/Prisma";
import { unstable_noStore as noStore } from 'next/cache';

export const metadata: Metadata = {
  title: "Afiliasi"
}

const Afiliasi = async () => {
  noStore()
  const afiliasi = await prisma.afiliasi.findMany({
    orderBy: {
      urutan: "asc"
    }
  });
  
  return (
    <section>
      <DataTableAfiliasi columns={columns} data={afiliasi} />
    </section>
  );
};

export default Afiliasi;