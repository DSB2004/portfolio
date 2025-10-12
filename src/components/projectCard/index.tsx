import Button from "@/ui/button";
import { Project } from "@/types/app";
import { ImGithub } from "react-icons/im";
import { CiGlobe } from "react-icons/ci";
import { Link } from "react-router-dom";
import TechIcon from "@/ui/icon";
export default function ProjectCard({ project }: { project: Project }) {
  const { name, about, github, live_link, tech, thumbnail } = project;
  return (
    <div className=" flex flex-col relative font-montserrat p-4 min-h-80 w-full  gap-4 rounded-lg ">
      {thumbnail ? (
        <div className="w-full h-48 sm:h-56">
          <img src={thumbnail} className="object-fill h-full w-full" />
        </div>
      ) : (
        <>
          <div className="w-full  h-48 sm:h-56 bg-[#4e4e4e33] blur-[3px]"></div>
        </>
      )}

      <div className=" flex  flex-col gap-2 opacity-80">
        <h2 className="text-xl font-bold ">{name}</h2>

        <p className="text-sm  text-white ">{about}</p>
        <div className="flex justify-end items-center gap-2 ">
          <Link to={github} target="_blank">
            <ImGithub className="w-6 h-6 text-white " />
          </Link>
          <Link to={live_link} target="_blank">
            <CiGlobe className="w-6 h-6  text-white" />
          </Link>
        </div>
      </div>
    </div>
  );
}
