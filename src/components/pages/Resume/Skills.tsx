import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";

import {
  FaHtml5,
  FaCss3Alt,
  FaSass,
  FaBootstrap,
  FaJs,
  FaReact,
  FaVuejs,
} from "react-icons/fa";
import {
  SiTypescript,
  SiTailwindcss,
  SiFirebase,
  SiSocketdotio,
  SiExpo,
} from "react-icons/si";

interface SkillType {
  label: string;
  value: number;
  icon: JSX.Element;
}

const skillList: SkillType[] = [
  { label: "HTML5", value: 95, icon: <FaHtml5 color="#E44D26" /> },
  { label: "CSS", value: 90, icon: <FaCss3Alt color="#1572B6" /> },
  { label: "SASS", value: 85, icon: <FaSass color="#CC6699" /> },
  { label: "Bootstrap", value: 88, icon: <FaBootstrap color="#7952B3" /> },
  { label: "JavaScript", value: 92, icon: <FaJs color="#F7DF1E" /> },
  { label: "React", value: 90, icon: <FaReact color="#61DAFB" /> },
  { label: "TypeScript", value: 85, icon: <SiTypescript color="#3178C6" /> },
  { label: "Vue", value: 80, icon: <FaVuejs color="#4FC08D" /> },
  { label: "Tailwind CSS", value: 87, icon: <SiTailwindcss color="#06B6D4" /> },
  { label: "React Native", value: 85, icon: <FaReact color="#61DAFB" /> },
  { label: "Expo", value: 80, icon: <SiExpo color="#000020" /> },
  { label: "Firebase", value: 78, icon: <SiFirebase color="#FFCA28" /> },
  { label: "Socket.IO", value: 75, icon: <SiSocketdotio color="#010101" /> },
];

const Skills = () => {
  return (
    <div>
      <div className="flex items-center justify-between">
        <h1 className="text-[25px] md:text-[32px] text-white-200 font-bold">
          My skills
        </h1>
        <div className="flex gap-4">
          <a
            href="public/cv/Achivment.pdf"
            target="_black"
            rel="noopener noreferrer"
          >
            <Button>Achivment</Button>
          </a>

          <a
            href="public/cv/EljoCVResume.pdf"
            target="_black"
            rel="noopener noreferrer"
          >
            <Button>Download CV</Button>
          </a>
        </div>
      </div>

      <div className="relative mt-4 flex flex-col gap-4 p-5 bg-gradient-onyx before:content-[''] before:absolute  before:bg-gradient-jet before:z-[-1] before:inset-[100px] rounded-2xl drop-shadow-2xl">
        {skillList.map((skill) => (
          <div key={skill.label} className="flex flex-col items-start ">
            <p className="flex items-center  gap-3 text-md text-white-200 font-bold">
              {skill.label} {skill.icon} {skill.value}%
            </p>
            <Progress
              value={skill.value}
              className="text-blue-400 bg-black-300 h-2"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
