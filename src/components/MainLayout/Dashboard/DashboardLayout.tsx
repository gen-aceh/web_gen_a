import { ILayout } from "@/lib/Types";
import React from "react";
import Sidebar from "./Sidebar";
import TopBar from "./TopBar";
import Footer from "./Footer";
import { Arvo } from "next/font/google";

const arvo = Arvo({
  weight: ["400", "700"],
  subsets: ["latin"],
  style: ["normal", "italic"],
  display: "auto",
  preload: true
});

const DashboardLayout = ({ children }: ILayout) => {
  return (
    <>
      <div className={`${arvo.className} flex`}>
        <div className="flex-col grow-1"> 
          <Sidebar />
        </div>
        <div className="flex flex-col grow-[2]">
          <main className="py-8 px-14 min-h-[93vh]">
            <TopBar />
            {children}
          </main>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default DashboardLayout;
