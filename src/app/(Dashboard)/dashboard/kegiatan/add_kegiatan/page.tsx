import ButtonBack from "@/components/ButtonBack"
import FormKegiatan from "@/components/DashboardComponent/form/FormKegiatan"
import { Separator } from "@/components/ui/separator"
import { prisma } from "@/lib/Prisma"
import { Metadata } from "next"

export const metadata: Metadata = {
  title : "Tambah Kegiatan"
}

const getSubUnit = async () => {
  const subUnit = await prisma.afiliasi.findMany({
    select: { singkatan: true, id: true }
  })
  return subUnit
}

const getUsers = async () => {
  return await prisma.user.findMany({ select: { id: true, nama: true } })
}

const getTags = async () => {
  return await prisma.tags.findMany()
}

const AddKegiatan = async () => {
  const subUnit = await getSubUnit();
  const users = await getUsers()
  const tags = await getTags()

  return (
    <section className="bg-background shadow py-5 px-8 rounded-lg">
    <ButtonBack />
    <div className="py-5">
      <h1 className="text-3xl font-bold mb-4 text-center">Tambah Kegiatan</h1>
      <Separator className="mb-6"/>
      <FormKegiatan subUnit={subUnit} users={users} tags={tags} />
    </div>
    </section>
  )
}

export default AddKegiatan