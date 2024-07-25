"use client";
import { Icons } from "@/components/icons";
import { FlipWordsDemo } from "@/components/magicui/FlipWordsDemo";
import OrbitingCircles from "@/components/magicui/orbiting-circles";
import { SquigglyUnderline } from "@/components/magicui/SquigglyUnderline";
// import TextReveal from "@/components/magicui/text-reveal";
// import { TextRevealCardPreview } from "@/components/magicui/TextRevealCardPreview";
import WordRotate from "@/components/magicui/word-rotate";
import { ProjectCard } from "@/components/project-card";
import { SignupFormDemo } from "@/components/SignupFormDemo";
import { SkillsSection } from "@/components/SkillsSection";
import { Button, buttonVariants } from "@/components/ui/button";
import { FlipWords } from "@/components/ui/flip-words";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { IconExternalLink, IconMail } from "@tabler/icons-react";
import {
  ChevronRight,
  GlobeIcon,
  MailIcon,
  PhoneIcon,
  Youtube,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import profile from "../public/Me.jpg";
import { FaEnvelope } from "react-icons/fa";
import { GoArrowUpRight } from "react-icons/go";
import { IoMail } from "react-icons/io5";
import { FaRegCopy } from "react-icons/fa";

const email = "rishitagangwal.work@gmail.com";

const copyToClipboard = () => {
  navigator.clipboard.writeText(email);
  alert("Email copied to clipboard!");
};

const contact = {
  email: "rishitagangwal5@gmail.com",
  social: [
    {
      name: "GitHub",
      url: "https://github.com/RishitaGangwal",
      icon: GitHubLogoIcon,
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/rishita-gangwal/",
      icon: (props: React.SVGProps<SVGSVGElement>) => (
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
          <path
            fill="currentColor"
            d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
          />
        </svg>
      ),
    },
    {
      name: "Twitter",
      url: "https://x.com/Rishittaa",
      icon: (props: React.SVGProps<SVGSVGElement>) => (
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
          <path
            fill="currentColor"
            d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"
          />
        </svg>
      ),
    },
  ],
};

const projects = [
  {
    title: "URL Shortener",
    dates: "July 2024",
    active: true,
    description:
      " An authenticated project using Firebase. Users register to access a free tool for shortening URLs. Once registered, users can log in and utilize the service.",
    technologies: ["ReactJs", "TailwindCSS", "Firebase"],
    links: [
      {
        type: "Live",
        href: "https://react-url-shortenerr.vercel.app/",
        icon: <IconExternalLink className="h-4 w-4" />,
      },
      {
        type: "Source",
        href: "https://github.com/RishitaGangwal/url-shortener",
        icon: <GitHubLogoIcon className="h-4 w-4" />,
      },
    ],
    image: "https://i.postimg.cc/66rfJ9Yc/Url-Shortener.png",
  },
  {
    title: "Word Guessing Game",
    dates: "June 2024",
    active: true,
    description:
      "Designed and developed a word guessing game where players solve puzzles by guessing the correct word within a limited number of attempts.",
    technologies: ["HTML", "CSS", "JavaScript"],
    links: [
      {
        type: "Live",
        href: "https://word-guessing-gamee.vercel.app/",
        icon: <IconExternalLink className="h-4 w-4" />,
      },
      {
        type: "Source",
        href: "https://github.com/RishitaGangwal/word-guessing-game",
        icon: <GitHubLogoIcon className="h-4 w-4" />,
      },
    ],
    image: "https://i.postimg.cc/9fjCRYHy/Word-Guessing.png",
  },
  {
    title: "ReTeched",
    dates: "Feb 2024",
    active: true,
    description:
      "Connects users with nearby e-waste recycling centers to promote eco-friendly practices and support environmental sustainability. This project was developed during an in-person hackathon.",
    technologies: ["ReactJs", "TailwindCSS"],
    links: [
      {
        type: "Live",
        href: "https://re-teched.vercel.app/",
        icon: <IconExternalLink className="h-4 w-4" />,
      },
    ],
    image: "https://i.postimg.cc/nrh4GmBL/ReTeched.png",
  },
];

export default function Component() {
  return (
    <main className="flex flex-col min-h-[150dvh] ">
      <SquigglyUnderline />
      <section className="md:w-full w-[300px] py-2 md:py-24 lg:py-12 ">
        <div className="container px-1 md:px-6 grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px] md:ml-[6rem] ml-[2rem] mb-7">
          <div className="mt-[5rem] flex flex-col justify-center space-y-4 md:ml-[17rem] ">
            <div className="space-y-2">
              <h1 className="text-md font-semibold tracking-tight sm:text-55l xl:text-5xl/none md:mb-7 mb-4 font-poppins">
                Hi, I&apos;m Rishita👋
              </h1>
              <span className="mt-[5rem] md:w-[600px] w-[20px] md:text-xl ">
                A dedicated frontend developer focused on engaging user
                interface.
              </span>
            </div>
            <div className="">
              <Link
                href="https://drive.google.com/file/d/11fXKL84QD99csknj_2rH95fYjlpstSMs/view?usp=sharing"
                target="blank"
                className={cn(
                  buttonVariants({
                    size: "lg",
                  }),
                  "mt-5 px-4 py-2 text-black backdrop-blur-sm border border-black rounded-md hover:shadow-[0px_0px_4px_4px_rgba(0,0,0,0.1)] bg-white/[0.2] text-sm transition duration-200 hover:text-white"
                )}
              >
                Resume
                <ChevronRight className="h-4 w-4 translate-x-0 transform transition-all duration-300 ease-out group-hover:translate-x-1" />
              </Link>
            </div>
            <div className="flex gap-4 pt-5 font-sans text-sm text-muted-foreground print:hidden">
              {contact.email ? (
                <Tooltip>
                  <TooltipTrigger>
                    <Button
                      className="size-8"
                      variant="outline"
                      size="icon"
                      asChild
                    >
                      <a href={`mailto:${contact.email}`} target="blank">
                        <MailIcon className="size-5" />
                      </a>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Email</p>
                  </TooltipContent>
                </Tooltip>
              ) : null}
              {contact.social.map((social) => (
                <Tooltip key={social.name}>
                  <TooltipTrigger>
                    <Button
                      className="size-8"
                      variant="outline"
                      size="icon"
                      asChild
                    >
                      <a href={social.url} target="blank">
                        <social.icon className="size-5" />
                      </a>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{social.name}</p>
                  </TooltipContent>
                </Tooltip>
              ))}
            </div>
          </div>
          <div className="md:ml-10 ml-7">
            <Image
              src={profile}
              alt="Profile"
              width={300}
              height={300}
              className="rounded-lg object-cover mt-[5rem] mr-[5rem] transition-transform transition-shadow transition-border duration-300 hover:-translate-y-2 hover:shadow-2xl hover:border-blue-500"
              style={{ boxShadow: "0 4px 8px rgba(0, 0, 0, 0.5)" }}
            />
          </div>
        </div>
      </section>
      <hr
        className="mb-[6rem] h-[1px] my-8 bg-gray-300 border-0 dark:bg-gray-700 w-[65%] mx-auto"
        id="about"
      />

      <section className="w-full">
        <div className="container grid md:items-center justify-center gap-4 text-center relative ">
          <div className="relative z-10 ">
            <h2 className="md:mr-[42rem]  text-4xl tracking-normal md:text-4xl/tight font-poppins font-semibold opacity-90">
              About Me
            </h2>
            <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-4 h-[2px] md:w-[10rem] " />
            <div className="md:flex flex-col">
              <div className="md:max-w-[500px] max-w-[350px] md:text-md md:mr-[20rem] md:ml-0 ml-[2rem] justify-center items-center">
                <p className="mt-[2rem]  text-justify">
                  Hi there! I’m an MCA student from SGSITS, Indore, passionate
                  about transforming complex ideas into intuitive, user-friendly
                  applications. I love diving into new projects and bringing
                  fresh, creative solutions to the table. 🚀
                </p>
                <br></br>
                <p className="text-justify">
                  What exciting projects are you working on? How can I help you
                  achieve your biggest goals? Let’s connect and create something
                  remarkable together!✨
                </p>
                <br></br>
                <p className="text-justify">
                  I’m excited to explore how my skills and enthusiasm can add
                  value to your team. Let’s make great things happen!
                </p>
              </div>
              <div className="absolute md:top-0 md:left-0 md:ml-[20rem] h-[400px] w-full max-w-full flex items-center justify-center overflow-hidden rounded-lg md:mt-0 mt-[1rem]">
                <OrbitingCircles
                  className="h-[30px] w-[30px] border-none bg-transparent"
                  duration={20}
                  delay={14}
                  radius={80}
                >
                  <Icons.nextjs className="w-8 h-8" />
                </OrbitingCircles>
                <OrbitingCircles
                  className="h-[30px] w-[30px] border-none bg-transparent"
                  duration={20}
                  delay={7}
                  radius={80}
                >
                  <Icons.react className="w-8 h-8" />
                </OrbitingCircles>
                <OrbitingCircles
                  className="h-[50px] w-[50px] border-none bg-transparent"
                  reverse
                  radius={160}
                  duration={20}
                >
                  <Icons.framermotion className="w-8 h-8" />
                </OrbitingCircles>
                <OrbitingCircles
                  className="h-[50px] w-[50px] border-none bg-transparent"
                  reverse
                  radius={160}
                  duration={20}
                  delay={20}
                >
                  <Icons.gitHub className="w-8 h-8" />
                </OrbitingCircles>
                <OrbitingCircles
                  className="h-[50px] w-[50px] border-none bg-transparent"
                  reverse
                  radius={120}
                  duration={10}
                >
                  <Icons.tailwindcss className="w-8 h-8" />
                </OrbitingCircles>
              </div>
            </div>
          </div>

          <div className="space-y-3 relative z-10 md:w-full w-[400px] md:ml-0 md:mt-0 mt-[20rem]">
            <h2 className="mt-[6rem] mb-[1rem] tracking-normal font-poppins font-semibold opacity-90 md:text-4xl text-2xl">
              Tech Stack Highlights
            </h2>
            <p className="text-neutral-600 text-lg dark:text-neutral-300 md:w-full w-[300px] md:ml-0 ml-[3rem] md:whitespace-nowrap ">
              Here are some of the technologies and skills I excel in:
            </p>
            <div className="md:ml-[10rem] bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent h-[2px] md:w-[35rem]" />
            <SkillsSection />

            <FlipWordsDemo />
          </div>
        </div>
      </section>

      <hr
        className="h-[1px] my-[6rem] bg-gray-300 border-0 dark:bg-gray-700 w-[60%] mx-auto"
        id="projects"
      />

      <section className="w-full">
        <div className="container px-6 mx-auto">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="max-w-md mx-auto">
              <h2 className="text-4xl tracking-tight font-poppins font-semibold opacity-90">
                Check out my latest work
              </h2>
              <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[2px] w-full mb-16" />
            </div>
          </div>
          <div className="grid grid-cols-1 gap-20 md:grid-cols-2 max-w-[800px] mx-auto">
            {projects.map((project, id) => (
              <ProjectCard
                key={project.title}
                title={project.title}
                description={project.description}
                dates={project.dates}
                tags={project.technologies}
                image={project.image}
                links={project.links}
              />
            ))}
          </div>
        </div>
      </section>

      <hr className="h-px my-[6rem] bg-gray-300 border-0 dark:bg-gray-700 w-[60%] mx-auto" />
      <section className="w-full " id="contact">
        <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
          <div className="space-y-5">
            <h2 className="text-3xl tracking-tight font-poppins font-semibold opacity-90 md:text-4xl/tight">
              Get in Touch
            </h2>
            <p className="text-neutral-600 text-lg dark:text-neutral-300 w-full whitespace-nowrap font-semibold">
              Let&apos;s build something together!
            </p>
            <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent h-[2px] w-[24rem] mb-[4rem]" />

            <div className="ml-[2rem] flex items-center space-x-2 p-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-100 dark:bg-gray-800 w-[325px]">
              <IoMail className="h-6 w-6 text-gray-600 dark:text-gray-400" />
              <input
                type="text"
                value={email}
                readOnly
                className="bg-transparent w-[16rem] border-none text-gray-600 dark:text-gray-400 focus:outline-none"
              />
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation(); // Prevent triggering the mailto link
                  copyToClipboard();
                }}
                className="p-1 rounded bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-300"
              >
                <FaRegCopy className="h-4 w-4 text-gray-600 dark:text-gray-400" />
              </button>
            </div>

            <div className="ml-[2rem] mt-5 flex items-center space-x-4 text-md">
              <a
                href="https://github.com/RishitaGangwal"
                className="flex items-center space-x-2 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg p-2 transition-colors duration-300"
              >
                <span>GitHub</span>
                <GoArrowUpRight className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/rishita-gangwal/"
                className="flex items-center space-x-2 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg p-2 transition-colors duration-300"
              >
                <span>LinkedIn</span>
                <GoArrowUpRight className="h-5 w-5" />
              </a>
              <a
                href="https://x.com/Rishittaa"
                className="flex items-center space-x-2 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg p-2 transition-colors duration-300"
              >
                <span>Twitter</span>
                <GoArrowUpRight className="h-5 w-5" />
              </a>
            </div>
            {/* <SignupFormDemo/> */}
          </div>
          <hr className="h-px my-2 bg-gray-300 border-0 dark:bg-gray-700 w-[100%] mx-auto" />
          <h2 className="mb-5 text-sm tracking-normal font-semibold">
            © 2024 Rishita Gangwal
          </h2>
        </div>
      </section>
    </main>
  );
}
