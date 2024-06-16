"use client";

// Programming languages
import { DiJsBadge } from "react-icons/di";
import { SiTypescript } from "react-icons/si";
import { SiPhp } from "react-icons/si";
import { FaPython } from "react-icons/fa";

// Frontend Development
import { FaReact } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";
import { DiHtml5 } from "react-icons/di";
import { DiBootstrap } from "react-icons/di";
import { DiCss3 } from "react-icons/di";
import { SiTailwindcss } from "react-icons/si";
import { DiSass } from "react-icons/di";

// Backend Development
import { FaNodeJs } from "react-icons/fa6";

// Mobile App Development
import { RiFlutterFill } from "react-icons/ri";
import { SiDart } from "react-icons/si";

// Database
import { SiMongodb } from "react-icons/si";
import { SiMysql } from "react-icons/si";

// Other
import { DiLinux } from "react-icons/di";
import { DiGit } from "react-icons/di";

import {
    Table,
    TableHeader,
    TableColumn,
    TableBody,
    TableRow,
    TableCell,
} from "@nextui-org/react";
import { SectionHeaders } from "./Hero";
import { useState } from "react";
import About from "./About";

export function ProgrammingLanguages() {

    const [languageTitle, setLanguageTitle] = useState('Programming Languages');

    const handleCellMouseEnter = (title) => {
        setLanguageTitle(title);
    };

    const handleCellMouseLeave = () => {
        setLanguageTitle('Programming Languages');
    };

    return (
        <div className="overflow-x-auto">
            <Table className="w-full" aria-label="Example static collection table">
                <TableHeader className="bg-gray-100">
                    <TableColumn className="px-6 py-16 text-center text-2xl font-medium 
                                        text-gray-200 tracking-wider border-[1px] border-gray-600">
                        {languageTitle}
                    </TableColumn>
                    <TableColumn className="px-6 py-16 text-center text-6xl font-medium 
                                        tracking-wider border-[1px] border-gray-600"
                        onMouseEnter={() => handleCellMouseEnter('JavaScript')}
                        onMouseLeave={handleCellMouseLeave}>
                        <DiJsBadge className="mx-auto text-[#F0DB4F]" />
                    </TableColumn>
                    <TableColumn className="px-6 py-16 text-center text-6xl font-medium 
                                        tracking-wider border-[1px] border-gray-600"
                        onMouseEnter={() => handleCellMouseEnter('TypeScript')}
                        onMouseLeave={handleCellMouseLeave}>
                        <SiTypescript className="mx-auto text-[#007acc]" />
                    </TableColumn>
                </TableHeader>
                <TableBody>
                    <TableRow key="1">
                        <TableCell className="px-6 py-16 w-1/3 whitespace-nowrap border-[1px] border-gray-600 text-center text-7xl"
                            onMouseEnter={() => handleCellMouseEnter('Php')}
                            onMouseLeave={handleCellMouseLeave}>
                            <SiPhp className="mx-auto text-[#777BB3]" />
                        </TableCell>
                        <TableCell className="px-6 py-16 w-1/3 whitespace-nowrap border-[1px] border-gray-600 text-center text-6xl"
                            onMouseEnter={() => handleCellMouseEnter('Python')}
                            onMouseLeave={handleCellMouseLeave}>
                            <FaPython className="mx-auto text-[#4584b6]" />
                        </TableCell>
                        <TableCell className="px-6 py-16 whitespace-nowrap border-[1px] w-1/3 border-gray-600 mx-auto text-center text-3xl">
                        </TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </div>
    );
}

