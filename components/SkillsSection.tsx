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
  IconBrandMysql
} from "@tabler/icons-react";
import { BiLogoSpringBoot } from "react-icons/bi";
import { FaGitAlt, FaGithub } from "react-icons/fa";
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
    name: "Javascript",
    icon: <IconBrandJavascript size={32} color="black" />,
  },
  {
    id: 4,
    name: "Bootsrap",
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
    name: "Framer Motion",
    icon: <IconBrandFramerMotion size={32} color="black" />,
  },
  {
    id: 9,
    name: "Spingboot",
    icon: <BiLogoSpringBoot size={32} color="black" />,
  },
   {
    id: 10,
    name: "MySQL",
    icon: <IconBrandMysql size={32} color="black" />,
  },
  {
    id: 11,
    name: "Firebase",
    icon: <IconBrandFirebase size={32} color="black" />,
  },
  {
    id: 12,
    name: "Git",
    icon: <FaGitAlt size={32} color="black" />,
  },
  {
    id: 13,
    name: "GitHub",
    icon: <FaGithub size={32} color="black" />,
  },
  {
    id: 14,
    name: "Postman",
    icon: <SiPostman size={32} color="black" />,
  },
];

export function SkillsSection() {
  return (
    <div className="max-w-md w-full p-4 md:p-8 bg-white dark:bg-black flex-col justify-center items-center">
      {/* <p className="text-neutral-600 text-lg dark:text-neutral-300 w-full whitespace-nowrap ">
        Here are some of the technologies and skills I excel in:
      </p> */}

      <div className="my-4">
        {/* <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" /> */}

        <div className="mt-[2rem] ml-[8rem] flex gap-4 items-center">
          {skills.slice(0, 7).map(skill => (
            <div key={skill.id} className="relative group">
              <AnimatedTooltip
                items={[{
                  id: skill.id,
                  name: "",
                  designation: skill.name,
                  icon: skill.icon,
                }]}
              />
            </div>
          ))}
        </div>

        <div className="mt-[3rem] ml-[10rem] flex gap-4 items-center">
          {skills.slice(7, 13).map(skill => (
            <div key={skill.id} className="relative group">
              <AnimatedTooltip
                items={[{
                  id: skill.id,
                  name: "",
                  designation: skill.name,
                  icon: skill.icon,
                }]}
              />
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}