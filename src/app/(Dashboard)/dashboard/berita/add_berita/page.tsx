import ButtonBack from "@/components/ButtonBack"
import FormBerita from "@/components/DashboardComponent/form/FormBerita"
import { Separator } from "@/components/ui/separator"
import { getAnggota, getKategori, getUsers } from "@/lib/Config"  
import { Metadata } from "next"

export const metadata: Metadata = {
  title : "Tambah Berita"
}

const AddBerita = async () => {
  const kategori = await getKategori();
  const author = await getAnggota();
  const editor = await getUsers();

    return (
      <section className="bg-background shadow py-5 px-8 rounded-lg">
        <ButtonBack />
        <div className="py-5">
          <h1 className="text-3xl font-bold mb-4 text-center">Tambah Berita</h1>
          <Separator className="mb-6"/>
          <FormBerita kategori={kategori} authors={author} editors={editor} />
        </div>
        </section>
    )
  }
  
  export default AddBerita