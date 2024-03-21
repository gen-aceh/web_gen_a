import image1 from '../../../../../public/placeholder/G-FORCE.png'
import image2 from '../../../../../public/placeholder/PHI.png'
import image3 from '../../../../../public/placeholder/RESPACE.png'
import image4 from '../../../../../public/placeholder/SAFE.png'


export const images: string[] = [image1.src, image2.src, image3.src, image4.src]

const imageByIndex = (index: number): string => images[index % images.length]

export default imageByIndex