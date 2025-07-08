import { ArrowRight } from "lucide-react";
import Button from "@/ui/button";
import { ScrollTo } from "@/utils/handleScroll";
export default function Header() {
  return (
    <header
      id="header"
      className="flex  z-50 justify-between items-center py-5 "
    >
      <h1 className="text-lg md:text-2xl font-bold ">dsb2004</h1>

      <nav className="items-center cursor-pointer justify-center gap-6 md:flex hidden list-none">
        <li onClick={() => ScrollTo("about")}>About</li>
        <li onClick={() => ScrollTo("projects")}>Projects</li>
        <Button
          className="gap-2 rounded-full"
          onClick={() => ScrollTo("contact")}
        >
          Contact
          <ArrowRight className="w-4 h-4"></ArrowRight>
        </Button>
      </nav>
    </header>
  );
}
