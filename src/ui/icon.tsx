import { FaReact, FaNodeJs, FaPython } from "react-icons/fa"; // Font Awesome

import { DiJavascript1, DiRedis } from "react-icons/di"; // Devicons
import {
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiRedux,
  SiExpress,
  SiApachekafka,
  SiNestjs,
  SiDart,
  SiFlutter,
  SiCelery,
  SiDjango,
} from "react-icons/si"; // Simple Icons

import { IoLogoElectron, IoLogoFirebase } from "react-icons/io5"; // Ionicons
const getTechIcon = (techName: string) => {
  switch (techName.toLowerCase()) {
    case "react":
      return <FaReact className="w-6 h-6 text-blue-400" title="React JS" />;
    case "node":
      return <FaNodeJs className="w-6 h-6 text-green-500" title="Node JS" />;
    case "javascript":
      return (
        <DiJavascript1 className="w-6 h-6 text-yellow-500" title="JavaScript" />
      );
    case "next":
      return <SiNextdotjs className="w-6 h-6 text-black" title="Next JS" />;
    case "typescript":
      return (
        <SiTypescript className="w-6 h-6 text-blue-600" title="TypeScript" />
      );
    case "tailwind":
      return (
        <SiTailwindcss className="w-6 h-6 text-cyan-500" title="Tailwind CSS" />
      );
    case "express":
      return <SiExpress className="w-6 h-6 text-white" title="Express JS" />;
    case "firebase":
      return (
        <IoLogoFirebase className="w-6 h-6 text-yellow-400" title="Firebase" />
      );
    case "redux":
      return <SiRedux className="w-6 h-6 text-purple-600" title="Redux" />;
    case "electron":
      return (
        <IoLogoElectron className="w-6 h-6 text-[#2196F3]" title="Electron" />
      );
    case "kafka":
      return <SiApachekafka className="w-6 h-6 text-white" title="Kafka" />;
    case "redis":
      return <DiRedis className="w-6 h-6 text-red-600" title="Redis" />;
    case "nestjs":
      return <SiNestjs className="w-6 h-6 text-red-500" title="NestJS" />;
    case "python":
      return <FaPython className="w-6 h-6 text-blue-500" title="Python" />;
    case "dart":
      return <SiDart className="w-6 h-6 text-blue-400" title="Dart" />;
    case "django":
      return <SiDjango className="w-6 h-6 text-blue-400" title="Dart" />;
    case "flutter":
      return <SiFlutter className="w-6 h-6 text-sky-500" title="Flutter" />;
    case "celery":
      return <SiCelery className="w-6 h-6 text-sky-500" title="Flutter" />;
    default:
      return <span className="text-sm text-gray-400">No icon</span>;
  }
};

export default function TechIcon({ techName }: { techName: string }) {
  return <>{getTechIcon(techName)}</>;
}
