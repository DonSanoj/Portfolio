"use client";

import Image from "next/image";
import Link from "next/link";
import Right from "../icons/Right";

import { TypeAnimation } from 'react-type-animation';

import React, { useState } from 'react';
import Download from "../icons/Download";

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
    // Add logic here to generate or fetch the CV file URL
    const cvFileUrl = './sanoj.pdf';

    return (
        <a href={cvFileUrl} download="sanoj-cv.pdf">
            Download CV
        </a>
    );
};

export default function Hero() {
    return (
        <>
            <section id="hero" className="hero mt-4 max-w-6xl mx-auto p-4 border-gray-600 mb-16 scroll-smooth">

                <div className=" my-40">
                    <h1 className=" text-[20px] text-gray-500">
                        Hello, I'm <br />
                        <span className=" text-white text-6xl -mx-1">Don Sanoj</span>
                    </h1>
                    <p className=" mt-4 my-10 text-gray-500 text-2xl">
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
                    <div className=" flex gap-4 my-10 -mx-4">
                        <button className=" bg-primary text-white px-4 py-2 rounded-full gap-2 flex uppercase bg-gray-600">
                            <DownloadButton /> <Download />
                        </button>
                        <Link href={''} className=" flex gap-2 px-4 py-2 rounded-full 
                                                    text-gray-600 font-semibold hover:bg-gray-600 hover:text-white">
                            More Info <Right />
                        </Link>
                    </div>
                </div>

                <div className=" relative object-contain mt-16">
                    <div className="grid-background">
                        {/* <Grid /> */}
                        <Image src={'/user.jpg'} alt={'Sanoj'} layout={'fill'} objectFit={'contain'} />
                    </div>
                </div>

            </section>

        </>
    )
}
