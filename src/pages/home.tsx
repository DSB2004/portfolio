import React, { useEffect } from "react";
import Header from "@/features/header";
import Hero from "@/features/hero";
import About from "@/features/about";
import Projects from "@/features/projects";
import Experience from "@/features/experience";
import Contact from "@/features/contact";
import FollowMe from "@/features/follow";
import MoveToUp from "@/features/moveToUp";
export default function Home() {
  return (
    <>
      <div className="bg-[#191A31] fixed inset-0 -z-20 w-full h-full"></div>
      <div className="fixed inset-0 -z-10">
        <img
          src="/portfolio-bg.png"
          alt="Background"
          className="w-full h-full "
        />
      </div>

      <img
        src="/pattern.png"
        alt=""
        className="fixed -z-5 right-3 sm:right-10 -top-[10%] opacity-75 [mask-image:linear-gradient(to_top,white,transparent)]"
      />
      <img
        src="/pattern.png"
        alt=""
        className="fixed -z-5 left-3 sm:left-10 -bottom-[10%] opacity-75 [mask-image:linear-gradient(to_bottom,white,transparent)]"
      />

      <FollowMe></FollowMe>
      <MoveToUp></MoveToUp>
      <section className="  text-white font-spacemono relative w-10/12 min-w-80 max-w-[1400px] m-auto">
        <Header></Header>
        <Hero></Hero>
        <About></About>
        <Projects></Projects>
        <Experience></Experience>
        {/*
         */}
      </section>
      <Contact></Contact>
    </>
  );
}
