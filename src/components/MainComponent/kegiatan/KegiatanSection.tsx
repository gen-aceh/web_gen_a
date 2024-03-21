"use client"

import { dataAfiliasi } from "@/components/dataAfiliasi"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { useState } from "react"
import { motion } from "framer-motion"

const KegiatanSection = () => {
    // const [currentImage, setCurrentImage] = useState<string>("PHI")

    return (
        <section id="kegiatan" className="relative bg-[url(/wavy/haikei/wave-haikei_2.svg)] bg-cover bg-top">
            <div className="flex flex-wrap justify-between items-center px-10 sm:px-32 pb-24 pt-80 gap-10">
                <div className="space-y-5 xl:w-[40%] w-full">
                    <h3 className="text-4xl mb-5">Kegiatan</h3>
                    <hr className="border border-third w-2/6" />
                    <p>Di organisasi yang berfokus pada pendidikan, pelatihan, kajian, dan riset, kegiatan adalah fondasi yang membangun jalan bagi inovasi, pemahaman mendalam, dan pengembangan potensi. Kami mengadakan beragam kegiatan yang dirancang khusus untuk mendorong pertumbuhan intelektual dan profesionalisme anggota, serta memberikan kontribusi yang berarti bagi dunia pendidikan dan riset</p>
                    <div className="flex flex-wrap gap-3">
                        {
                            dataAfiliasi.map(item => (
                                <Button size="sm" key={item.short} /*onClick={e => setCurrentImage(item.short)} */className="rounded-full font-bold">{item.short}</Button>
                            ))
                        }
                    </div>
                </div>
                <motion.div
                    className="xl:w-[40%] flex justify-center items-center z-[2]"
                    //key={currentImage}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{
                        type: "spring",
                        stiffness: 200,
                        damping: 20,
                    }}
                >
                    <Image src={`/bg-kegiatan.png`} alt="suhu" width={1080} height={1080    } />
                </motion.div>
            </div>
        </section>
    )
}

export default KegiatanSection