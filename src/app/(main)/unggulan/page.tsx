import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { prisma } from "@/lib/Prisma";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Unggulan"
}

const Page = async () => {
  const getAfiliasi = await prisma.afiliasi.findMany({
    select: {
      id: true,
      logo: true,
      nama: true,
      singkatan: true,
      urutan: true,
    },
    where: {
      NOT: {
        nama: 'DPH'
      }
    },
    orderBy: {
      urutan: "asc"
    }
  })

  return (
    <>
      <section>
        <div className="relative overflow-hidden h-[70vh] bg-gradient-to-t from-black/90 via-black/70">
          <Image src={'/placeholder/unggulan_1.png'} alt="" className="object-cover -z-10" fill priority sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
        </div>
        <div className="h-full border-y-4 xl:px-0 px-5 border-y-primary rounded-b-xl text-center bg-primary">
          <div className="container py-4 xl:px-0 px-10 bg-white rounded-xl">
            <h3 className="text-3xl font-bold">Unggulan</h3>
          </div>
        </div>
      </section>
      <section className="py-10">
        <h3 className="text-4xl text-center mb-3">Basis Program Unggulan</h3>
        <hr className="border border-third w-1/6 mx-auto" />
        <div className="px-10 sm:px-32">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-10">
            <Card className="max-w-[400px] p-4 md:p-6 border-l-4 border-l-primary">
              <CardContent className="p-0 text-sm sm:text-base md:text-xl font-bold text-ellipsis">
                Product-based
              </CardContent>
            </Card>
            <Card className="max-w-[400px] p-4 md:p-6 border-l-4 border-l-primary">
              <CardContent className="p-0 text-sm sm:text-base md:text-xl font-bold text-ellipsis">
                Research-based
              </CardContent>
            </Card>
            <Card className="max-w-[400px] p-4 md:p-6 border-l-4 border-l-primary">
              <CardContent className="p-0 text-sm sm:text-base md:text-xl font-bold text-ellipsis">
                Sustainability-based
              </CardContent>
            </Card>
            <Card className="max-w-[400px] p-4 md:p-6 border-l-4 border-l-primary">
              <CardContent className="p-0 text-sm sm:text-base md:text-xl font-bold text-ellipsis">
                Multi Sector
              </CardContent>
            </Card>
            <Card className="max-w-[400px] p-4 md:p-6 border-l-4 border-l-primary">
              <CardContent className="p-0 text-sm sm:text-base md:text-xl font-bold text-ellipsis">
                Collaboration
              </CardContent>
            </Card>
            <Card className="max-w-[400px] p-4 md:p-6 border-l-4 border-l-primary">
              <CardContent className="p-0 text-sm sm:text-base md:text-xl font-bold text-ellipsis">
                Advocation
              </CardContent>
            </Card>
            <Card className="max-w-[400px] p-4 md:p-6 border-l-4 border-l-primary">
              <CardContent className="p-0 text-sm sm:text-base md:text-xl font-bold text-ellipsis">
                Entrepreneurship
              </CardContent>
            </Card>
            <Card className="max-w-[400px] p-4 md:p-6 border-l-4 border-l-primary">
              <CardContent className="p-0 text-sm sm:text-base md:text-xl font-bold text-ellipsis">
                International
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Separator className="my-28" />

      <section className="py-10"> {/* bg-[url(/wavy/haikei/wave-haikei-orange.svg)] bg-cover bg-bottom */}
        {/* <div className="bg-[url(/wavy/haikei/wave-haikei_2.svg)] bg-cover bg-top py-48"> */}
        <h3 className="text-4xl text-center mb-3">Program Unggulan</h3>
        <hr className="border border-third w-1/6 mx-auto" />
        <div className="px-10 sm:px-32">
          <Accordion type="multiple" defaultValue={['item-1', 'item-2', 'item-3', 'item-4', 'item-5']} className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className="rounded-xl bg-white/80 backdrop-blur/80 backdrop-blur px-4 shadow font-semibold shadow-black text-left text-lg sm:text-2xl mt-3"><span className="flex gap-3"><Image className="grow" src={getAfiliasi[0].logo} alt="" width={36} height={36} />{getAfiliasi[0].nama + " ( " + getAfiliasi[0].singkatan + " )"}</span></AccordionTrigger>
              <AccordionContent className="mt-5">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
                  <Card className="min-w-full bg-white/80 backdrop-blur border border-blue-700">
                    <CardHeader>
                      <CardTitle>PEKARU (Pendidikan Kesehatan, Kampanye, Rumah Sehat, dan Grup Edukasi)</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <b>PEKARU</b> adalah program pembinaan dan pemandirian kader desa untuk pengendalian penyakit vektor nyamuk (DBD dan Malaria) dengan pendekatan Health Belief Model (HBM) dan perubahan perilaku.
                    </CardContent>
                  </Card>
                  <Card className="min-w-full bg-white/80 backdrop-blur border border-blue-700">
                    <CardHeader>
                      <CardTitle>EDZOONORIA (Edukasi Pencegahan Zoonosis dengan Ceria nan Islami)</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <b>EDZOONORIA</b> adalah program pembinaan dan pemandirian kader untuk mengatasi permasalahan penyakit yang ditularkan oleh hewan seperti kutuan, rabies, dan scabies.
                    </CardContent>
                  </Card>
                </div>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="rounded-xl bg-white/80 backdrop-blur px-4 shadow font-semibold shadow-black text-left text-lg sm:text-2xl mt-3"><span className="flex gap-3 items-center"><Image className="grow" src={getAfiliasi[6].logo} alt="" width={36} height={36} /> {getAfiliasi[6].nama + " ( " + getAfiliasi[6].singkatan + " )"}</span></AccordionTrigger>
              <AccordionContent className="mt-5">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
                  <Card className="min-w-full bg-white/80 backdrop-blur border border-lime-500">
                    <CardHeader>
                      <CardTitle>SADAR (Santri Dayah First Aider)</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <b>SADAR</b> adalah program pelatihan keterampilan Pertolongan Pertama pada Kecelakaan (P3K) bagi santri dayah/pesantren.
                    </CardContent>
                  </Card>
                  <Card className="min-w-full bg-white/80 backdrop-blur border border-lime-500">
                    <CardHeader>
                      <CardTitle>RAIDER (Remaja First Aider)</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <b>RAIDER</b> adalah program pelatihan keterampilan Pertolongan Pertama pada Kecelakaan (P3K) bagi remaja.
                    </CardContent>
                  </Card>
                  <Card className="min-w-full bg-white/80 backdrop-blur border border-lime-500">
                    <CardHeader>
                      <CardTitle>UKPA (Unit Kesehatan Panti Asuhan)</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <b>UKPA</b> adalah program pembentukan dan pembinaan unit kesehatan untuk menyelesaikan permasalahan kesehatan seperti kecelakaan ringan, demam, dan penyakit ringan lainnya.
                    </CardContent>
                  </Card>
                </div>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger className="rounded-xl bg-white/80 backdrop-blur px-4 shadow font-semibold shadow-black text-left text-lg sm:text-2xl mt-3"><span className="flex gap-3 items-center"><Image className="grow" src={getAfiliasi[2].logo} alt="" width={36} height={36} /> {getAfiliasi[2].nama + " ( " + getAfiliasi[2].singkatan + " )"}</span></AccordionTrigger>
              <AccordionContent className="mt-5">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
                  <Card className="min-w-full bg-white/80 backdrop-blur border border-red-700">
                    <CardHeader>
                      <CardTitle>School Holiday, Cultural & Natural Visit</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <b>Cultural & Natural Visit</b> adalah program tur edukasi budaya dan lingkungan bagi anak-anak (SD-SMP). Lokasi tur edukasi mencakup Museum Tsunami, Gunongan, Taman Sari, Mesjid Raya Baiturrahman, Mesjid Baiturrahim, Kapal Apung, Museum Aceh, dan Kebun Edukasi.
                    </CardContent>
                  </Card>
                </div>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger className="rounded-xl bg-white/80 backdrop-blur px-4 shadow font-semibold shadow-black text-left text-lg sm:text-2xl mt-3"><span className="flex gap-3 items-center"><Image className="grow" src={getAfiliasi[5].logo} alt="" width={36} height={36} /> {getAfiliasi[5].nama + " ( " + getAfiliasi[5].singkatan + " )"}</span></AccordionTrigger>
              <AccordionContent className="mt-5">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
                  <Card className="min-w-full bg-white/80 backdrop-blur border border-amber-500  ">
                    <CardHeader>
                      <CardTitle>Paket Edukasi  Bencana yang Islami (PECI)</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <b>PECI</b> adalah konsep pendidikan kesiapsiagaan bencana gempa bumi dan tsunami dengan memadukan nilai-nilai agama islam.
                    </CardContent>
                  </Card>
                  <Card className="min-w-full bg-white/80 backdrop-blur border border-amber-500  ">
                    <CardHeader>
                      <CardTitle>Paket Kesenian Mitigasi Bencana (PASMINA)</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <b>PASMINA</b> adalah konsep pendidikan kesiapsiagaan bencana gempa bumi dan tsunami dengan nilai kesenian adaptasi Nandong Smong
                    </CardContent>
                  </Card>
                  <Card className="min-w-full bg-white/80 backdrop-blur border border-amber-500  ">
                    <CardHeader>
                      <CardTitle>Dayah Siaga Bencana (DAGANA)</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <b>DAGANA</b> adalah gelar yang diberikan kepada dayah yang menerapkan pendidikan kesiapsiagaan bencana secara mandiri dan berkelanjutan
                    </CardContent>
                  </Card>
                  <Card className="min-w-full bg-white/80 backdrop-blur border border-amber-500  ">
                    <CardHeader>
                      <CardTitle>Tim Kesenian Adaptasi Nandong Smong</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <b>Tim Kesenian Adaptasi Nandong Smong</b> adalah gelar yang diberikan kepada kelompok santri yang telah dilatih kesenian adaptasi nandong smong
                    </CardContent>
                  </Card>
                </div>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger className="rounded-xl bg-white/80 backdrop-blur px-4 shadow font-semibold shadow-black text-left text-lg sm:text-2xl mt-3"><span className="flex gap-3 items-center"><Image className="grow" src={getAfiliasi[4].logo} alt="" width={36} height={36} /> {getAfiliasi[4].nama + " ( " + getAfiliasi[4].singkatan + " )"}</span></AccordionTrigger>
              <AccordionContent className="mt-5">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
                  <Card className="min-w-full bg-white/80 backdrop-blur border border-red-700">
                    <CardHeader>
                      <CardTitle>Training New Trainer</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <b>Training New Trainer</b> adalah program pelatihan calon trainer baru dengan kurikulum yang diadaptasi dari kurikulum training new trainer berstandar internasional.
                    </CardContent>
                  </Card>
                  <Card className="min-w-full bg-white/80 backdrop-blur border border-red-700">
                    <CardHeader>
                      <CardTitle>Academy Training Gen-A</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <b>Academy Training Gen-A</b> adalah program pelatihan <i>softskill</i> oleh Trainer G-FORCE seperti public speaking, communication skills, critical thinking, .
                    </CardContent>
                  </Card>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
        {/* </div> */}
      </section>
    </>
  );
};

export default Page;
