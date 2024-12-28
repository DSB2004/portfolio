import React from 'react'
// import Typewriter from '../../ui/typewriter'
import Typewriter from '@/ui/typewriter'
import User from "@/assets/dev.json"
export default function About() {
    return (
        <article id="about" className='flex flex-col my-10'>
            <h2 className='dark:text-white w-48 text-black font-semibold uppercase text-lg md:text-2xl mb-4 flex flex-col'>
                <span>
                    <span className='text-3xl md:text-5xl'>
                        A
                    </span>
                    bout
                </span>

                <div className='w-full h-1 dark:bg-dark-primary bg-light-primary'></div>

            </h2>

            <p className='dark:text-dark-primary text-justify text-light-primary  text-sm sm:text-base lg:text-lg '>I'm a passionate full stack developer from Delhi, currently pursuing a B.Tech in Computer Science and Engineering. With a solid foundation in front-end and back-end technologies, I enjoy creating web applications that are both visually appealing and functional. I thrive on solving complex problems and continuously learning new skills to stay ahead in the evolving tech world. Whether it's building dynamic interfaces or designing robust server-side solutions, I aim to deliver seamless digital experiences.</p>

            <div className='flex items-center justify-center h-10 '>
                <Typewriter list={User.skills} delay={500} speed={50} className='text-sm md:text-base lg:text-lg'></Typewriter>
            </div>


            <div className='w-80 h-1 my-4 mx-auto dark:bg-dark-primary bg-light-primary'></div>
        </article>
    )
}
