"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"
import Image from "next/image"
import { useRef } from "react"

const MitraSlider = () => {
    const plugin = useRef(
        Autoplay({ delay: 2000 })
    )

    return (
        <>
            <Carousel
                plugins={[
                    plugin.current
                ]}
                opts={{
                    align: "start",
                    loop: true
                }}
                className="w-full"
            >
                <CarouselContent>
                    {Array.from({ length: 12 }).map((_, index) => (
                        <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 xl:basis-1/4">
                            <div className="p-1">
                                <Card className="bg-white/40 flex justify-center items-center h-[200px] border-2 border-primary">
                                    <CardContent className="text-center p-0">
                                        <Image src={`/logo/mitra_${index + 1}.png`} alt="mitra logo" width={120} height={120} />
                                    </CardContent>
                                </Card>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </>
    )
}

export default MitraSlider