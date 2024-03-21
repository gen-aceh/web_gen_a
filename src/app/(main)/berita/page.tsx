import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { ExternalLinkIcon } from "lucide-react"
import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Berita"
}

const page = () => {
  return (
    <>
      <h2 className="text-3xl font-bold">Berita GEN-A</h2>
      <hr />
      <div className={cn("max-h-fit rounded-lg border-2 border-secondary shadow-md flex flex-col items-center text-center lg:text-left lg:flex-row")}>
        <Image className="rounded-l-lg" src="https://picsum.photos/200/300?grayscale" alt="logo" width={400} height={40} />
        <div className="py-5 px-10 space-y-7 md:space-y-4">
          <h3 className="text-md font-semibold">contoh</h3>
          <div className="flex w-full justify-center lg:justify-start gap-4">
            <Badge>Sosialisasi</Badge>
            <Badge>Edukasi</Badge>
            <Badge>Gotong Royong</Badge>
            <Badge>Love</Badge>
          </div>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae omnis perferendis ducimus soluta sint vel impedit adipisci commodi dolore aliquid, aut, necessitatibus autem vitae maxime, sapiente voluptas ab animi ipsa! Consectetur consequatur adipisci numquam.</p>
          <p className="text-xs text-neutral-500">19/11/2012</p>
          <Button asChild variant="default">
            <Link href="#">Lihat Selengkapnya <ExternalLinkIcon className="w-4 h-4 ml-2" /></Link>
          </Button>
        </div>
      </div>
    </>
  )
}

export default page