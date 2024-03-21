import { Button } from '@/components/ui/button'
import { prisma } from '@/lib/Prisma'
import { ExternalLinkIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const BeritaSection = async () => {
    const getBerita = await prisma.berita.findMany({
        orderBy: {
            tanggal: "desc"
        },
    })

    return (
        <>
            {getBerita.map(item => (
                <div key={item.id} className="mb-6 lg:mb-0">
                    <div
                        className="relative block rounded-lg bg-white/80 backdrop-blur border-x-2 border-x-primary shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
                        <div className="flex">
                            <div
                                className="relative mx-4 -mt-4 overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg dark:shadow-black/20">
                                <Image src={item.gambar} alt='' width={1920} height={1080} />
                                <a href="#!">
                                    <div
                                        className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 bg-[hsla(0,0%,98.4%,.15)]">
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="p-6">
                            <h5 className="mb-3 text-lg font-bold">{item.judul}</h5>
                            <p className="mb-4 text-neutral-500 dark:text-neutral-300">
                                <small>Published <u>{item.tanggal.toLocaleDateString(["ban", "id"])}</u></small>
                            </p>
                            <p className="mb-4 pb-2 text-justify indent-8" dangerouslySetInnerHTML={{__html: item.konten.slice(0, 250) + "..."}}></p>
                            <Button asChild><Link target='_blank' href={item.link}>Read More <ExternalLinkIcon className='w-4 h-4 ml-2' /></Link></Button>
                        </div>
                    </div>
                </div>
            ))}
        </>
    )
}

export default BeritaSection