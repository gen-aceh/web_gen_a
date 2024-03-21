import type { Metadata } from "next";
import { ILayout } from "../../lib/Types";
import DashboardLayout from "@/components/MainLayout/Dashboard/DashboardLayout";
import { MenuContextProvider } from "@/context/MenuContext";

export const metadata: Metadata = {
  title: "Dashboard Gen_A",
};

export default function RootLayout({ children }: ILayout) {
  return (
    <MenuContextProvider>
      <DashboardLayout>{children}</DashboardLayout>
    </MenuContextProvider>
  );
}
