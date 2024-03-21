import Footer from "@/components/MainLayout/Main/Footer";
import Navbar from "@/components/MainLayout/Main/Navbar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <main className="grow overflow-x-hidden">{children}</main>
      <Footer />
    </>
  );
}
