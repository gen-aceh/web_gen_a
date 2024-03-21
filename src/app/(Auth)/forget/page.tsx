import CardForget from "@/components/AuthComponent/CardForget"
import { Metadata } from "next"

export const metadata : Metadata = {
  title : "Forget Password"
}

const Register = () => {
    return (
      <section>
          <CardForget />
      </section>
    )
  }
  
  export default Register