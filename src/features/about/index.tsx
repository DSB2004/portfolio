import Button from "@/ui/button";
import Typewriter from "@/ui/typewriter";
import DevInfo from "../../assets/dev.json";
import { useNavigate } from "react-router-dom";
export default function About() {
  const navigate = useNavigate();
  return (
    <article id="about" className="flex flex-col mt-32 font-montserrat gap-6">
      <h2 className="text-white font-semibold font-spacemono text-2xl xl:text-5xl  flex flex-col">
        About Me
      </h2>
      <p className="text-sm sm:text-lg lg:text-xl">
        I'm Damanjeet Singh, a software developer
      </p>
      <p className="text-justify  text-sm sm:text-base lg:text-lg text-[#b0b0b0]">
        {DevInfo.about}
      </p>

      <div className="flex justify-between ">
        <Typewriter list={DevInfo.skills} speed={50} delay={500}></Typewriter>

        <Button onClick={() => window.open(DevInfo.resume, "_blank")}>
          View Resume
        </Button>
      </div>
    </article>
  );
}
