'use client'

import { useState, useEffect, useCallback } from 'react'
import { EmblaOptionsType } from 'embla-carousel'
import useEmblaCarousel from 'embla-carousel-react'
import Thumb from './Thumb'
import imageByIndex from './imageByIndex'
import Image from 'next/image'

type PropType = {
  slides: number[]
  options?: EmblaOptionsType
}

const EmblaThumbSlider: React.FC<PropType> = (props) => {
  const { slides, options } = props
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [emblaMainRef, emblaMainApi] = useEmblaCarousel(options)
  const [emblaThumbsRef, emblaThumbsApi] = useEmblaCarousel({
    containScroll: 'keepSnaps',
    dragFree: true,
    
  })

  const onThumbClick = useCallback(
    (index: number) => {
      if (!emblaMainApi || !emblaThumbsApi) return
      emblaMainApi.scrollTo(index)
    },
    [emblaMainApi, emblaThumbsApi]
  )

  const onSelect = useCallback(() => {
    if (!emblaMainApi || !emblaThumbsApi) return
    setSelectedIndex(emblaMainApi.selectedScrollSnap())
    emblaThumbsApi.scrollTo(emblaMainApi.selectedScrollSnap())
  }, [emblaMainApi, emblaThumbsApi, setSelectedIndex])

  useEffect(() => {
    if (!emblaMainApi) return
    onSelect()
    emblaMainApi.on('select', onSelect)
    emblaMainApi.on('reInit', onSelect)
  }, [emblaMainApi, onSelect])

  return (
    <div className="py-6">
      <div className="overflow-hidden" ref={emblaMainRef}>
        <div className="backface-hidden flex touch-pan-y" style={{ marginLeft: "calc(1rem * -1)" }}>
          {slides.map((index) => (
            <div className="flex-shrink-0 min-w-0 pl-4" style={{ flex: "0 0 100%" }} key={index}>
              <Image
                className="block h-full bg-secondary-gradient w-full object-cover rounded-xl"
                src={imageByIndex(index)}
                alt="Your alt text"
                width={1280}
                height={720}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="mt-4">
        <div className="overflow-hidden" ref={emblaThumbsRef}>
          <div className="flex flex-row gap-2">
            {slides.map((index) => (
              <Thumb
                onClick={() => onThumbClick(index)}
                selected={index === selectedIndex}
                index={index}
                imgSrc={imageByIndex(index)}
                key={index}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default EmblaThumbSlider
