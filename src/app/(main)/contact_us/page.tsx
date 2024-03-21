import { FormContact } from "@/components/MainComponent/kontak/FormContact"
import MapAddress from "@/components/MainComponent/kontak/MapAddress"
import { Badge } from "@/components/ui/badge"
import { getConfig } from "@/lib/Config"
import { FacebookIcon, InstagramIcon, YoutubeIcon } from "lucide-react"
import { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Kontak"
}

const Page = async () => {
  const config = await getConfig();

  return (
    <>
      <section className="h-[70vh] bg-third-gradient text-third-foreground py-10">
        <MapAddress />
      </section>
      <section className="bg-[url(/wavy/haikei/circle-scatter-haikei.svg)] bg-cover">
        <div className="backdrop-blur py-20 px-10">
          <div className="container flex flex-col-reverse lg:flex-row flex-wrap gap-20 bg-white/40 p-10 shadow rounded-xl">
            <div className="grow">
              <FormContact />
            </div>
            <div className="p-2">
              <h4>Hubungin Kami di :</h4>
              <hr className="w-1/2 border border-primary-foreground my-4" />
              <ul className="text-lg space-y-6 list-disc lg:ml-5">
                <li className="list-none lg:-ml-5">Sekretariat kami : <br /> <span className="text-sm">{config?.alamatOrganisasi}</span></li>
                <li>
                  <span className="font-semibold flex items-center"><InstagramIcon className="mr-3" />  Instagram</span>
                  <div className="flex items-center gap-2">
                    <p className="text-base ml-9">{config?.instagram ? config.instagram : "@Social_media"}</p>
                    {config.URLinstagram && (<Link href={config.URLinstagram} target="_blank"><Badge className="hover:scale-105 cursor-pointer">Visit</Badge></Link>)}
                  </div>
                </li>
                <li>
                  <span className="font-semibold flex items-center"><FacebookIcon className="mr-3" />  Facebook</span>
                  <div className="flex items-center gap-2">
                    <p className="text-base ml-9">{config?.facebook ? config.facebook : "@Social_media"}</p>
                    {config.URLfacebook && (<Link href={config.URLfacebook} target="_blank"><Badge className="hover:scale-105 cursor-pointer">Visit</Badge></Link>)}
                  </div>
                </li>
                <li>
                  <span className="font-semibold flex items-center"><YoutubeIcon className="mr-3" /> Youtube</span>
                  <div className="flex items-center gap-2">
                    <p className="text-base ml-9">{config?.youtube ? config.youtube : "@Social_media"}</p>
                    {config.URLyoutube && (<Link href={config.URLyoutube} target="_blank"><Badge className="hover:scale-105 cursor-pointer">Visit</Badge></Link>)}
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Page