import { Button } from "@/components/ui/button"
import { BookMarkedIcon, TimerIcon } from "lucide-react"
import Image from "next/image"

const CardBerita = () => {
    return (
        <div className="bg-white overflow-hidden border-b-4 border-primary max-w-[30%] rounded-lg shadow-md">
            <Image src="https://picsum.photos/200/300?grayscale" width={720} height={256} alt="People" className="w-full object-cover h-32 sm:h-48 md:h-64" />
            <div className="p-4 md:p-6 space-y-5">
                <p className="text-secondary font-semibold text-sm mb-1 leading-none">News</p>
                <h4 className="font-semibold mb-2 text-xl leading-tight sm:leading-normal">The Coldest Sunset</h4>
                <div className="text-sm flex items-center opacity-60">
                    <TimerIcon className="w-5 h-5 mr-2 text-secondary" />
                    <p className="leading-none">21 Oct 2019</p>
                </div>
                <article>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, totam....
                </article>
                <Button variant="third">More <BookMarkedIcon className="w-5 h-5 ml-2" /></Button>
            </div>
        </div>
    )
}

export default CardBerita