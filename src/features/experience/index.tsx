import React from "react";
import ExperienceCard from "@/components/experienceCard";
import ExperienceJson from "@/assets/experience.json";
export default function Experience() {
  return (
    <>
      <article
        className="flex flex-col mt-20 font-montserrat gap-6"
        id="experience"
      >
        <h2 className="text-white font-semibold font-spacemono text-2xl xl:text-5xl  flex flex-col">
          Experience
        </h2>

        <p className="text-justify  text-sm sm:text-base lg:text-lg text-[#b0b0b0]">
          Throughout my career, I have gained valuable experience working with a
          range of technologies and tools. From developing web applications to
          solving complex problems, each position has helped me grow both
          technically and professionally. Below, you'll find a summary of my
          previous roles and contributions, highlighting my key skills and the
          impact I made in each position.
        </p>

        <div className="flex flex-col gap-4 my-10 items-center">
          <ExperienceCard data={ExperienceJson[0]} />
          <ExperienceCard data={ExperienceJson[1]} />
          <ExperienceCard data={ExperienceJson[2]} />
        </div>

        <div className="w-80 h-1 my-4 mx-auto dark:bg-dark-primary bg-light-primary"></div>
      </article>
    </>
  );
}
