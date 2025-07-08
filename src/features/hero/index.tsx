import { ScrollTo } from "@/utils/handleScroll";
import Button from "@/ui/button";

import { ArrowRight } from "lucide-react";
export default function Hero() {
  return (
    <article
      id="hero"
      className="my-16 flex items-center flex-col gap-10 text-white"
    >
      <div className="flex flex-col items-center gap-5 ">
        <h3 className="text-base sm:text-lg lg:text-xl font-montserrat">
          Hi my name is Damanjeet Singh
        </h3>
        <img src="/horizontal-line.png" alt="" />
      </div>

      <h3 className="text-3xl md:text-5xl !leading-tight font-bold sm:text-6xl lg:text-7xl text-center">
        I build full-stack solutions for the{" "}
        <span className="text-[#507295]">{"{modern web}"}</span>.
      </h3>

      <p className="text-sm sm:text-base lg:text-xl text-center  text-[#b0b0b0] font-montserrat">
        I'm a full stack developer from Delhi with expertise in creating dynamic
        and seamless web applications. I’m passionate about building visually
        appealing and functional solutions that solve real-world problems.
      </p>

      <div className="flex gap-4 items-center ">
        <Button className="" onClick={() => ScrollTo("about")}>
          About Me
        </Button>
        <Button
          onClick={() => ScrollTo("contact")}
          className="!bg-transparent border-white border-2 gap-2 rounded-full "
        >
          Let's Talk
          <ArrowRight className="w-4 h-4"></ArrowRight>
        </Button>
      </div>
    </article>
  );
}
