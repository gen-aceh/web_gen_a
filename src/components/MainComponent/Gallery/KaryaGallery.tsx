import Image from 'next/image'
import React, { useState } from 'react'

const KaryaGallery = () => {
    return (
        <>
            <div className="flex flex-wrap justify-center gap-5 mt-10">
                <div className="min-w-[270px] max-w-[320px] rounded-lg bg-white/90 backdrop-blur shadow shadow-black p-3 flex flex-col gap-3">
                    <div className="w-full">
                        <Image src={"/karya/karya1.png"} alt="" width={1920} height={1080} className="hover:scale-105 hover:brightness-75 transition-all duration-500 cursor-pointer"/>
                    </div>
                    <p className="px-3 mb-3 text-center font-bold">Pelatihan dan Pembinaan Santri Dayah <i>First Aider</i></p>
                </div>
                <div className="min-w-[270px] max-w-[320px] rounded-lg bg-white/90 backdrop-blur shadow shadow-black p-3 flex flex-col gap-3">
                    <div className="w-full">
                        <Image src={"/karya/karya2.png"} alt="" width={1920} height={1080} className="hover:scale-105 hover:brightness-75 transition-all duration-500 cursor-pointer" />
                    </div>
                    <p className="px-3 mb-3 text-center font-bold">Simulasi Bencana Gempa Bumi & Pertolongan Pertama Pada Kecelakaan (P3K) bagi Masyarakat Panti Asuhan</p>
                </div>
                <div className="min-w-[270px] max-w-[320px] rounded-lg bg-white/90 backdrop-blur shadow shadow-black p-3 flex flex-col gap-3">
                    <div className="w-full">
                        <Image src={"/karya/karya3.png"} alt="" width={1920} height={1080} className="hover:scale-105 hover:brightness-75 transition-all duration-500 cursor-pointer" />
                    </div>
                    <p className="px-3 mb-3 text-center font-bold">Pelatihan Tim Pelaksana Penyiapan PMT Berbasis Pangan Lokal bagi Ibu Hamil KEK & Balita Gizi Kurang</p>
                </div>
                <div className="min-w-[270px] max-w-[320px] rounded-lg bg-white/90 backdrop-blur shadow shadow-black p-3 flex flex-col gap-3">
                    <div className="w-full">
                        <Image src={"/karya/karya4.png"} alt="" width={1920} height={1080} className="hover:scale-105 hover:brightness-75 transition-all duration-500 cursor-pointer" />
                    </div>
                    <p className="px-3 mb-3 text-center font-bold">Pelatihan Komunikator Literal Digital dengan Pendekatan Komunikasi Antar Pribadi (KPA) bagi Penggerak Organisasi</p>
                </div>
                <div className="min-w-[270px] max-w-[320px] rounded-lg bg-white/90 backdrop-blur shadow shadow-black p-3 flex flex-col gap-3">
                    <div className="w-full">
                        <Image src={"/karya/karya5.png"} alt="" width={1920} height={1080} className="hover:scale-105 hover:brightness-75 transition-all duration-500 cursor-pointer" />
                    </div>
                    <p className="px-3 mb-3 text-center font-bold">Webinar Optimasi Kesehatan Mental pada Trend Self-Diagnosing dan Ketahanan Mental dengan Pendekatan Religio-Sosio psiko neuro-imunologis</p>
                </div>
                <div className="min-w-[270px] max-w-[320px] rounded-lg bg-white/90 backdrop-blur shadow shadow-black p-3 flex flex-col gap-3">
                    <div className="w-full">
                        <Image src={"/karya/karya6.png"} alt="" width={1920} height={1080} className="hover:scale-105 hover:brightness-75 transition-all duration-500 cursor-pointer" />
                    </div>
                    <p className="px-3 mb-3 text-center font-bold">Mastering Public Speaking, unleash Your communicating Skill</p>
                </div>
            </div>
        </>
    )
}

export default KaryaGallery