export function FrontendDevelopment() {

    return (
        <div className="overflow-x-auto">
            <Table className="w-full" aria-label="Example static collection table">
                <TableHeader className="bg-gray-100">
                    <TableColumn className="px-6 py-16 text-center text-2xl font-medium 
                                        text-gray-200 tracking-wider border-[1px] border-gray-600">
                        Frontend <br /> Development
                    </TableColumn>
                    <TableColumn className="px-6 py-16 text-center text-6xl font-medium 
                                        tracking-wider border-[1px] border-gray-600">
                        <FaReact className="mx-auto text-[#61DBFB]" />
                    </TableColumn>
                    <TableColumn className="px-6 py-16 text-center text-6xl font-medium 
                                        tracking-wider border-[1px] border-gray-600">
                        <SiNextdotjs className="mx-auto text-[#ffffff]" />
                    </TableColumn>
                    <TableColumn className="px-6 py-16 text-center text-6xl font-medium 
                                        tracking-wider border-[1px] border-gray-600">
                        <DiHtml5 className="mx-auto text-[#f06529]" />
                    </TableColumn>
                </TableHeader>
                <TableBody>
                    <TableRow key="1">
                        <TableCell className="px-6 py-16 whitespace-nowrap border-[1px] border-gray-600 text-center text-7xl">
                            <DiCss3 className="mx-auto text-[#2965f1]" />
                        </TableCell>
                        <TableCell className="px-6 py-16 whitespace-nowrap border-[1px] border-gray-600 text-center text-6xl">
                            <DiSass className="mx-auto text-[#a246b4]" />
                        </TableCell>
                        <TableCell className="px-6 py-16 whitespace-nowrap border-[1px] border-gray-600 text-center text-6xl">
                            <SiTailwindcss className="mx-auto text-[#3490dc]" />
                        </TableCell>
                        <TableCell className="px-6 py-16 whitespace-nowrap border-[1px] border-gray-600 text-center text-6xl">
                            <DiBootstrap className="mx-auto text-[#563D7C]" />
                        </TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </div>
    );
}

export function BackendDevelopment() {
    return (
        <div className="overflow-x-auto">
            <Table className="w-full" aria-label="Example static collection table">
                <TableHeader className="bg-gray-100">
                    <TableColumn className="px-6 py-16 text-center text-2xl font-medium 
                                        text-gray-200 tracking-wider border-[1px] border-gray-600">
                        Backend <br /> Development
                    </TableColumn>
                    <TableColumn className="px-6 py-16 text-center text-6xl font-medium 
                                        tracking-wider border-[1px] border-gray-600">
                        <FaNodeJs className="mx-auto text-[#3c873a]" />
                    </TableColumn>
                </TableHeader>
                <TableBody>
                    <TableRow key="1">
                        <TableCell className="px-6 py-16 whitespace-nowrap border-gray-600 text-center text-7xl hidden">
                        </TableCell>
                        <TableCell className="px-6 py-16 whitespace-nowrap border-gray-600 text-center text-6xl hidden">
                        </TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </div>
    );
}

export function AppDevelopment() {
    return (
        <div className="overflow-x-auto">
            <Table className="w-full" aria-label="Example static collection table">
                <TableHeader className="bg-gray-100">
                    <TableColumn className="px-6 py-16 text-center text-2xl font-medium border-[1px]
                                        text-gray-200 tracking-wider border-gray-600">
                        Mobile App <br /> Development
                    </TableColumn>
                    <TableColumn className="px-6 py-16 text-center text-6xl font-medium border-[1px]
                                        tracking-wider border-gray-600">
                        <RiFlutterFill className="mx-auto text-[#1fbcfd]" />
                    </TableColumn>
                    <TableColumn className="px-6 py-16 text-center text-6xl font-medium border-[1px]
                                        tracking-wider border-gray-600">
                        <SiDart className="mx-auto text-[#0075BA]" />
                    </TableColumn>
                </TableHeader>
                <TableBody>
                    <TableRow key="1">
                        <TableCell className="px-6 py-16 whitespace-nowrap text-center 
                                            text-7xl border-[1px] border-gray-600 hidden">
                        </TableCell>
                        <TableCell className="px-6 py-16 whitespace-nowrap text-center 
                                            text-6xl border-[1px] border-gray-600 hidden">
                        </TableCell>
                        <TableCell className="px-6 py-16 whitespace-nowrap text-center 
                                            text-6xl border-[1px] border-gray-600 hidden">
                        </TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </div>
    );
}

