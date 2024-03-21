import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ArrowBigRightDash, MessagesSquareIcon } from "lucide-react";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { getConfig } from "@/lib/Config";
import React from 'react';
import { prisma } from "@/lib/Prisma";

export const metadata: Metadata = {
  title: "Tentang Kami"
}

const Page = async () => {
  const config = await getConfig()

  const getAfiliasi = await prisma.afiliasi.findMany({
    select: {
      id: true,
      logo: true,
      nama: true,
      singkatan: true,
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
      {/* ------------------------------------------  About Us Description --------------------------------------------------- */}
      <section>
        <div className="bg-primary-gradient text-primary-foreground">
          <div className="flex justify-between flex-wrap">
            <div className="space-y-5 px-10 py-20 lg:py-0 flex flex-col justify-center lg:w-[45%]">
              <h3 className="text-3xl font-bold">Siapa kami ?</h3>
              <hr className="w-3/6 border border-black" />
              <div dangerouslySetInnerHTML={{ __html: config.deskripsiOrganisasi ? config.deskripsiOrganisasi : "" }}></div>
              <Button className="hover:bg-gray-900/80 w-fit" asChild variant="third"><Link href="/contact_us">
                <MessagesSquareIcon className="w-5 h-5 mr-3 text-white" />Hubungi Kami</Link>
              </Button>
            </div>
            <div className="relative w-full overflow-hidden h-[50vh] lg:w-[50%]">
              <Image className="object-cover" src="/gallery/gallery15.png" alt="picture" fill priority/>
            </div>
          </div>
        </div>
        <div className="bg-third-gradient text-third-foreground">
          <div className="flex justify-between flex-wrap flex-col-reverse lg:flex-row">
            <div className="relative w-full overflow-hidden h-[50vh] lg:w-[50%]">
              <Image className="object-cover" src="/gallery/gallery17.png" alt="picture" fill priority/>
            </div>
            <div className="space-y-5 px-10 py-20 lg:py-0 flex flex-col justify-center lg:w-[45%]">
              <h3 className="text-3xl font-bold">Legalitas Lembaga</h3>
              <hr className="w-3/6 border border-third-foreground" />
              <p className="indent-6 text-justify">
                <b>Generasi Edukasi Nanggroe Aceh (GEN-A)</b> digagas sebagai bentuk kepedulian dan keinginan kuat untuk menjadi <b>katalisator</b> bagi <b>pembangunan karakter generasi unggul Aceh</b>. Kelompok <b>usia produktif</b> telah mencapai angka <b>67%</b> dari total penduduk Indonesia saat ini tetapi kualitas <b><i>hardskills</i></b> dan <b><i>softskills</i></b> serta <b>daya saing</b> sumber daya manusia muda Indonesia khususnya Aceh ditingkat regional, nasional, dan internasional <b>masih rendah</b>.</p>
              <p className="indent-6 text-justify hidden xl:block">
                <b>Kami meyakini untuk memperbaiki dan mewujudkan generasi unggul</b> diperlukan <b>usaha</b> dan <b>komitmen</b> bersama dari <b>lintas usia, lintas disiplin ilmu, lintas sektoral</b> untuk <b>bersinergi</b> mewujudkan generasi yang siap <b>memimpin</b> dan <b>berkarya</b> untuk Aceh melalui <b>edukasi, training, kajian & riset</b>, serta berbagai program <b><i>capacity building</i></b> dan <b>pengabdian masyarakat</b>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------------------------------- Sejarah section --------------------------------------------------------*/}
      <section className="bg-[url(/wavy/haikei/circle-scatter-haikei.svg)] bg-cover">
        {/* <!-- component --> */}
        <div className="mx-auto w-full h-full backdrop-blur-md">
          <div className="text-center py-6">
            <h3>Sejarah</h3>
            <hr className="border border-black w-1/4 mx-auto mt-5" />
          </div>
          <div className="relative wrap overflow-hidden p-10 h-full">
            <div className="border-2-2 absolute border-opacity-20 border-gray-700 h-full border" style={{ left: "50%" }}></div>
            {/* <!-- right timeline --> */}
            <div className="mb-8 flex justify-between items-center w-full right-timeline">
              <div className="order-1 w-5/12"></div>
              <div className="z-20 flex items-center order-1 bg-gray-600 shadow-xl w-16 h-8 rounded-full">
                <h1 className="mx-auto font-semibold text-lg text-white">2017</h1>
              </div>
              <div className="order-1 bg-third rounded-lg shadow-xl w-5/12 px-6 py-4">
                <ul className="list-disc text-third-foreground space-y-5">
                  <li>
                    <p className="font-bold text-xs sm:text-base lg:text-lg">NATIONAL SCHOOL TRAINING 2017“FIGHT THE NEW DRUGS” oleh Sahabat Generasi 25 Maret 2017</p>
                  </li>
                  <li>
                    <p className="font-bold text-xs sm:text-base lg:text-lg">PENYULUHAN INTERNET SEHAT KEPADA SISWA/I SMA LABSCHOOL BANDA ACEH</p>
                  </li>
                </ul>
              </div>
            </div>

            {/* <!-- left timeline --> */}
            <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
              <div className="order-1 w-5/12"></div>
              <div className="z-20 flex items-center order-1 bg-gray-600 shadow-xl w-16 h-8 rounded-full">
                <h1 className="mx-auto text-white font-semibold text-lg">2019</h1>
              </div>
              <div className="order-1 bg-primary rounded-lg shadow-xl w-5/12 px-6 py-4">
                <p className="font-bold text-primary-foreground text-xs sm:text-base lg:text-lg">Kolaborasi SADAR X Dinas Pendidikan Dayah Aceh</p>
              </div>
            </div>

            {/* <!-- right timeline --> */}
            <div className="mb-8 flex justify-between items-center w-full right-timeline">
              <div className="order-1 w-5/12"></div>
              <div className="z-20 flex items-center order-1 bg-gray-600 shadow-xl w-16 h-8 rounded-full">
                <h1 className="mx-auto font-semibold text-lg text-white">2020</h1>
              </div>
              <div className="order-1 bg-third rounded-lg shadow-xl w-5/12 px-6 py-4">
                <p className="font-bold text-third-foreground text-xs sm:text-base lg:text-lg">Gen-a Secara Resmi Terdaftar di Kementerian Dalam Negeri sebagai ORMAS yang Bergerak dibidang Edukasi/Training/Kajian dan Riset dengan Nomor Surat Keterangan Terdaftar : 0113-00-00/004/I/2020</p>
              </div>
            </div>

            {/* <!-- left timeline --> */}
            <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
              <div className="order-1 w-5/12"></div>
              <div className="z-20 flex items-center order-1 bg-gray-600 shadow-xl w-32 h-8 rounded-full">
                <h1 className="mx-auto text-white font-semibold text-lg">2021 - 2023</h1>
              </div>
              <div className="order-1 bg-primary rounded-lg shadow-xl w-5/12 px-6 py-4">
                <p className="mb-3 font-bold text-primary-foreground text-xs sm:text-base lg:text-lg">Pembentukan Lembaga Subunit dalam Rangka Memperluas Jangkauan Gen-a dalam menggapai masyarakat dan Lembaga-Lembaga</p>
                <div className="hidden sm:flex flex-wrap gap-1 md:gap-3">
                  {getAfiliasi.map(item => (
                    <div key={item.id} className="w-10 sm:w-16 h-10 sm:h-16 relative overflow-hidden bg-white border border-third shadow-md mb-5 mx-auto rounded-full">
                      <Image src={item.logo} alt="" className="object-cover" fill />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Separator className="mr-auto bg-third w-full" />

      {/* ---------------------------------------  Visi, Misi Section ---------------------------------------------------- */}
      <section>
        <div className="flex items-center gap-10 w-full h-full">
          <div className="hidden lg:block lg:w-1/3 h-full">
            <div className="relative px-14 py-96 bg-third-gradient w-1/2 h-full">
              <div className="h-[80%] w-80 rounded-tr-[80px] rounded-bl-[80px] hidden xl:block absolute top-10 border-4 border-primary">
                <Image src={'/background/bg-about-1.jpg'} alt="" fill className="object-cover brightness-90 rounded-bl-[73px] rounded-tr-[73px]" />
              </div>
              <div className="h-[80%] w-80 rounded-tr-[80px] rounded-bl-[80px] hidden 2xl:block absolute top-32 left-60 border-4 border-primary">
                <Image src={'/background/bg-about-2.jpg'} alt="" fill className="object-cover brightness-90 rounded-bl-[73px] rounded-tr-[73px]" />
              </div>
            </div>
          </div>
          <div className="space-y-7 p-10">
            <div className="space-y-3">
              <h3>Visi & Misi</h3>
              <hr className="w-8 border border-black" />
              <ol className="list-decimal list-outside ml-3 space-y-3 lg:pl-1">
                <li>
                  Meningkatkan kepedulian generasi lintas usia dan multidisiplin dalam bersinergi mengoptimalkan kualitas hidup <br />
                </li>
                <li>
                  Menemukan evidance-based solution yang memberikan hasil yang berkelanjutan (sustainable outcome) bagi masalah generasi muda <br />
                </li>
                <li>
                  Menjamin masa tumbuh kembang generasi muda yang bebas dari dampak negatif melalui law enforcement dan kemitraan lintas sektoral<br />
                </li>
                <li>
                  Melakukan pendekatan pemberdayaan masyarakat untuk mengatasi masalah generasi muda <br />
                </li>
                <li>
                  Menjalankan program capacity building untuk mewujudkan generasi unggul<br />
                </li>
                <li>
                  Menjadi role model untuk program pemberdayaan generasi muda (youth empowerment) seluruh Indonesia<br />
                </li>
              </ol>
            </div>
          </div>
        </div>
      </section>

      <Separator className="mr-auto" />

      {/* ------------------------------------------------------- Visi tahun ini ------------------------------------------------------------------------------- */}

      <section className="flex gap-10 py-20 lg:py-0 items-center w-full h-full">
        <div className="space-y-3 lg:mx-24 mx-10">
          <h3>Visi 2023/2024</h3>
          <hr className="w-20 border border-black" />
          <div>
            <p>GEN-A menjadi katalisator generasi unggul yang <span className="font-semibold">terkemuka, mandiri, berwawasan global, inovatif,</span> dan <span className="font-semibold">aktif</span> dalam mengembangkan <span><em>evidence-based solution</em></span> atas permasalahan di masyarakat</p>
          </div>
        </div>
        <div className="hidden lg:block lg:w-1/3 h-full">
          <div className="relative px-14 py-80 ml-auto bg-secondary-gradient w-1/2">
            <div className="h-[80%] w-80 rounded-tl-[80px] rounded-br-[80px] overflow-hidden hidden xl:block absolute top-10 right-20 border-4 border-primary">
              <Image src={'/background/bg-about-3.jpg'} alt="" fill className="object-cover brightness-90 rounded-br-[73px] rounded-tl-[73px]" />
            </div>
            <div className="h-[80%] w-80 rounded-tl-[80px] rounded-br-[80px] overflow-hidden hidden 2xl:block absolute top-28 right-64 border-4 border-primary">
              <Image src={'/background/bg-about-4.jpg'} alt="" fill className="object-cover brightness-90 rounded-br-[73px] rounded-tl-[73px]" />
            </div>
          </div>
        </div>
      </section>

      <Separator className="bg-secondary-gradient w-full" />


      {/* ------------------------------------------------- Mitra ----------------------------------------------------------- */}

      <section id="mitra" className="py-36 px-10 bg-[url(/wavy/haikei/circle-scatter-haikei.svg)] bg-cover">
        <div className="mt-20 w-full">
          <h3 className="text-center">Mitra Kami</h3>
          <hr className="mx-auto w-3/6 my-10 border-black" />
          <Card className="border-y-4 border-y-primary w-full text-center transition-all duration-300">
            <CardHeader className="flex-row justify-evenly flex-wrap">
              {Array.from({ length: 12 }).map((_, index) => (
                <div key={index} className="relative w-36 h-36 hover:drop-shadow-lg hover:drop-shadow-third duration-200 rounded-full p-4 self-center">
                  <Image className="object-contain" src={`/logo/mitra_${index+1}.png`} alt="logo-mitra" fill sizes="80px" />
                </div>
              ))}
            </CardHeader>
          </Card>
        </div>
      </section>

      <Separator className="bg-secondary-gradient w-full" />
      {/* ---------------------------------------- afiliasi singkat ----------------------------------------------------------------- */}

      <section className="py-36 px-10 bg-[url(/wavy/haikei/circle-scatter-haikei_left.svg)] bg-cover">
        <div className="mt-20 w-full">
          <h3 className="text-center">Subunit Kami</h3>
          <hr className="mx-auto w-3/6 my-10 border-black" />
          <div className="my-5 px-5 flex flex-wrap justify-center gap-10">
            {getAfiliasi.map(afiliasi => (
              <Card className="border-y-4 border-y-primary w-[15rem] text-center hover:-translate-y-5 transition-all duration-300" key={afiliasi.id}>
                <CardHeader>
                  <div className="relative w-20 h-20 hover:drop-shadow-lg hover:drop-shadow-third duration-200 rounded-full p-4 self-center">
                    <Image className="object-contain" src={afiliasi.logo} alt="logo-afiliasi" fill sizes="80px" />
                  </div>
                </CardHeader>
                <CardContent>
                  <span className="text-base font-semibold">{afiliasi.nama} ( {afiliasi.singkatan} )</span>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="w-full">
            <Button asChild className="mt-14 mx-auto block max-w-[160px]">
              <Link className="flex" href="/afiliasi">
                Lebih Lanjut <ArrowBigRightDash className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Page;
