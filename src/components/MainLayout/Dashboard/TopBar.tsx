"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { BiMenuAltLeft, BiMenuAltRight, BiSolidBellRing } from "react-icons/bi";
import { Badge } from "../../ui/badge";
import { useSelectedLayoutSegments } from "next/navigation";
import Breadcrumb from "../../ui/breadcrumb";
import { useContext, useEffect, useState } from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { MenuContext } from "@/context/MenuContext";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertCircle, ChevronDownIcon, LogOutIcon, UserCog2Icon } from "lucide-react";
import ThemeButton from '@/components/ThemeButton'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Separator } from "@/components/ui/separator";

const TopBar = () => {
  const menuContext = useContext(MenuContext);
  const selectedSegments = useSelectedLayoutSegments();
  const selectedSegment = selectedSegments[selectedSegments.length - 1].replace(
    "_",
    " "
  );

  const [isSticky, setIsSticky] = useState(false);
  const offsetToSticky = 10; // Offset for smooth transition

  const handleScroll = () => {
    if (window.scrollY >= offsetToSticky) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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

  const { isSidebarOpen, toggle } = menuContext;

  return (
    <header
      className={`rounded-xl flex justify-between px-6 py-2 mb-5 items-center z-40 ${isSticky &&
        "sticky top-5 bg-gray-200/70 shadow shadow-slate-500 backdrop-blur-sm"
        } duration-300`}
    >
      <div>
        <Breadcrumb />
        <h2 className="capitalize text-2xl font-semibold">
          {selectedSegment ? selectedSegment : "Dashboard"}
        </h2>
      </div>
      <div className="flex items-center">

        {/* fix update selanjutnya */}
        {/* <ThemeButton /> */}

        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger
              onClick={toggle}
              className="text-gray-600 hover:text-gray-900 duration-200 focus:outline-none py-2 px-4 block ml-auto"
            >
              {isSidebarOpen ? (
                <BiMenuAltRight className="text-3xl" />
              ) : (
                <BiMenuAltLeft className="text-3xl" />
              )}
            </TooltipTrigger>
            <TooltipContent side="left">
              {isSidebarOpen ? "Close SideBar" : "Open SideBar"}
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>

        {/* fix update selanjutnya */}
        {/* <div className="relative cursor-pointer mt-3 group">
          <Popover>
            <PopoverTrigger>
              <Badge className="absolute -top-3 right-2.5 rounded-full">
                <small>1</small>
              </Badge>
              <BiSolidBellRing className="text-xl text-gray-600 group-hover:text-gray-900 duration-200 mr-5" />
            </PopoverTrigger>
            <PopoverContent className="max-w-[13rem] border-b-2 border-b-primary">
              you got nothing yet
            </PopoverContent>
          </Popover>
        </div> */}
        <div className="flex gap-5 justify-center items-center rounded-2xl bg-transparent p-0 lg:bg-third-gradient lg:pr-7 lg:py-2 text-white">
          <div className="pl-3 pr-1 transition-all">
            <Popover>
              <PopoverTrigger>
                <ChevronDownIcon className="w-4 h-4 mt-2 hover:scale-110 cursor-pointer" />
              </PopoverTrigger>
              <PopoverContent className="max-w-[240px] border-l-4 border-l-primary">
                <div className="font-semibold text-center">
                  Profile
                  <Separator />
                </div>
                <div className="mt-4">
                  <ul className="space-y-2">
                    <li className="rounded hover:bg-slate-200 hover:border-l-4 hover:border-l-primary px-2 py-3 transition-all flex gap-3 items-center cursor-pointer"><UserCog2Icon className="w-5 h-5 ml-2" />Edit Profile</li>
                    <li className="rounded hover:bg-slate-200 hover:border-l-4 hover:border-l-primary px-2 py-3 transition-all flex gap-3 items-center cursor-pointer"><LogOutIcon className="w-5 h-5 ml-2" />Sign Out</li>
                  </ul>
                </div>
              </PopoverContent>
            </Popover>
          </div>
          <div className="hidden lg:flex lg:flex-col">
            <p>Admin</p>
            <p><small>Role</small></p>
          </div>
          <Avatar className="shadow shadow-gray-100">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </header>
  );
};

export default TopBar;
