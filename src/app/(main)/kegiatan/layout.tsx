import LeftNav from "@/components/MainComponent/kegiatan/LeftNav"
import RightBar from "@/components/MainComponent/kegiatan/RightBar"
import { ILayout } from "@/lib/Types"

const Layout = ({ children }: ILayout) => {
    return (
        <section className="flex px-20 py-20">
            <div className="grow px-8 space-y-5">{children}</div>
            <RightBar />
        </section>
    )
}

export default Layout