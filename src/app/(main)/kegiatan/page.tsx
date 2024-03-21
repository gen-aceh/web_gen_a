import { Button } from "@/components/ui/button"
import { Landmark } from "lucide-react"
import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Kegiatan"
}

const page = () => {
  return (
    <>
      <h3>List Kegiatan GEN-A</h3>
      <hr />
      <div className={`max-h-fit rounded-lg border border-secondary shadow-md flex flex-col items-center text-center md:text-left md:flex-row`}>
        <Image className="p-8" src="" alt="logo" width={200} height={40} />
        <div className="py-5 mx-5 space-y-4">
          <h4 className="text-md text-cy font-semibold">contoh</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae omnis perferendis ducimus soluta sint vel impedit adipisci commodi dolore aliquid, aut, necessitatibus autem vitae maxime, sapiente voluptas ab animi ipsa! Consectetur consequatur adipisci numquam.</p>
          <Button asChild variant="default">
            <Link href="#">Lihat Selengkapnya <Landmark className="w-5 h-5 ml-2" /></Link>
          </Button>
        </div>
      </div>
    </>
  )
}

export default page