export function Database() {

    const [languageTitle, setLanguageTitle] = useState('Database');

    const handleCellMouseEnter = (title) => {
        setLanguageTitle(title);
    };

    const handleCellMouseLeave = () => {
        setLanguageTitle('Database');
    };

    return (
        <div className="overflow-x-auto">
            <Table className="w-full" aria-label="Example static collection table">
                <TableHeader className="bg-gray-100">
                    <TableColumn className="px-6 py-16 w-1/3 text-center text-2xl font-medium border-[1px]
                                        text-gray-200 tracking-wider border-gray-600">
                        {languageTitle}
                    </TableColumn>
                    <TableColumn className="px-6 py-16 w-1/3 text-center text-7xl font-medium border-[1px]
                                        tracking-wider border-gray-600"
                        onMouseEnter={() => handleCellMouseEnter('MongoDB')}
                        onMouseLeave={handleCellMouseLeave}>
                        <SiMongodb className="mx-auto text-[#00ED64]" />
                    </TableColumn>
                    <TableColumn className="px-6 py-16 w-1/3 text-center text-7xl font-medium border-[1px]
                                        tracking-wider border-gray-600"
                        onMouseEnter={() => handleCellMouseEnter('MySQL')}
                        onMouseLeave={handleCellMouseLeave}>
                        <SiMysql className="mx-auto text-[#00758F]" />
                    </TableColumn>
                </TableHeader>
                <TableBody>
                    <TableRow key="1">
                        <TableCell className="px-6 py-16 whitespace-nowrap text-center 
                                            text-8xl border-[1px] border-gray-600 hidden">
                        </TableCell>
                        <TableCell className="px-6 py-16 whitespace-nowrap text-center 
                                            text-6xl border-[1px] border-gray-600 hidden">
                        </TableCell>
                        <TableCell className="px-6 py-16 whitespace-nowrap text-center 
                                            text-6xl border-[1px] border-gray-600 hidden">
                        </TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </div>
    );
}

export function Other() {

    const [languageTitle, setLanguageTitle] = useState('Other');

    const handleCellMouseEnter = (title) => {
        setLanguageTitle(title);
    };

    const handleCellMouseLeave = () => {
        setLanguageTitle('Other');
    };

    return (
        <div className="overflow-x-auto">
            <Table className="w-full" aria-label="Example static collection table">
                <TableHeader className="bg-gray-100">
                    <TableColumn className="px-6 py-16 w-1/3 text-center text-2xl font-medium border-[1px]
                                        text-gray-200 tracking-wider border-gray-600">
                        {languageTitle}
                    </TableColumn>
                    <TableColumn className="px-6 py-16 w-1/3 text-center text-7xl font-medium border-[1px]
                                        tracking-wider border-gray-600"
                        onMouseEnter={() => handleCellMouseEnter('Linux')}
                        onMouseLeave={handleCellMouseLeave}>
                        <DiLinux className="mx-auto text-[#FFCC33]" />
                    </TableColumn>
                    <TableColumn className="px-6 py-16 w-1/3 text-center text-7xl font-medium border-[1px]
                                        tracking-wider border-gray-600"
                        onMouseEnter={() => handleCellMouseEnter('Git')}
                        onMouseLeave={handleCellMouseLeave}>
                        <DiGit className="mx-auto text-[#F1502F]" />
                    </TableColumn>
                </TableHeader>
                <TableBody>
                    <TableRow key="1">
                        <TableCell className="px-6 py-16 whitespace-nowrap 
                                            text-center text-8xl border-[1px] border-gray-600 hidden">
                        </TableCell>
                        <TableCell className="px-6 py-16 whitespace-nowrap 
                                            text-center text-7xl border-[1px] border-gray-600 hidden">
                        </TableCell>
                        <TableCell className="px-6 py-16 whitespace-nowrap 
                                            text-center text-7xl border-[1px] border-gray-600 hidden">
                        </TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </div>
    );
}

export default function Skills() {
    return (
        <>
            <section id="skills" className=" mt-0 sm:mt-4 max-w-6xl mx-auto p-4 text-center mb-16 scroll-smooth">
                <SectionHeaders
                    subHeader={'Explore the tools and technologies that shape my professional toolkit'}
                    mainHeader={'Expertise & Skills'} />

                <div className=" mt-12 overflow-x-auto">
                    <ProgrammingLanguages />
                    <FrontendDevelopment />
                    <BackendDevelopment />
                    <AppDevelopment />
                    <Database />
                    <Other />
                </div>

            </section>

            <About />

        </>
    );
}