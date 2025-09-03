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
  SiPostgresql,
  SiCelery,
  SiDjango,
  SiRedis,
  SiPython,
  SiElastic,
  SiFastapi,
  SiMqtt,
  SiReact,
  SiNodedotjs,
  SiJavascript,
  SiFirebase,
  SiElectron,
} from "react-icons/si"; // Simple Icons

import { IoLogoElectron, IoLogoFirebase } from "react-icons/io5"; // Ionicons
const getTechIcon = (techName: string) => {
  switch (techName.toLowerCase()) {
    case "react":
      return <SiReact className="w-6 h-6 text-blue-400" title="React JS" />;
    case "node":
      return <SiNodedotjs className="w-6 h-6 text-green-500" title="Node JS" />;
    case "javascript":
      return (
        <SiJavascript className="w-6 h-6 text-yellow-500" title="JavaScript" />
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
        <SiFirebase className="w-6 h-6 text-yellow-400" title="Firebase" />
      );
    case "redux":
      return <SiRedux className="w-6 h-6 text-purple-600" title="Redux" />;
    case "electron":
      return <SiElectron className="w-6 h-6 text-[#2196F3]" title="Electron" />;
    case "kafka":
      return <SiApachekafka className="w-6 h-6 text-white" title="Kafka" />;
    case "redis":
      return <SiRedis className="w-6 h-6 text-red-600" title="Redis" />;
    case "nest":
      return <SiNestjs className="w-6 h-6 text-red-500" title="NestJS" />;
    case "python":
      return <SiPython className="w-6 h-6 text-blue-500" title="Python" />;
    case "dart":
      return <SiDart className="w-6 h-6 text-blue-400" title="Dart" />;
    case "django":
      return <SiDjango className="w-6 h-6 text-blue-400" title="Dart" />;
    case "native":
      return <FaReact className="w-6 h-6 text-sky-500" title="React Native" />;
    case "celery":
      return <SiCelery className="w-6 h-6 text-blue-800" title="Celery" />;
    case "fast":
      return <SiFastapi className="w-6 h-6 text-[#27c186]" title="Fast API" />;
    case "mqtt":
      return <SiMqtt className="w-6 h-6 text-[#5a00ba]" title="MQTT" />;
    case "elastic":
      return (
        <SiElastic className="w-6 h-6 text-[#988400]" title="Elastic Search" />
      );
    case "postgres":
      return (
        <SiPostgresql
          className="w-6 h-6 text-[#0277ca]"
          title="Elastic Search"
        />
      );

    default:
      return <span className="text-sm text-gray-400">No icon</span>;
  }
};

export default function TechIcon({ techName }: { techName: string }) {
  return <>{getTechIcon(techName)}</>;
}
