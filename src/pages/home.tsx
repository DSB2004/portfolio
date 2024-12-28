import React, { useEffect } from 'react'
import Header from '@/features/header'
import Hero from '@/features/hero'
import About from '@/features/about'
import Projects from '@/features/projects'
import Experience from '@/features/experience'
import Contact from '@/features/contact'
export default function Home() {

    return (
        <>

            <section className='relative w-10/12 min-w-80 max-w-[1500px] m-auto'>
                <Header></Header>
                <Hero></Hero>
                <About></About>
                <Projects></Projects>
                <Experience></Experience>
            </section>
            <Contact></Contact>

        </>
    )
}
