import { Toaster } from "sonner";
import "../app/style/global.css";
import type { Metadata } from "next";
import { Arvo } from "next/font/google";
import { Rosario } from "next/font/google";
import NextTopLoader from "nextjs-toploader";
import ThemeProvider from "@/context/ThemeProvider";
import { EdgeStoreProvider } from "@/lib/edgstore";

export const metadata: Metadata = {
  title: "gen-a",
  description: "Katalisator generasi unggul yang terkemuka, mandiri, berwawasan global, inovatif, dan aktif dalam mengembangkan evidence-based solution atas permasalahan di masyarakat",
  keywords: "Lembaga Edukasi, Riset, Training, Pengabdian",
  icons: {
    icon: [
      '/meta/favicon.ico'
    ],
    apple: [
      '/meta/apple-touch-icon.png'
    ],
    shortcut: [
      '/meta/apple-touch-icon.png'
    ],
  },
  manifest: '/meta/site.webmanifest'
};

const rosario = Rosario({
  weight: ["300", "500", "700"],
  subsets: ["latin"],
  style: ["normal", "italic"],
  display: "swap",
  preload: true
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="light" style={{ colorScheme: "light" }}>
      <body className={`${rosario.className} flex flex-col`}>
        <NextTopLoader color="#Eab308" />
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
          <EdgeStoreProvider>
            {children}
          </EdgeStoreProvider>
          <Toaster position="bottom-center" richColors closeButton />
        </ThemeProvider>
      </body>
    </html>
  );
}
