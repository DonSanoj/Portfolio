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
            <h3 className=" text-transparent text-center bg-clip-text bg-gradient-to-r from-purple-500 to-orange-400 text-lg font-semibold leading-4 mb-3">
                {subHeader}
            </h3>
            <h2 className=" text-primary font-sm text-3xl mb-5 text-center uppercase">
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
    return (

        <>
            <div className="flex flex-col items-center justify-center px-20 mt-[80px] z-[20] ">

                <div className="flex flex-col justify-center text-center">

                    <div className="justify-center flex">
                        <Image src={'/user.jpg'} alt={'Sanoj'} width={260} height={260} />
                    </div>

                    <h1 className=" flex flex-col gap-6 mt-10 cursor-pointer animate-bounce tracking-tighter text-7xl font-semibold text-white max-w-[600px] w-auto h-auto">
                        Sanoj Aminda.
                    </h1>

                    <div className="flex justify-center">
                        <p className="text-3xl font-medium tracking-tighter  text-gray-300 max-w-[600px]">
                            I do Code for{" "}
                            <span className="text-transparent font-semibold  bg-clip-text bg-gradient-to-r from-purple-500 to-orange-400">
                                FUN!
                            </span> 🚀
                        </p>
                    </div>

                    <div className="text-md mt-3 flex justify-center">
                        <button className=" z-[1] bg-primary text-white px-4 py-2 rounded-full gap-2 flex uppercase bg-gray-700 backdrop-blur-lg hover:bg-gradient-to-r from-purple-500 to-orange-400">
                            <DownloadButton /> <FiDownload className=" size-5" />
                        </button>
                    </div>

                </div>
            </div>
        </>
    );
}