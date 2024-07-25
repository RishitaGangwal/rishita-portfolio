"use client";
import React from "react";
import { cn } from "@/lib/utils";
import {
  IconBrandHtml5,
  IconBrandCss3,
  IconBrandJavascript,
  IconBrandBootstrap,
  IconBrandTailwind,
  IconBrandReact,
  IconBrandNextjs,
  IconBrandFramerMotion,
  IconBrandFirebase,
  IconBrandMysql,
} from "@tabler/icons-react";
import { BiLogoSpringBoot } from "react-icons/bi";
import { FaGitAlt, FaGithub } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { SiPostman } from "react-icons/si";
import { AnimatedTooltip } from "./ui/animated-tooltip"; // Import your AnimatedTooltip component

const skills = [
  {
    id: 1,
    name: "HTML5",
    icon: <IconBrandHtml5 size={32} color="black" />,
  },
  {
    id: 2,
    name: "CSS3",
    icon: <IconBrandCss3 size={32} color="black" />,
  },
  {
    id: 3,
    name: "JavaScript",
    icon: <IconBrandJavascript size={32} color="black" />,
  },
  {
    id: 4,
    name: "Bootstrap",
    icon: <IconBrandBootstrap size={32} color="black" />,
  },
  {
    id: 5,
    name: "Tailwind CSS",
    icon: <IconBrandTailwind size={32} color="black" />,
  },
  {
    id: 6,
    name: "React.js",
    icon: <IconBrandReact size={32} color="black" />,
  },
  {
    id: 7,
    name: "Next.js",
    icon: <IconBrandNextjs size={32} color="black" />,
  },
  {
    id: 8,
    name: "TypeScript",
    icon: <SiTypescript size={25} color="black" />,
  },
  {
    id: 9,
    name: "Framer Motion",
    icon: <IconBrandFramerMotion size={32} color="black" />,
  },
  {
    id: 10,
    name: "Spring Boot",
    icon: <BiLogoSpringBoot size={32} color="black" />,
  },
  {
    id: 11,
    name: "MySQL",
    icon: <IconBrandMysql size={32} color="black" />,
  },
  {
    id: 12,
    name: "Firebase",
    icon: <IconBrandFirebase size={32} color="black" />,
  },
  {
    id: 13,
    name: "Git",
    icon: <FaGitAlt size={32} color="black" />,
  },
  {
    id: 14,
    name: "GitHub",
    icon: <FaGithub size={32} color="black" />,
  },
  {
    id: 15,
    name: "Postman",
    icon: <SiPostman size={32} color="black" />,
  },
];

export function SkillsSection() {
  return (
    <div className="max-w-md w-full p-4 md:p-8 bg-white dark:bg-black flex-col justify-center items-center">
      <div className="md:my-4 flex flex-col sm:flex-col md:flex-row gap-4">
        <div className="flex flex-col sm:flex-wrap md:flex-nowrap gap-4">
        {/* mobile slice */}
          <div className="block md:hidden ml-2 space-y-16">
            {/* First group: 8 items on md, 5 items on sm */}
            <div className="flex mt-[2rem] gap-2 items-center">
              {skills.slice(0, 5).map((skill) => (
                <div key={skill.id} className="relative group">
                  <AnimatedTooltip
                    items={[
                      {
                        id: skill.id,
                        name: "",
                        designation: skill.name,
                        icon: skill.icon,
                      },
                    ]}
                  />
                </div>
              ))}
            </div>

            {/* Second group: 8 items on md, 5 items on sm */}
            <div className="flex mt-[2rem] gap-2 items-center">
              {skills.slice(5, 10).map((skill) => (
                <div key={skill.id} className="relative group">
                  <AnimatedTooltip
                    items={[
                      {
                        id: skill.id,
                        name: "",
                        designation: skill.name,
                        icon: skill.icon,
                      },
                    ]}
                  />
                </div>
              ))}
            </div>

            {/* Third group: remaining items on sm */}
            <div className="flex mt-[2rem] gap-2 items-center">
              {skills.slice(10, 15).map((skill) => (
                <div key={skill.id} className="relative group">
                  <AnimatedTooltip
                    items={[
                      {
                        id: skill.id,
                        name: "",
                        designation: skill.name,
                        icon: skill.icon,
                      },
                    ]}
                  />
                </div>
              ))}
            </div>
          </div>
          {/* dekstop slice */}
          <div className="md:block hidden flex justify-center items-center">
            {/* First group: 8 items on md */}
            <div className="flex flex-wrap md:flex-nowrap mt-[2rem] ml-[5rem] gap-4 items-center">
              {skills.slice(0, 8).map((skill) => (
                <div key={skill.id} className="relative group">
                  <AnimatedTooltip
                    items={[
                      {
                        id: skill.id,
                        name: "",
                        designation: skill.name,
                        icon: skill.icon,
                      },
                    ]}
                  />
                </div>
              ))}
            </div>

            {/* Second group: 7 items on md */}
            <div className="flex flex-wrap md:flex-nowrap mt-[4rem] ml-[7rem] gap-4 items-center">
              {skills.slice(8, 15).map((skill) => (
                <div key={skill.id} className="relative group">
                  <AnimatedTooltip
                    items={[
                      {
                        id: skill.id,
                        name: "",
                        designation: skill.name,
                        icon: skill.icon,
                      },
                    ]}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
