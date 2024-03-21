"use client";

import Link from "next/link";
import { useContext } from "react";
import { ListRoute } from "@/lib/ListRoute";
import { usePathname } from "next/navigation";
import { MenuContext } from "@/context/MenuContext";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertCircle } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";

const Sidebar = () => {
  const menuContext = useContext(MenuContext);
  let currentURL = usePathname();

  if (!menuContext) {
    return (
      <div className="fixed top-2 right-3">
        <Alert variant="destructive" className="w-full h-fit m-10">
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>Cannot Find context</AlertDescription>
        </Alert>
      </div>
    );
  }

  const { isSidebarOpen } = menuContext;

  return (
    <aside
      className={`${
        isSidebarOpen ? "w-64" : "w-16"
      } transition-all duration-500 z-[99]`}
    >
      <div
        className={`fixed scrollbar ml-5 my-5 rounded-3xl bg-gradient-to-bl from-gray-700 to-gray-900 overflow-y-auto overflow-x-hidden h-[95%] ${
          isSidebarOpen ? "w-64" : "w-16"
        } transition-all duration-500`}
      >
        <nav className={`${isSidebarOpen ? "p-4" : "px-1 py-4"}`}>
          <div
            className={`flex flex-col items-center px-2 justify-center gap-3 transition-all duration-300`}
          >
            {/* <div className="relative rounded-full hover:scale-105 hover:cursor-pointer duration-200 overflow-visible w-12 h-14"> */}
              <Link className="relative rounded-full hover:scale-105 hover:cursor-pointer duration-200 overflow-visible w-12 h-14" href="/">
                <Image
                  src="/Logo_GEN-A.png"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  alt="logo"
                />
              </Link>
            {/* </div> */}
            {isSidebarOpen && (
              <span className="text-gray-200 uppercase font-bold text-xl tracking-widest">
                Gen_A
              </span>
            )}
          </div>
          <Separator className="my-4 bg-gradient-to-r from-transparent via-primary to-transparent" />
          <ul className="space-y-2">
            {ListRoute.map(({ icon, link, title }, index) => {
              
              let isActive: boolean = link === currentURL;

              return (
                <li key={index}>
                  <Link
                    href={link}
                    className={`flex font-extrabold items-center p-4 text-gray-200 hover:text-primary-foreground hover:bg-primary-gradient hover:scale-105 focus:bg-primary-gradient focus:text-primary-foreground ${
                      isActive
                        ? "bg-primary-gradient text-primary-foreground shadow-lg"
                        : ""
                    } rounded-lg ${
                      isSidebarOpen ? "" : "justify-center"
                    } transition-all duration-300`}
                  >
                    {icon}
                    {isSidebarOpen && (
                      <span className="ml-3 font-semibold">{title}</span>
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;
