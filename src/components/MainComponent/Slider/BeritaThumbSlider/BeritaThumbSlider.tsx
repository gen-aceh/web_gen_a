import { EmblaOptionsType } from 'embla-carousel'
import EmblaThumbSlider from './EmblaThumbSlider'

const OPTIONS: EmblaOptionsType = {}
const SLIDE_COUNT = 8
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

const BeritaThumbSlider = () => {
  return (
    <EmblaThumbSlider slides={SLIDES} options={OPTIONS} />
  )
}

export default BeritaThumbSlider