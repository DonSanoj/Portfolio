"use client";

import Image from "next/image";
import Link from "next/link";

import { TypeAnimation } from 'react-type-animation';

import React, { useState } from 'react';

import { FiDownload } from "react-icons/fi";
import { FaArrowCircleRight } from "react-icons/fa";

export function SectionHeaders({ subHeader, mainHeader }) {
    return (
        <>
            <h3 className=" uppercase text-gray-600 font-semibold leading-4 mb-3">
                {subHeader}
            </h3>
            <h2 className=" text-primary font-sm text-3xl mb-5">
                {mainHeader}
            </h2>
        </>
    );
}

export function DownloadButton() {
    const cvFileUrl = '/Sanoj.pdf';

    return (
        <a href={cvFileUrl} download="Sanoj-cv.pdf">
            Download CV
        </a>
    );
};

export default function Hero() {

    const hello = "Hello, I'm";

    return (

        <>
            <section id="hero" className="hero mt-4 max-w-6xl mx-auto p-4 border-gray-600 mb-0 sm:mb-8 scroll-smooth">

                <div className=" my-40 ml-8 sm:ml-0">

                    <div>
                        <h1 className=" text-3xl sm:text-[20px] text-gray-500">
                            {hello}
                        </h1>

                        <h1 className=" text-white text-6xl -mx-1 mt-4 sm:mt-0">
                            Sanoj Aminda
                        </h1>

                        <p className=" mt-4 my-10 text-gray-400 text-[26px] sm:text-2xl">
                            {""}
                            <TypeAnimation
                                sequence={[
                                    'Full Stack Developer',
                                    1000,
                                    'Application Developer',
                                    1000,
                                    'Programmer',
                                    1000,
                                ]}
                                wrapper="span"
                                speed={50}
                                style={{ display: 'inline-block' }}
                                repeat={Infinity}
                            />
                        </p>
                    </div>

                    <div className=" flex flex-col sm:flex-row gap-4 my-10 -mx-4 sm:mt-0 mt-[-10px]">
                        <button className=" bg-primary text-white px-4 py-2 rounded-full gap-2 flex uppercase bg-gray-600 hover:bg-blue-500">
                            <DownloadButton /> <FiDownload className=" size-5" />
                        </button>
                        <Link href={''} className=" flex gap-2 px-4 py-2 rounded-full 
                                                    text-gray-500 font-semibold hover:bg-blue-500 uppercase hover:text-white">
                            More Info <FaArrowCircleRight className=" size-6" />
                        </Link>
                    </div>
                </div>

                <div className=" p-3 sm:p-0 block sm:flex relative object-contain mt-16 ml-48">
                    <div className="grid-background">
                        <Image src={'/user.jpg'} alt={'Sanoj'} width={500} height={500} />
                    </div>
                </div>

            </section>

        </>
    );
}