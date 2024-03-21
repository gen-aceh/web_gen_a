import AfiliasiSlider from "@/components/MainComponent/Slider/AfiliasiSlider"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Warna, kumpulanWarna } from "@/lib/Constant"
import { prisma } from "@/lib/Prisma"
import { cn } from "@/lib/utils"
import { Landmark } from "lucide-react"
import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Subunit"
}

const Page = async () => {
  const getAfiliasi = await prisma.afiliasi.findMany({
    select: {
      logo: true,
      singkatan: true,
      deskripsi: true,
      warna: true,
      nama: true
    },
    where: {
      NOT: {
        nama: 'DPH'
      }
    },
    orderBy: {
      urutan: 'asc'
    }
  })

  return (
    <>
      {/* -------------------------------------------- header section ---------------------------------------------------------- */}
      <section>
        <div className="hidden 2xl:flex divide-x-2 divide-primary">
          <div className="relative overflow-hidden w-1/4 h-[60vh] bg-gradient-to-t from-black/90 via-black/70">
            <Image src={'/background/bg-slide-1.jpg'} alt="bg" className="object-cover -z-10" fill priority sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"/>
          </div>
          <div className="relative overflow-hidden w-1/4 h-[60vh] bg-gradient-to-t from-black/90 via-black/70">
            <Image src={'/background/bg-slide-2.jpg'} alt="bg" className="object-cover -z-10" fill priority sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"/>
          </div>
          <div className="relative overflow-hidden w-1/4 h-[60vh] bg-gradient-to-t from-black/90 via-black/70">
            <Image src={'/background/bg-slide-3.png'} alt="bg" className="object-cover -z-10" fill priority sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"/>
          </div>
          <div className="relative overflow-hidden w-1/4 h-[60vh] bg-gradient-to-t from-black/90 via-black/70">
            <Image src={'/background/bg-slide-4.jpg'} alt="bg" className="object-cover -z-10" fill priority sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"/>
          </div>
        </div>
        <div className="2xl:hidden bg-gradient-to-t from-black/90 via-black/70">
          <AfiliasiSlider />
        </div>
        <div className="h-full border-y-4 xl:px-0 px-5 border-y-primary rounded-b-xl text-center bg-primary">
          <div className="container py-4 xl:px-0 px-10 bg-white rounded-xl">
            <h3 className="text-3xl font-bold">Subunit</h3>
          </div>
        </div>
      </section>

      {/* -------------------------------------------- deskripsi section --------------------------------------------------------- */}
      <section>
        <div className="container 2xl:px-2 px-10 flex flex-wrap items-center justify-between py-20 gap-10">
          <div className="space-y-5 lg:w-1/2 w-full">
            <h3>Tentang Subunit</h3>
            <hr className="border border-third w-2/6" />
            <p>Subunit adalah bagian integral dari struktur organisasi yang memperinci tugas-tugas khusus yang dikerjakan dalam rangka mencapai tujuan keseluruhan. Dalam suatu organisasi, subunit merupakan unit-unit kecil yang memiliki fokus pada aspek tertentu dari pekerjaan yang dilakukan. Subunit juga memfasilitasi koordinasi yang lebih baik di antara anggota tim. Dengan memiliki fokus yang jelas, komunikasi dan kolaborasi antara anggota subunit menjadi lebih mudah dipahami dan diatur. Hal ini memungkinkan organisasi untuk beradaptasi dengan perubahan pasar atau kebutuhan pelanggan dengan lebih cepat dan efektif.</p>
          </div>
          <div className="lg:w-1/3 w-full flex justify-center grow">
            <div className="w-full min-h-[250px] rounded-xl p-2 bg-white shadow-md rotate-6">
              <div className="w-full h-full rounded-lg relative overflow-hidden">
                <Image src="/placeholder/afiliasi_1.jpg" alt="blob" fill className="object-cover" />
              </div>
            </div>
            <div className="w-full min-h-[250px] rounded-xl p-2 bg-white shadow-md rotate-6">
              <div className="w-full h-full rounded-lg relative overflow-hidden">
                <Image src="/placeholder/afiliasi_2.jpg" alt="blob" fill className="object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-10 2xl:px-2 px-10 container">
        <h3>Subunit Kami</h3>
        <hr className="border border-third w-3/12 my-4" />
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 my-10">
          {getAfiliasi.map((item, index) => {
            return (
              <Card key={index} className={cn("text-center p-10 pointer-events-none", kumpulanWarna[item.warna as Warna])}>
                <CardHeader>
                  <div className="w-36 h-36 bg-white shadow-md mb-5 mx-auto rounded-full overflow-hidden relative">
                    <Image src={item.logo} alt="" className="object-cover" fill />
                  </div>
                  <CardTitle className="text-xl">{item.nama + " ( " + item.singkatan + " )"}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-md" dangerouslySetInnerHTML={{ __html: item.deskripsi }}></div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </section>
      {/* <div className="relative">
          <Image src="/background/background-fluid/bottom-4" alt="bg" fill />
      </div> */}
    </>
  )
}

export default Page