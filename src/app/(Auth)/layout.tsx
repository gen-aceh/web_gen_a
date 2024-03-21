import AuthLayout from "@/components/MainLayout/Auth/AuthLayout"
import { ILayout } from "../../lib/Types"

const RootLayout = ({ children } : ILayout) => {
  return (
    <AuthLayout>
        {children}
    </AuthLayout>
  )
}

export default RootLayout