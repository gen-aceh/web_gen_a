import FormConfig from "@/components/DashboardComponent/form/FormConfig";
import { Separator } from "@/components/ui/separator";
import { getConfig } from "@/lib/Config";
import { Metadata } from "next";
import { unstable_noStore as noStore } from 'next/cache';

export const metadata: Metadata = {
  title : "Pengaturan Web"
}

const Pengaturan = async () => {
  noStore()
  const config = await getConfig()

  return (
    <section className="bg-background shadow py-5 px-8 rounded-lg">
    <div className="py-5">
      <h1 className="text-3xl font-bold mb-4 text-center">Pengaturan Aplikasi</h1>
      <Separator className="mb-6"/>
      <FormConfig config={ config } />
    </div>
    </section>
  );
};

export default Pengaturan;
