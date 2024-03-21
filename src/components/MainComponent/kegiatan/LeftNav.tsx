import { dataAfiliasi } from "@/components/dataAfiliasi"
import Link from "next/link"

const LeftNav = () => {
    return (
        <aside className="p-6 pr-14 flex flex-col gap-5 border-r-2 border-r-primary">
            {dataAfiliasi.map(data => {
                return (
                    <ul key={data.title}>
                        <Link href="#">
                            <li role="navigation" className="bg-primary px-4 py-2 rounded-r-3xl">
                                {data.short}
                            </li>
                        </Link>
                    </ul>
                )
            })}
        </aside>
    )
}

export default LeftNav