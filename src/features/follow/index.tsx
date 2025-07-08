import React from "react";
import { ImLinkedin, ImGithub } from "react-icons/im";
import { Link } from "react-router-dom";
import DevInfo from "../../assets/dev.json";
export default function FollowMe() {
  return (
    <div className="fixed md:flex flex-col items-center gap-2  top-[55%] hidden sm:left-[90%] md:left-[92.5%] z-50 text-white">
      <p className="font-montserrat  w-24 rotate-90">Follow Me</p>
      <img src="/vertical-line.png" alt="" className="mt-10 mb-4" />
      <div className="flex flex-col items-center gap-3 text-white">
        <Link to={DevInfo.linkedin}>
          <ImLinkedin className="w-5 h-5" />
        </Link>
        <Link to={DevInfo.github}>
          <ImGithub className="w-5 h-5" />
        </Link>
      </div>
    </div>
  );
}
