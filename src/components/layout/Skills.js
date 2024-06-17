"use client";

// Programming languages
import { DiJsBadge } from "react-icons/di";
import { SiTypescript } from "react-icons/si";
import { FaPython } from "react-icons/fa";
import { SiDart } from "react-icons/si";

// Frontend Development
import { FaReact } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";
import { DiHtml5 } from "react-icons/di";
import { DiBootstrap } from "react-icons/di";
import { DiCss3 } from "react-icons/di";
import { SiTailwindcss } from "react-icons/si";
import { DiSass } from "react-icons/di";

// Backend Development
import { SiPhp } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa6";

// Mobile App Development
import { RiFlutterFill } from "react-icons/ri";

// Database
import { SiMongodb } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";

// Other
import { DiLinux } from "react-icons/di";
import { SiKalilinux } from "react-icons/si";
import { DiGit } from "react-icons/di";

import { SectionHeaders } from "./Hero";
import { BentoGrid, BentoGridItem } from "../ui/bento-grid";

import { cn } from "@/utils/cn";
import React from "react";
import Link from "next/link";

export default function Skills() {
    return (
        <>
            <section id="skills" className=" mt-0 sm:mt-4 max-w-6xl mx-auto p-4 text-center mb-8 scroll-smooth">

                <SectionHeaders
                    subHeader={'Explore the tools and technologies that shape my professional toolkit'}
                    mainHeader={'Expertise & Skills'} />

                <div className=" mt-12 overflow-x-auto">
                    <BentoGrid className="max-w-4xl mx-auto md:auto-rows-[20rem]">
                        {programmingLang.map((item, i) => (
                            <BentoGridItem
                                key={i}
                                title={item.title}
                                description={item.description}
                                header={item.header}
                                className={item.className}
                                icon={item.icon}
                            />
                        ))}
                    </BentoGrid>
                </div>

                <div className=" mt-12 overflow-x-auto">
                    <BentoGrid className="max-w-4xl mx-auto md:auto-rows-[20rem]">
                        {frontendDev.map((item, i) => (
                            <BentoGridItem
                                key={i}
                                title={item.title}
                                description={item.description}
                                header={item.header}
                                className={item.className}
                                icon={item.icon}
                            />
                        ))}
                    </BentoGrid>
                </div>

                <div className=" mt-12 overflow-x-auto">
                    <BentoGrid className="max-w-4xl mx-auto md:auto-rows-[20rem]">
                        {backendDev.map((item, i) => (
                            <BentoGridItem
                                key={i}
                                title={item.title}
                                description={item.description}
                                header={item.header}
                                className={item.className}
                                icon={item.icon}
                            />
                        ))}
                    </BentoGrid>
                </div>

                <div className=" mt-12 overflow-x-auto">
                    <BentoGrid className="max-w-4xl mx-auto md:auto-rows-[20rem]">
                        {appDev.map((item, i) => (
                            <BentoGridItem
                                key={i}
                                title={item.title}
                                description={item.description}
                                header={item.header}
                                className={item.className}
                                icon={item.icon}
                            />
                        ))}
                    </BentoGrid>
                </div>

                <div className=" mt-12 overflow-x-auto">
                    <BentoGrid className="max-w-4xl mx-auto md:auto-rows-[20rem]">
                        {database.map((item, i) => (
                            <BentoGridItem
                                key={i}
                                title={item.title}
                                description={item.description}
                                header={item.header}
                                className={item.className}
                                icon={item.icon}
                            />
                        ))}
                    </BentoGrid>
                </div>

                <div className=" mt-12 overflow-x-auto" id="down">
                    <BentoGrid className="max-w-4xl mx-auto md:auto-rows-[20rem]">
                        {other.map((item, i) => (
                            <BentoGridItem
                                key={i}
                                title={item.title}
                                description={item.description}
                                header={item.header}
                                className={item.className}
                                icon={item.icon}
                            />
                        ))}
                    </BentoGrid>
                </div>

            </section>
        </>
    );
}

const programmingLang = [
    {
        title: "Programming Languages",
        className: "md:col-span-1 justify-center items-center text-3xl",
    },
    {
        title: "JavaScript",
        header: <DiJsBadge className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl text-[#F0DB4F]" />,
        className: "text-xl"
    },
    {
        title: "TypeScript",
        header: <SiTypescript className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl text-[#007acc]" />,
        className: "text-xl"
    },
    {
        title: "Python",
        header: <FaPython className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl text-[#4584b6]" />,
        className: "text-xl"
    },
    {
        title: "Dart",
        header: <SiDart className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl text-[#0075BA]" />,
        className: "text-xl"
    },
    {},
];

const frontendDev = [
    {
        title: "Frontend Development",
        className: "md:col-span-1 justify-center items-center text-3xl",
    },
    {
        title: "React",
        header: <FaReact className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl text-[#61DBFB]" />,
        className: "text-xl"
    },
    {
        title: "Next.js",
        header: <SiNextdotjs className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl text-[#ffffff]" />,
        className: "text-xl"
    },
    {
        title: "HTML",
        header: <DiHtml5 className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl text-[#f06529]" />,
        className: "text-xl"
    },
    {
        title: "Css",
        header: <DiCss3 className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl text-[#2965f1]" />,
        className: "text-xl"
    },
    {
        title: "Sass",
        header: <DiSass className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl text-[#a246b4]" />,
        className: "text-xl"
    },
    {
        title: "Tailwind Css",
        header: <SiTailwindcss className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl text-[#3490dc]" />,
        className: "text-xl"
    },
    {
        title: "Bootstrap",
        header: <DiBootstrap className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl text-[#563D7C]" />,
        className: "text-xl"
    },
    {},
];

const backendDev = [
    {
        title: "Backend Development",
        className: "md:col-span-1 justify-center items-center text-3xl",
    },
    {
        title: "Php",
        header: <SiPhp className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl text-[#474A8A]" />,
        className: "text-xl"
    },
    {
        title: "Node.js",
        header: <FaNodeJs className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl text-[#3c873a]" />,
        className: "text-xl"
    },
];

const appDev = [
    {
        title: "Application Development",
        className: "md:col-span-1 justify-center items-center text-3xl",
    },
    {
        title: "Flutter",
        header: <RiFlutterFill className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl text-[#1fbcfd]" />,
        className: "text-xl"
    },
    {},
];

const database = [
    {
        title: "Database",
        className: "md:col-span-1 justify-center items-center text-3xl",
    },
    {
        title: "MySQL",
        header: <SiMysql className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl text-[#00758F]" />,
        className: "text-xl"
    },
    {
        title: "PostgreSQL",
        header: <BiLogoPostgresql className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl text-[#456a90]" />,
        className: "text-xl"
    },
    {
        title: "MongoDB",
        header: <SiMongodb className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl text-[#00ED64]" />,
        className: "text-xl"
    },
    {},
];

const other = [
    {
        title: "Others",
        className: "md:col-span-1 justify-center items-center text-3xl",
    },
    {
        title: "Git",
        header: <DiGit className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl text-[#F1502F]" />,
        className: "text-xl"
    },
    {
        title: "Linux",
        header: <DiLinux className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl text-[#FFCC33]" />,
        className: "text-xl"
    },
    {
        title: "Kali Linux",
        header: <SiKalilinux className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl text-[#ffffff]" />,
        className: "text-xl"
    },
    {},
];