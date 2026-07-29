import React from "react";
import { CgCPlusPlus } from "react-icons/cg";
import { DiJavascript1, DiReact, DiNodejs, DiPython } from "react-icons/di";
import { SiFirebase, SiMongodb, SiExpress, SiGo, SiApachekafka, SiKubernetes, SiDocker, SiRedis, SiAmazonaws } from "react-icons/si";

const skills = [
  { icon: <CgCPlusPlus />, name: "C/C++" },
  { icon: <DiPython />, name: "Python" },
  { icon: <SiGo />, name: "Go" },
  { icon: <DiJavascript1 />, name: "JavaScript" },
  { icon: <DiReact />, name: "React" },
  { icon: <DiNodejs />, name: "Node.js" },
  { icon: <SiExpress />, name: "Express" },
  { icon: <SiMongodb />, name: "MongoDB" },
  { icon: <SiFirebase />, name: "Firebase" },
  { icon: <SiApachekafka />, name: "Kafka" },
  { icon: <SiRedis />, name: "Redis" },
  { icon: <SiDocker />, name: "Docker" },
  { icon: <SiKubernetes />, name: "Kubernetes" },
  { icon: <SiAmazonaws />, name: "AWS" },
];

function Techstack() {
  return (
    <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-4">
      {skills.map((skill, i) => (
        <div key={i} className="group flex flex-col items-center gap-3 p-6 rounded-lg bg-dark-800 border border-dark-600 hover:border-accent/40 transition-all hover:-translate-y-1">
          <span className="text-4xl text-gray-400 group-hover:text-accent transition-colors">{skill.icon}</span>
          <span className="text-xs text-gray-500 group-hover:text-gray-300 transition-colors">{skill.name}</span>
        </div>
      ))}
    </div>
  );
}

export default Techstack;
