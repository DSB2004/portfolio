import React from 'react';
import { FaReact, FaNodeJs, } from 'react-icons/fa'; // Font Awesome icons
import { DiJavascript1 } from 'react-icons/di'; // Devicons
import { SiNextdotjs, SiTypescript, SiTailwindcss, SiRedux, SiExpress } from 'react-icons/si'; // Simple Icons
import { IoLogoElectron, IoLogoFirebase } from "react-icons/io5";

const getTechIcon = (techName: string) => {
    switch (techName.toLowerCase()) {
        case 'react':
            return <FaReact className=" w-6 h-6  text-blue-400" title={"React JS"} />;
        case 'node':
            return <FaNodeJs className=" w-6 h-6  text-green-500" title={"Node JS"} />;
        case 'javascript':
            return <DiJavascript1 className=" w-6 h-6  text-yellow-500" title={"JavaScript"} />;
        case 'next':
            return <SiNextdotjs className=" w-6 h-6  text-black" title={"Next JS"} />;
        case 'typescript':
            return <SiTypescript className=" w-6 h-6  text-blue-600" title={"TypeScript"} />;
        case 'tailwind':
            return <SiTailwindcss className=" w-6 h-6  text-cyan-500" title={"Tailwind CSS"} />;
        case 'express':
            return < SiExpress className=" w-6 h-6  text-gray-700" title={"Express JS"} />;
        case 'firebase':
            return <IoLogoFirebase className=" w-6 h-6  text-yellow-400" title={"Firebase"} />;
        case 'redux':
            return <SiRedux className=" w-6 h-6  text-purple-600" title={"Redux"} />
        case 'electron':
            return <IoLogoElectron className=" w-6 h-6  text-[#2196F3]" title={"Electron"} />
        default:
            return <span>No icon available</span>;
    }
};

export default function TechIcon({ techName }: { techName: string }) {
    return <>{getTechIcon(techName)}</>;
}
