import CardLogin from "@/components/AuthComponent/CardLogin"
import { Metadata } from "next"

export const metadata : Metadata = {
  title : "Login"
}

const Login = () => {
  return (
    <section>
      <CardLogin />
    </section>
  )
}

export default Login