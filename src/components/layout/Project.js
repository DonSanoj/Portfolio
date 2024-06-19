"use client";

import React from "react";
import { BackgroundGradient } from "../ui/background-gradient";
// import { IconAppWindow } from "@tabler/icons-react";
import Image from "next/image";

import { SectionHeaders } from "./Hero";
import Link from "next/link";

export default function Projects() {

    const subHeader = 'What I\'ve Been Working On';

    return (
        <>

            <section id="contact" className=" mt-0 max-w-6xl mx-auto p-4 text-center mb-6 scroll-smooth z-10">

                <SectionHeaders
                    subHeader={subHeader}
                    mainHeader={'Projects'} />

                <div className="flex sm:flex-row flex-col space-y-4 sm:space-y-0 sm:space-x-4 mt-3 sm:mt-4">
                    {row1.map((item) => (
                        <BackgroundGradient key={item.id} className="h-96 w-full sm:w-80 rounded-[22px] p-4 sm:p-4 bg-white dark:bg-zinc-900">
                            <div className="flex justify-center">
                                <Link href={item.projectLink} className="cursor-pointer">
                                    <Image
                                        src={item.imageSrc}
                                        alt={item.altText}
                                        height={300}
                                        width={300}
                                        className="object-contain rounded-lg"
                                    />
                                </Link>
                            </div>
                            <div className="flex flex-col">
                                <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
                                    {item.title}
                                </p>

                                <p className="text-sm text-neutral-600 dark:text-neutral-400 text-center">
                                    {item.description}
                                </p>
                            </div>
                            <div className="flex flex-wrap gap-2 mt-3">
                                {item.buttonText.map((buttonText, index) => (
                                    <button
                                        key={index}
                                        className="bg-slate-300 bg-opacity-30 rounded-full p-2 px-4 text-white flex items-center justify-center text-xs font-bold dark:bg-zinc-800"
                                    >
                                        <span>{buttonText}</span>
                                    </button>
                                ))}
                            </div>
                        </BackgroundGradient>
                    ))}
                </div>

            </section >

        </>
    );
}

const row1 = [
    {
        id: 1,
        projectLink: 'http://webxel.xyz/',
        imageSrc: '/webxel.png',
        altText: 'Webxel',
        title: 'WEBXEL',
        description: 'Through this website, users can make a request from the admins of the website for anything they want. Like website design, Mobile app Development...',
        buttonText: ['Php', 'HTML', 'CSS', 'JS', 'SQL'],
    },
    {
        id: 2,
        projectLink: 'https://vindi-craft.vercel.app/',
        imageSrc: '/vindi_craft.png',
        altText: 'Vindi Craft',
        title: 'Vindi Craft',
        description: 'This is a website that I made for my client. This website includes the information about the crafts',
        buttonText: ['Next.js'],
    },
    {
        id: 3,
        projectLink: 'https://github.com/DonSanoj/spend-smart',
        imageSrc: '/spend_smart.png',
        altText: 'Spend Smart',
        title: 'Spend Smart',
        description: 'Our group create this for a assignment in University. This is a windows application which users can manage their expenses',
        buttonText: ['.NET'],
    },
];