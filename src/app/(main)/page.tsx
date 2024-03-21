import { Button } from "@/components/ui/button"
import { GiSupersonicArrow } from "react-icons/gi"
import Image from "next/image"
import Link from "next/link"
import VideoPlayer from "@/components/MainComponent/Videos/Video"
import { Suspense } from "react"
import SuhuMain from "@/components/MainComponent/Slider/SuhuMain"
import BeritaThumbSlider from "@/components/MainComponent/Slider/BeritaThumbSlider/BeritaThumbSlider"
import KegiatanSection from "@/components/MainComponent/kegiatan/KegiatanSection"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import Logos from "@/components/MainComponent/Logos"
import MitraSlider from "@/components/MainComponent/Slider/MitraSlider"
import BeritaSection from "@/components/MainComponent/Berita/BeritaSection"
import { Separator } from "@/components/ui/separator"

const Page = () => {
  const videoSources = [
    { src: "/Gen_ Intro.webm", type: "video/webm" },
    { src: "/Gen_ Intro.mp4", type: "video/mp4" },
  ];

  return (
    <>
      <section className="h-[90vh] relative flex flex-col gap-5 justify-center items-center bg-gradient-to-t from-black/90 via-black/80 text-white p-10 xl:px-96 text-center">
        {/* <HeroSlider /> */}
        <span className="font-semibold tracking-widest text-sm">Nanggroe Aceh Darussalam</span>
        <h1 className="font-bold text-6xl sm:text-7xl">Generasi Edukasi Nanggroe Aceh</h1>
        <p>Lembaga Swadaya Masyarakat yang digagas sebagai bentuk kepedulian dan keinginan kuat untuk menjadi Katalisator bagi pembangunan karakter Generasi Unggul Aceh</p>
        <div className="flex gap-5">
          <Button asChild size="lg" variant="outline"><Link href="#tentang">Tentang Kami</Link></Button>
          <Button asChild size="lg" variant="default"><Link href="#kegiatan">Kegiatan Kami</Link></Button>
        </div>
        <video className="absolute w-full h-full object-cover -z-10" src="/bg-video.webm" autoPlay muted loop />
      </section>

      {/* ------------------------------------------ logo section ------------------------------------------------------- */}
      <Logos />

      {/* --------------------------------------------- Tentang Section ---------------------------------------------------- */}
      <section id="tentang" className="relative bg-[url(/wavy/haikei/wave-haikei-orange.svg)] bg-opacity-5 bg-cover bg-bottom">
        <div className="flex flex-wrap items-center px-10 sm:px-32 pt-32 pb-64 gap-10">
          <div className="space-y-5 xl:w-1/2 w-full">
            <h3 className="text-4xl">Siapa Kami?</h3>
            <hr className="border border-third w-2/6" />
            <p><span className="font-semibold">Generasi Edukasi Nanggroe Aceh (GEN-A)</span> adalah Lembaga Swadaya Masyarakat yang digagas sebagai bentuk kepedulian dan keinginan kuat untuk menjadi <span className="font-semibold">Katalisator</span> bagi pembangunan karakter <span className="font-semibold">Generasi Unggul Aceh</span> melalui <span className="font-semibold">Pengabdian Masyarakat, Pelatihan dan Penelitian</span></p>
            <Button asChild><Link href="/about_us">Tentang kami <GiSupersonicArrow className="ml-3" /></Link></Button>
          </div>
          <div className="relative xl:w-1/3 w-full h-full flex justify-center flex-grow">
            <Suspense fallback={<div>Loading...</div>}>
              <VideoPlayer sources={videoSources} />
            </Suspense>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------- Suhu Section ------------------------------------------------------ */}
      <section className="relative bg-orange-500">
        <div className="flex flex-wrap items-center px-10 sm:px-10 gap-10">
          <div className="xl:w-[20%] flex justify-center flex-grow z-[2]">
            <Image src='/suhu-part.png' alt="suhu" width={600} height={600} />
          </div>
          <div className="space-y-5 xl:w-[60%] w-full">
            <div className="pt-7 pb-10 px-5 lg:px-16 rounded-xl xl:-ml-20 text-white">
              <h3 className="text-4xl mb-5">BPH</h3>
              <p>Roda penggerak yang menggerakkan mesin keberhasilan organisasi. Pengambil keputusan dan juga pemimpin yang mampu merangkul visi bersama, membangun kolaborasi, dan mendorong tim untuk mencapai kesuksesan bersama.</p>
              <div className="mt-5 mb-10">
                <SuhuMain />
              </div>
              <Button size="lg" asChild><Link href="/anggota">Anggota <GiSupersonicArrow className="ml-3" /></Link></Button>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------- kegiatan Section  ------------------------------------------------------- */}
      <KegiatanSection />

      <Separator />
      {/* -------------------------------------------- Berita Section ----------------------------------------------------------- */}
      {/* <section className="relative h-full">
        <div className="absolute bg-secondary-gradient w-[400px] h-[400px] -top-32 -left-28 rounded-full opacity-80 -z-10"></div>
        <div className="absolute bg-secondary-gradient w-[400px] h-[400px] -bottom-32 -right-28 rounded-full opacity-80 -z-10"></div>
        <article className="px-10 sm:px-32 pt-24">
          <h3 className="text-4xl">Berita</h3>
          <hr className="border border-third w-2/6" />
        </article>
        <div className="flex flex-wrap items-center justify-between px-10 sm:px-32 gap-10">
          <div className="space-y-5 xl:w-[50%]">
            <p className="text-2xl tracking-wide font-semibold">Berikut Berita Seputar Gen-A</p>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur, temporibus corrupti? Deleniti harum ducimus aliquid. Quas, aperiam, eveniet deserunt provident eaque neque est at dolore vero accusantium voluptatum cumque soluta molestias optio tenetur itaque voluptas doloremque voluptatibus modi cum ut.</p>
            <div>
              <BeritaThumbSlider />
            </div>
          </div>
          <div className="lg:w-[44%]">
            <Carousel orientation="vertical" className="hidden xl:block px-4">
              <CarouselContent className="-mt-6 h-full">
                {Array.from({ length: 10 }).map((_, index) => (
                  <CarouselItem className="pt-6 basis-1/4" key={index}>
                    <div className="p-1">
                      <Card className="h-40 border-l-4 border-l-secondary flex w-full">
                        <CardContent className="relative w-[200px]">
                          <Image className="object-cover" src="https://picsum.photos/200/300?grayscale" alt="gambar" fill />
                        </CardContent>
                        <CardHeader className="space-y-2">
                          <CardTitle>Tes</CardTitle>
                          <CardDescription>
                            Lorem ipsum dolor sit amet, consectetur adipis
                          </CardDescription>
                          <Button className="max-w-[70px] font-semibold">Lihat</Button>
                        </CardHeader>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>
        </div>
      </section> */}
      <section className="py-32 px-10 md:px-32 text-center bg-[url(/wavy/haikei/blob-scene-haikei_5.svg)] bg-cover">
        <h2 className="mb-6 pb-4 text-center text-3xl font-bold">
          Berita Terbaru
        </h2>
        <hr className="border border-third w-1/6 mb-12 mx-auto" />
        <div className="grid gap-6 lg:grid-cols-3 xl:gap-x-12">
          <BeritaSection />
        </div>
      </section>

      {/* ------------------------------------------- testimonial section --------------------------------------------------- */}
      <Separator />
      <section className="py-20">
        <article className="text-center space-y-5">
          <h3 className="text-4xl">Program Unggulan</h3>
          <hr className="border border-third w-2/6 mx-auto" />
          <div className="px-10 sm:px-32">
            <div className="flex flex-wrap justify-center items-center gap-5 mt-10">
              <Card className="max-w-[400px] min-h-[400px] p-6 border-x-4 border-x-primary">
                <CardHeader className="font-bold">
                  RAIDER (Remaja First Aider)
                </CardHeader>
                <CardContent className="p-0">
                  <Image src={'/raider.jpg'} alt="" width={1920} height={1080} />
                </CardContent>
              </Card>
              <Card className="max-w-[400px] min-h-[400px] p-6 border-x-4 border-x-primary">
                <CardHeader className="font-bold">
                  SADAR (Santri Dayah First Aider)
                </CardHeader>
                <CardContent className="p-0">
                  <Image src={'/background/bg-about-4.jpg'} alt="" width={1920} height={1080} />
                </CardContent>
              </Card>
              <Card className="max-w-[400px] min-h-[400px] p-6 border-x-4 border-x-primary">
                <CardHeader className="font-bold">
                  Edukasi Kebencanaan Berbasis Islami
                </CardHeader>
                <CardContent className="p-0">
                  <Image src={'/bencana.jpg'} alt="" width={1920} height={1080} />
                </CardContent>
              </Card>
              <Card className="max-w-[400px] min-h-[400px] p-6 border-x-4 border-x-primary">
                <CardHeader className="font-bold">
                  Training Anggota Muda Gen-A
                </CardHeader>
                <CardContent className="p-0">
                  <Image src={'/training.jpg'} alt="" width={1920} height={1080} />
                </CardContent>
              </Card>
            </div>
          </div>
          <Button size="lg" asChild><Link href="/unggulan">Unggulan <GiSupersonicArrow className="ml-3" /></Link></Button>
        </article>
      </section>

      {/* ------------------------------------------ Mitra section --------------------------------------------------------- */}

      <section className="pt-20 pb-72 bg-[url(/wavy/haikei/bottom-bg-yellow.svg)] bg-cover bg-bottom">
        <article className="text-center space-y-5">
          <h3 className="text-4xl">Mitra Kami</h3>
          <hr className="border border-third w-2/6 mx-auto" />
          <div className="px-16 sm:px-32">
            <MitraSlider />
          </div>
          <Button size="lg" asChild><Link href="/about_us#mitra">Mitra <GiSupersonicArrow className="ml-3" /></Link></Button>
        </article>
      </section>
    </>
  )
}

export default Page