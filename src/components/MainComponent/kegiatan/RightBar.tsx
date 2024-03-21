import { dataAfiliasi } from "@/components/dataAfiliasi";
import { Badge } from "@/components/ui/badge"
import Link from "next/link";

const news = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, aspernatur. Porro, facere aperiam. Necessitatibus exercitationem commodi ut, non delectus vitae.";

const RightBar = () => {
    return (
        <div className="py-5 px-20 space-y-12 border-l-2 border-l-primary w-1/2">
            <div className="relative p-4 shadow-md border-l-2 border-l-primary rounded-xl bg-background max-w-sm">
                <div className="absolute -top-5 rounded-full bg-third text-third-foreground w-fit">
                    <h4 className="px-5 py-2 text-base">Departemen</h4>
                </div>
                <div className="p-4 flex flex-wrap gap-2 pt-8">
                    {dataAfiliasi.map(afiliasi => (
                        <Badge key={afiliasi.logo}><Link href="#">{afiliasi.short}</Link></Badge>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default RightBar