import { ILayout } from "@/lib/Types"

const Layout = ({ children }: ILayout) => {
    return (
        <section className="flex px-5 md:px-20 py-20">
            <div className="container space-y-5 shadow-xl p-14 md:p-24 rounded-md">{children}</div>
        </section>
    )
}

export default Layout