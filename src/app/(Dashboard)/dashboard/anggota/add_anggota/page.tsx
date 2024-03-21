import ButtonBack from "@/components/ButtonBack";
import FormAnggota from "@/components/DashboardComponent/form/FormAnggota";
import { Separator } from "@/components/ui/separator";
import { getAfiliasi } from "@/lib/Config";
import { Metadata } from "next";

export const metadata: Metadata = {
  title : "Tambah Anggota"
}

const AddAnggota = async () => {
  const dataSubUnit = await getAfiliasi();

  return (
    <section className="bg-background shadow py-5 px-8 rounded-lg">
      <ButtonBack />
      <div className="py-5">
        <h1 className="text-3xl font-bold mb-4 text-center">Tambah Anggota</h1>
        <Separator className="mb-6" />
        <FormAnggota subUnit={dataSubUnit} />
      </div>
    </section>
  );
};

export default AddAnggota;
