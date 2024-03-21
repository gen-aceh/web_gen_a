import { Button } from "@/components/ui/button";
import { ListNav } from "@/lib/ListRoute";
import { delay, motion } from "framer-motion";
import Link from "next/link";

const MobileNav = ({ onNav, segment }: { onNav: any, segment: string }) => {
  return (
    <motion.nav initial={{ scaleY: 0 }} animate={{ scaleY: 1 }} transition={{ type: "tween" }} className="absolute py-5 px-8 z-50 top-20 left-0 right-0 shadow shadow-black bg-white/80 mx-7 md:mx-16 backdrop-blur-sm space-y-1 rounded-xl">
      {ListNav.map((item, index) => {
        const isActive: boolean = segment === item.link;

        return (
          <Button className={`block bg-transparent hover:bg-primary text-primary-foreground ${isActive ? "bg-primary text-primary-foreground" : ""}`} key={index} asChild>
            <Link onClick={onNav} href={item.link}>{item.title}</Link>
          </Button>
        )
      })}
    </motion.nav>
  );
};

export default MobileNav;
