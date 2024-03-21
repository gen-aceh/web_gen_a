"use client";

import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { ListNav } from "@/lib/ListRoute";
import { ChevronUp, Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import MobileNav from "./MobileNav";

const companyName = "gen-a"

const Navbar = () => {
  const [isTarnsparent, setIsTarnsparent] = useState<boolean>(false);
  const [showMobileMenu, setShowMobileMenu] = useState<boolean>(false);
  const [isSticky, setIsSticky] = useState<boolean>(false);
  const offsetToSticky = 70; // Offset for smooth transition
  const segment = usePathname();

  const handleScroll = () => {
    if (window.scrollY >= offsetToSticky) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  };

  const handleNavMobile = () => {
    if (window.innerWidth >= 1024) {
      setShowMobileMenu(false);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleNavMobile);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("resize", handleNavMobile);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (segment === "/") {
      setIsTarnsparent(true);
    }
    return () => {
      setIsTarnsparent(false);
    }
  }, [segment])

  return (
    <>
      <nav className={`px-4 py-2 bg-accent text-black text-accent-foreground flex justify-between z-50 duration-300 ${isTarnsparent && "fixed top-0 left-0 right-0 bg-transparent"} ${isSticky && "fixed top-5 left-0 right-0 shadow shadow-black bg-white/80 mx-7 md:mx-16 backdrop-blur-sm rounded-xl"} ${isSticky && isTarnsparent ? "text-black" : !isSticky && !isTarnsparent ? "text-black" : !isSticky && isTarnsparent && "text-white"}`}>
        <Link className="flex items-center hover:scale-105 duration-200 gap-2" href="/">
          <div className="relative rounded-full overflow-visible w-10 h-12">
            <Image
              src="/Logo_GEN-A.png"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              alt="logo"
            />
          </div>
          <p className="uppercase font-bold">{companyName}</p>
        </Link>
        <NavigationMenu className="lg:flex hidden">
          <NavigationMenuList>
            {ListNav.map((item, index) => {
              const isActive: boolean = segment === item.link;

              return (
                <NavigationMenuItem key={index}>
                  <Link href={item.link} legacyBehavior passHref>
                    <NavigationMenuLink
                      className={`${navigationMenuTriggerStyle()} text-black py-6 ${isActive && "bg-primary text-primary-foreground"} ${isSticky && isTarnsparent ? "text-black" : !isSticky && !isTarnsparent ? "text-black" : !isSticky && isTarnsparent && "text-white hover:text-primary-foreground"}`}
                    >
                      {item.title}
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              );
            })}
          </NavigationMenuList>
        </NavigationMenu>
        <Button
          variant="ghost"
          onClick={() => setShowMobileMenu(!showMobileMenu)}
          className="lg:hidden"
        >
          {showMobileMenu ? (
            <ChevronUp className="font-bold" />
          ) : (
            <Menu className="font-bold" />
          )}
        </Button>
        {showMobileMenu && <MobileNav onNav={() => setShowMobileMenu(!showMobileMenu)} segment={segment} />}
      </nav>
    </>
  );
};

export default Navbar;
