import { prisma } from "@/lib/Prisma"
import Image from "next/image"

const Logos = async() => {
    const getAfiliasi = await prisma.afiliasi.findMany({
        select: {
            logo: true,
        },
        where: {
            NOT: {
                nama: 'DPH'
            }
        },
        orderBy: {
            urutan: { sort: 'asc' }
        }
    })

  return (
      <div className="p-5 flex overflow-y-auto gap-10 border-b-2 border-b-primary md:justify-evenly bg-white">
          {
              getAfiliasi.map((item, index) => (
                  <Image key={index} src={item.logo} alt="logo" width={60} height={60} />
              ))
          }
      </div>
  )
}

export default Logos