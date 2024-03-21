import { ILayout } from "@/lib/Types"
import TopBar from "./TopBar"
import Footer from "./Footer"

const AuthLayout = ({ children } : ILayout) => {
  return (
    <>
        <div className="flex flex-col min-h-screen mx-8 sm:mx-20 lg:mx-32">
          <TopBar />
            <main className="my-10 flex justify-center items-center">
                {children}
            </main>
          <Footer />  
        </div>
    </>
  )
}

export default AuthLayout