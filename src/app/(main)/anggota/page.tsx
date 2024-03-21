import CardAnggota from "@/components/MainComponent/Card/CardAnggota"
import { Separator } from "@/components/ui/separator"
import { prisma } from "@/lib/Prisma"
import { Metadata } from "next"
import Image from "next/image"

export const metadata: Metadata = {
  title: "Anggota"
}

const page = async () => {
  const dataDph = await prisma.anggota.findMany({
    where: {
      afiliasiId: 'clpau070b0000btf9hyhz5vme'
    }
  })
  const dataAnggota = await prisma.anggota.findMany({
    where: {
      NOT: {
        afiliasiId: 'clpau070b0000btf9hyhz5vme'
      }
    }
  })

  return (
    <>
      <section>
        <div className="py-10 px-5 bg-third-gradient">
          <Image className="rounded-3xl mx-auto border-x-4 border-x-primary" src={'/bph.png'} alt="struktur organisasi" width={1080} height={720} />
        </div>
        <div className="h-full border-y-4 xl:px-0 px-5 border-y-secondary rounded-bl-xl text-center bg-secondary">
          <div className="container py-4 xl:px-0 px-10 bg-white rounded-xl">
            <h3 className="text-3xl font-bold">Anggota</h3>
          </div>
        </div>
      </section>
      <section className="bg-[url(/wavy/haikei/circle-scatter-haikei_left.svg)] bg-cover bg-bottom relative">
        <div className="py-10 px-5 backdrop-blur-sm">
          <Image className="rounded-3xl mx-auto border-x-4 border-x-secondary" src={'/strukturisasi.png'} alt="struktur organisasi" width={1080} height={720} />
        </div>
      </section>
      {/* <section className="flex flex-col gap-4 p-10 container">
        <h3 className="self-center">Para Suhu</h3>
        <Separator className="my-5 w-1/3" />
        <div className="bg-white/80 w-full shadow-md rounded-xl p-10">
          <div className="flex justify-center">
            {dataDph.map(data => {
              return (
                <CardAnggota key={data.id} jabatan={data.jabatan} deskripsi={data.about} nama={data.nama} />
              )
            })}
          </div>
        </div>
      </section> */}
      {/* <section className="flex flex-col gap-4 p-10 container">
        <h3 className="self-center">Anggota lainnya</h3>
        <Separator className="my-5 w-1/3" />
        <div className="bg-white/80 w-full shadow-md rounded-xl p-10">
          <h4>Divisi Internal</h4>
          <hr className="my-5 bg-black me-auto w-2/6" />
          <div className="flex justify-center">
            {dataAnggota.map(data => {
              return (
                <CardAnggota key={data.id} jabatan={data.jabatan} deskripsi={data.about} nama={data.nama} />
              )
            })}
          </div>
        </div>
        <div className="bg-white/80 w-full shadow-md rounded-xl p-10">
          <h4>Divisi Internal</h4>
          <hr className="my-5 bg-black me-auto w-2/6" />
          <div className="flex justify-center">
            {dataAnggota.map(data => {
              return (
                <CardAnggota key={data.id} jabatan={data.jabatan} deskripsi={data.about} nama={data.nama} />
              )
            })}
          </div>
        </div>
        <div className="bg-white/80 w-full shadow-md rounded-xl p-10">
          <h4>Divisi Internal</h4>
          <hr className="my-5 bg-black me-auto w-2/6" />
          <div className="flex justify-center">
            {dataAnggota.map(data => {
              return (
                <CardAnggota key={data.id} jabatan={data.jabatan} deskripsi={data.about} nama={data.nama} />
              )
            })}
          </div>
        </div>
        <div className="bg-white/80 w-full shadow-md rounded-xl p-10">
          <h4>Divisi Internal</h4>
          <hr className="my-5 bg-black me-auto w-2/6" />
          <div className="flex justify-center">
            {dataAnggota.map(data => {
              return (
                <CardAnggota key={data.id} jabatan={data.jabatan} deskripsi={data.about} nama={data.nama} />
              )
            })}
          </div>
        </div>
        <div className="bg-white/80 w-full shadow-md rounded-xl p-10">
          <h4>Divisi Internal</h4>
          <hr className="my-5 bg-black me-auto w-2/6" />
          <div className="flex justify-center">
            {dataAnggota.map(data => {
              return (
                <CardAnggota key={data.id} jabatan={data.jabatan} deskripsi={data.about} nama={data.nama} />
              )
            })}
          </div>
        </div>
        <div className="bg-white/80 w-full shadow-md rounded-xl p-10">
          <h4>Divisi Internal</h4>
          <hr className="my-5 bg-black me-auto w-2/6" />
          <div className="flex justify-center">
            {dataAnggota.map(data => {
              return (
                <CardAnggota key={data.id} jabatan={data.jabatan} deskripsi={data.about} nama={data.nama} />
              )
            })}
          </div>
        </div>
        <div className="bg-white/80 w-full shadow-md rounded-xl p-10">
          <h4>Divisi Internal</h4>
          <hr className="my-5 bg-black me-auto w-2/6" />
          <div className="flex justify-center">
            {dataAnggota.map(data => {
              return (
                <CardAnggota key={data.id} jabatan={data.jabatan} deskripsi={data.about} nama={data.nama} />
              )
            })}
          </div>
        </div>
        <div className="bg-white/80 w-full shadow-md rounded-xl p-10">
          <h4>Divisi Internal</h4>
          <hr className="my-5 bg-black me-auto w-2/6" />
          <div className="flex justify-center">
            {dataAnggota.map(data => {
              return (
                <CardAnggota key={data.id} jabatan={data.jabatan} deskripsi={data.about} nama={data.nama} />
              )
            })}
          </div>
        </div>
        <div className="bg-white/80 w-full shadow-md rounded-xl p-10">
          <h4>Divisi Internal</h4>
          <hr className="my-5 bg-black me-auto w-2/6" />
          <div className="flex justify-center">
            {dataAnggota.map(data => {
              return (
                <CardAnggota key={data.id} jabatan={data.jabatan} deskripsi={data.about} nama={data.nama} />
              )
            })}
          </div>
        </div>
      </section> */}
    </>
  )
}

export default page