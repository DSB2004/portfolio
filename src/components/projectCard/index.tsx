import Button from "@/ui/button";
import { Project } from "@/types/app";
import { ImGithub } from "react-icons/im";
import { CiGlobe } from "react-icons/ci";
import { Link } from "react-router-dom";
import TechIcon from "@/ui/icon";
export default function ProjectCard({ project }: { project: Project }) {
  const { name, about, github, live_link, tech } = project;
  return (
    <div className=" flex flex-col relative font-montserrat p-4 min-h-80 w-full shadow-xl border-2 border-[#ffffff16] rounded-lg bg-[#ffffff12]">
      <div className=" flex items-center justify-between">
        <h2 className="text-xl font-bold">{name}</h2>
        <div className="flex justify-end items-center gap-2">
          <Link to={github} target="_blank">
            <ImGithub className="w-6 h-6 text-white " />
          </Link>
          <Link to={live_link} target="_blank">
            <CiGlobe className="w-6 h-6  text-white" />
          </Link>
        </div>
      </div>

      <p className="text-sm text-justify mt-5 text-white">{about}</p>

      <div className="flex my-2 justify-end mt-auto gap-2 w-full ">
        {tech.map((ele) => (
          <TechIcon techName={ele} />
        ))}
      </div>
    </div>
  );
}
