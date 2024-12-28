import React from 'react'
import ExperienceCard from '@/components/experienceCard'
import ExperienceJson from "@/assets/experience.json"
export default function Experience() {
    return (
        <>
            <article className='flex flex-col my-10' id="experience">
                <h2 className='dark:text-white w-48 text-black font-semibold uppercase text-lg md:text-2xl mb-4 flex flex-col'>
                    <span>
                        <span className='text-3xl md:text-5xl'>
                            E
                        </span>
                        xperience
                    </span>

                    <div className='w-full h-1 dark:bg-dark-primary bg-light-primary'></div>

                </h2>

                <p className='dark:text-dark-primary text-justify text-light-primary  text-sm sm:text-base lg:text-lg '>Throughout my career, I have gained valuable experience working with a range of technologies and tools. From developing web applications to solving complex problems, each position has helped me grow both technically and professionally. Below, you'll find a summary of my previous roles and contributions, highlighting my key skills and the impact I made in each position.</p>

                <div className='flex flex-col gap-4 my-10 items-center'>
                    <ExperienceCard data={ExperienceJson[0]} />
                    <ExperienceCard data={ExperienceJson[1]} />
                </div>


                <div className='w-80 h-1 my-4 mx-auto dark:bg-dark-primary bg-light-primary'></div>
            </article>
        </>
    )
}
