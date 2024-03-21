import Image from "next/image"

const Gallery = () => {
  return (
      <>
          <div className="flex flex-wrap justify-center gap-5 mt-10">
            {Array.from({ length: 18 }).map((_, index) => (
              <div key={index} className="min-w-[270px] overflow-hidden max-w-[320px] rounded-lg bg-white/90 backdrop-blur shadow shadow-black p-3 flex flex-col gap-3">
                  <div className="w-full">
                      <Image src={`/gallery/gallery${index + 1}.png`} alt="" width={1920} height={1080} className="hover:scale-105 hover:brightness-75 transition-all duration-500 cursor-pointer" />
                  </div>
              </div>
            ))}
          </div>
      </>
  )
}

export default Gallery