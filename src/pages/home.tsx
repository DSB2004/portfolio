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
      <div className="fixed inset-0 -z-10">
        <img
          src="/portfolio-bg.png"
          alt="Background"
          className="w-full h-full "
        />
      </div>
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
