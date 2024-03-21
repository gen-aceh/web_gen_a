import ButtonBack from "@/components/ButtonBack"
import FormAfiliasi from "@/components/DashboardComponent/form/FormAfiliasi"
import { Separator } from "@/components/ui/separator"
import { Metadata } from "next"

export const metadata: Metadata = {
  title : "Tambah Unggulan"
}

const AddAfiliasi = () => {
  return (
    <section className="bg-background shadow py-5 px-8 rounded-lg">
    <ButtonBack />
    <div className="py-5">
      <h1 className="text-3xl font-bold mb-4 text-center">Tambah Sub-Unit</h1>
      <Separator className="mb-6"/>
      <FormAfiliasi />
    </div>
    </section>
  )
}

export default AddAfiliasi