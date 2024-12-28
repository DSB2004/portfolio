import React from 'react'
import Button from '@/ui/button'
import UserData from '@/assets/dev.json'
import OneWayTypewriter from '@/ui/one-way-typewriter'
export default function Hero() {
    return (
        <article id="hero" className='my-28 flex items-center'>
            <div>
                <h3 className='dark:text-dark-primary text-light-primary font-bold capitalize  text-lg md:text-xl mb-4'>Hi my name is</h3>
                <h3 className='dark:text-white text-black text-5xl sm:text-6xl lg:text-7xl mb-4'>Damanjeet Singh</h3>
                <OneWayTypewriter text='I build things for the web' className='w-fit dark:text-dark-primary text-light-primary uppercase text-lg md:text-xl mb-14'></OneWayTypewriter>

                <p className='dark:text-white w-full md:w-3/4 min-w-80 mb-6 text-sm md:text-base'>I'm a full stack developer from Delhi with expertise in creating dynamic and seamless web applications. I’m passionate about building visually appealing and functional solutions that solve real-world problems.</p>
                <Button onClick={() => window.open(UserData.resume, "_blank")} className='!p-1.5 !py-2 !text-xs  md:!p-2 md:!py-3 md:!text-sm  '>
                    Check out my resume!
                </Button>

            </div>
        </article>
    )
}

