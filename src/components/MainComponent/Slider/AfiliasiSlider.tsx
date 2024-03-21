'use client'

import Image from "next/image";
import Carousel from "nuka-carousel"
import { useState } from "react";

// interface afiliasiHeight {
//     height : string
// }

const AfiliasiSlider = () => {
    const [slideIndex, setSlideIndex] = useState<number>(0);

    const settingCarousel = {
        wrapAround: true,
        autoplay: true,
        autoplayInterval: 3000,
        // @ts-ignore
        renderCenterLeftControls: null,
        // @ts-ignore
        renderCenterRightControls: null
    }

    return (
        <Carousel className="-z-10" renderBottomCenterControls={({ currentSlide, slideCount }) => (
            <div className="flex items-center justify-center space-x-2">
                {Array.from({ length: slideCount }).map((_, index) => (
                    <button
                        key={index}
                        className={`w-5 md:w-7 h-[2px] xl:w-10 lg:h-1 mb-5 rounded-full ${currentSlide === index ? 'bg-black' : 'bg-white'
                            }`}
                        onClick={() => setSlideIndex(index)}
                    />
                ))}
            </div>
        )} {...settingCarousel}>
            <div className="relative overflow-hidden w-full h-[70vh]">
                <Image src={'/background/bg-slide-1.jpg'} className="object-cover" alt="bg" fill priority sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"/>
            </div>
            <div className="relative overflow-hidden w-full h-[70vh]">
                <Image src={'/background/bg-slide-2.jpg'} className="object-cover" alt="bg" fill priority sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"/>
            </div>
            <div className="relative overflow-hidden w-full h-[70vh]">
                <Image src={'/background/bg-slide-3.png'} className="object-cover" alt="bg" fill priority sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"/>
            </div>
            <div className="relative overflow-hidden w-full h-[70vh]">
                <Image src={'/background/bg-slide-4.jpg'} className="object-cover" alt="bg" fill priority sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"/>
            </div>
        </Carousel>
    )
}

export default AfiliasiSlider