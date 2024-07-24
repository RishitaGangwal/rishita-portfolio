"use client";
import React from "react";
import { Label } from "../components/ui/label";
import { Input } from "../components/ui/input";
import { cn } from "@/lib/utils";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandX,
  IconMail
} from "@tabler/icons-react";
import { AnimatedTooltip } from "./ui/animated-tooltip"; 

const items = [
  {
    id: 1,
    name: "",
    designation: "Send me an email",
    icon: <IconMail size={32} color="black" />,
  },
  {
    id: 2,
    name: "",
    designation: "Connect with me on LinkedIn",
    icon: <IconBrandLinkedin size={32} color="black" />,
  },
  {
    id: 3,
    name: "",
    designation: "Check out my GitHub",
    icon: <IconBrandGithub size={32} color="black" />,
  },
  {
    id: 4,
    name: "",
    designation: "Follow me on Twitter",
    icon: <IconBrandX size={32} color="black" />,
  },
  
  
];

export function SignupFormDemo() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted");
  };

  return (
    <div>
      {/* <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-4 h-[1px] w-full" /> */}
    <div className="ml-[2rem] bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[2px] w-[15rem] " />
    <div className="flex gap-4 items-center justify-center mt-3">
      <div className="relative group">
        <AnimatedTooltip
          items={[items[0]]}
        />
      </div>

      <div className="relative group">
        <AnimatedTooltip
          items={[items[1]]}
        />
      </div>

      <div className="relative group">
        <AnimatedTooltip
          items={[items[2]]}
        />
      </div>

      <div className="relative group">
        <AnimatedTooltip
          items={[items[3]]}
        />
      </div>
    </div></div>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};
