import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { prisma } from "@/lib/Prisma"

const SuhuMain = async () => {
  const dataDph = await prisma.anggota.findMany({
    select: {
      jabatan: true,
      nama: true,
      profile: true,
      about: true
    },
    where: {
      afiliasiId: 'clpau070b0000btf9hyhz5vme'
    }
  })

  return (
    <>
      <Carousel
        opts={{
          align: "start",
        }}
        className="w-full"
      >
        <CarouselContent>
          <CarouselItem className="md:basis-1/2 lg:basis-1/3">
            <div className="p-1">
              <Card className="bg-white/40 flex flex-col items-center gap-5">
                <CardHeader className="pb-0 text-center items-center">
                  <CardTitle className="mb-5">Direktur Eksekutif</CardTitle>
                  <Avatar className="h-32 w-32 shadow-md shadow-white">
                    <AvatarImage src={'/imam.png'} />
                    <AvatarFallback className="bg-white/80 text-black shadow-md">No Img</AvatarFallback>
                  </Avatar>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="font-bold text-lg">dr. Imam Maulana</p>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
          <CarouselItem className="md:basis-1/2 lg:basis-1/3">
            <div className="p-1">
              <Card className="bg-white/40 flex flex-col items-center gap-5">
                <CardHeader className="pb-0 text-center items-center">
                  <CardTitle className="mb-5">Wakil Direktur Eksternal</CardTitle>
                  <Avatar className="h-32 w-32 shadow-md shadow-white">
                    <AvatarImage src={'/farhan.jpg'} />
                    <AvatarFallback className="bg-white/80 text-black shadow-md">No Img</AvatarFallback>
                  </Avatar>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="font-bold text-lg">Ns. Farhan Saputra, S.Kep</p>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
          <CarouselItem className="md:basis-1/2 lg:basis-1/3">
            <div className="p-1">
              <Card className="bg-white/40 flex flex-col items-center gap-5">
                <CardHeader className="pb-0 text-center items-center">
                  <CardTitle className="mb-5">Wakil Direktur Internal</CardTitle>
                  <Avatar className="h-32 w-32 shadow-md shadow-white">
                    <AvatarImage src={'/alfi.jpg'} />
                    <AvatarFallback className="bg-white/80 text-black shadow-md">No Img</AvatarFallback>
                  </Avatar>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="font-bold text-lg">Ns. Alfiatur Rahmi, S.Kep</p>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
          <CarouselItem className="md:basis-1/2 lg:basis-1/3">
            <div className="p-1">
              <Card className="bg-white/40 flex flex-col items-center gap-5">
                <CardHeader className="pb-0 text-center items-center">
                  <CardTitle className="mb-5">Sekretaris Umum</CardTitle>
                  <Avatar className="h-32 w-32 shadow-md shadow-white">
                    <AvatarImage src={'/rahmah.jpg'} />
                    <AvatarFallback className="bg-white/80 text-black shadow-md">No Img</AvatarFallback>
                  </Avatar>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="font-bold text-lg">Ns. Rahma Hidayati, S.Kep</p>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
          <CarouselItem className="md:basis-1/2 lg:basis-1/3">
            <div className="p-1">
              <Card className="bg-white/40 flex flex-col items-center gap-5">
                <CardHeader className="pb-0 text-center items-center">
                  <CardTitle className="mb-5">Bendahara Umum</CardTitle>
                  <Avatar className="h-32 w-32 shadow-md shadow-white">
                    <AvatarImage src={'/rona.jpg'} />
                    <AvatarFallback className="bg-white/80 text-black shadow-md">No Img</AvatarFallback>
                  </Avatar>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="font-bold text-lg">Ns. Rona Firyal Ilyas, S.Kep</p>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </>
  )
}

export default SuhuMain