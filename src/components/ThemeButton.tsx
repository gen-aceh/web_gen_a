import { MoonIcon, SunIcon } from "lucide-react";
import { Button } from "./ui/button";
import { useTheme } from "next-themes";

const ThemeButton = () => {
  const { theme, setTheme } = useTheme();

  return (
    <Button
      variant="outline"
      size="icon"
      className={`rounded-full border ${theme === 'light' ? "border-black" : "border-white"}`}
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
    >
      {theme === "light" ? <SunIcon className="rotate-0 scale-100 transition-all duration-300 dark:-rotate-90 dark:scale-0" /> : <MoonIcon className="rotate-90 scale-0 transition-all duration-300 dark:rotate-0 dark:scale-100" />}
    </Button>
  );
};

export default ThemeButton;
