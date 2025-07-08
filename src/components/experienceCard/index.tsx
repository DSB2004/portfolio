import React from "react";

import { Experience } from "@/types/app";
// import Experience from '@/assets/experience.json'
export default function ExperienceCard({ data }: { data: Experience }) {
  const {
    company_name,
    start_time,
    end_time,
    position,
    position_type,
    description,
  } = data;
  return (
    <div className="w-full lg:w-3/4 font-montserrat  my-auto p-2 md:p-4 min-w-80  flex justify-between min-h-20 relative flex-col lg:flex-row">
      <div className="w-1/6 p-2 md:p-4">
        <h2 className="text-xl dark:text-white ">{company_name}</h2>
        <p className=" dark:text-white opacity-50 text-xs uppercase">
          {position_type}
        </p>
      </div>

      <div className=" mx-4 bg-light-primary dark:bg-dark-primary w-1 min-h-full"></div>

      <div className="w-full lg:w-5/6 p-2 md:p-4 flex flex-col gap-2">
        <h4 className=" dark:text-white opacity-50 text-sm uppercase">
          {position}
        </h4>
        <ul className="text-sm  text-light-primary dark:text-dark-primary gap-2 flex flex-col">
          {description.map((ele) => (
            <li className="list-disc text-justify">{ele}</li>
          ))}
        </ul>

        <span className="text-xs ml-auto dark:text-white opacity-50 uppercase">
          {start_time} - {end_time}
        </span>
      </div>
    </div>
  );
}
