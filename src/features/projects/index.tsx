import React from 'react'
import ProjectCard from '@/components/projectCard'
import ProjectJson from "@/assets/project.json"
export default function Projects() {
    return (
        <article id="project">
            <h2 className='dark:text-white w-48 text-black font-semibold uppercase text-lg md:text-2xl mb-4 flex flex-col'>
                <span>
                    <span className='text-3xl md:text-5xl'>
                        P
                    </span>
                    rojects
                </span>

                <div className='w-full h-1 dark:bg-dark-primary bg-light-primary'></div>

            </h2>
            <p className='dark:text-dark-primary text-justify text-light-primary  text-sm sm:text-base lg:text-lg '>

                Before showcasing my projects, I'd like to highlight the skills and technologies I've applied in creating impactful solutions. Each project represents a unique challenge and opportunity to grow. Below, you’ll find a selection of my work that I’m most proud of.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4 my-6">
                {
                    ProjectJson.map(project => <ProjectCard project={project} />)

                }

            </div>

            <div className='w-80 h-1 my-4 mx-auto dark:bg-dark-primary bg-light-primary'></div>

        </article>
    )
}
