import Gallery from "@/components/MainComponent/Gallery/Gallery"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Gallery"
}
const Page = () => {
  return (
    <>
      <section>
        <div className="h-full border-y-4 xl:px-0 px-5 border-y-third text-center bg-third">
          <div className="container py-4 xl:px-0 px-10 bg-white rounded-xl">
            <h3 className="text-3xl font-bold">Gallery</h3>
          </div>
        </div>
      </section>
      <section className="bg-[url(/wavy/haikei/wave-haikei-orange.svg)] bg-cover bg-bottom">
        <div className="bg-[url(/wavy/haikei/wave-haikei_2.svg)] bg-cover bg-top py-48">
          <div className="px-10 sm:px-32">
            <div className="py-10 px-10 md:px-20">
              <h3 className="text-3xl font-bold text-center mb-3">Gallery Gen-A</h3>
              <hr className="w-1/4 border-black mx-auto" />
              <Gallery />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Page