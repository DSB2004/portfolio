import { useState, useEffect } from "react";
import { ChevronUp } from "lucide-react";
import { ScrollTo } from "@/utils/handleScroll";
export default function MoveToUp() {
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    setScroll(window.scrollY > 500);
    const handleScroll = () => {
      setScroll(window.scrollY > 500);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div
        className={`${
          scroll ? "top-[80%]" : "top-[110%]"
        } fixed left-[10%] md:left-[5%] -translate-x-[50%] !z-50 transition-all duration-300  `}
      >
        <button className="relative group" onClick={() => ScrollTo("header")}>
          <div
            className={`bg-[#ffffff19] text-white p-1.5 w-28 shadow-lg absolute -top-6 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 group-hover:-top-9 transition-all duration-300 text-xs rounded-sm `}
          >
            Move To Top
          </div>

          <div
            className={`relative rounded-full bg-light dark:bg-dark p-3 overflow-hidden `}
          >
            <div
              className={`h-full w-full absolute top-0 left-0 z-0 transition-all duration-300 bg-[#6795C3]`}
            ></div>
            <ChevronUp className="w-6 h-6 text-white relative z-10" />
          </div>
        </button>
      </div>
    </>
  );
}
