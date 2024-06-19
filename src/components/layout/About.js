'use client'

import ReactCardFlip from "react-card-flip";
import { SectionHeaders } from "./Hero";
import { useState } from "react";

import { FaCirclePlus } from "react-icons/fa6";
import { IoIosCloseCircle } from "react-icons/io";

export default function About() {

    const [isFlipped1, setIsFlipped1] = useState(false);
    const [isFlipped2, setIsFlipped2] = useState(false);

    function flipCard1() {
        setIsFlipped1(!isFlipped1);
    }
    function flipCard2() {
        setIsFlipped2(!isFlipped2);
    }

    return (
        <>
            <section id="about" className=" z-50 flex flex-col items-center justify-center h-full relative overflow-hidden pt-[35px]">

                <SectionHeaders
                    subHeader={'Overview of academic qualifications and degrees earned'}
                    mainHeader={'About Me'} />

                <div className="flex flex-col  justify-around flex-wrap items-center max-w-[900px] mt-2">
                    <p className="text-gray-300 text-center">
                        I am currently a 2nd year student studying at NSBM in pursuit of the BSc (Hons) Computer Security degree awarded by Plymouth University.
                        <br />
                        <br />
                        But I have a burning desire to develop web applications and build computer applications.
                        So, I study both computer security and network side and web and computer application development.
                        Thus, I am very concerned about the security of the data in the applications I make.
                    </p>
                </div>

                {/* <div className="flex flex-col sm:flex-row items-center justify-center gap-5 sm:gap-10">
                    <div className="flex justify-center items-center w-full sm:w-auto">
                        <ReactCardFlip flipDirection="vertical" isFlipped={isFlipped1}>
                            <div
                                className="card bg-gray-600 hover:border-hover-border-color border-4 border-gray-600 rounded-[25px] flex items-center justify-between p-4 sm:p-5"
                                onClick={flipCard1}
                            >
                                <h1 className="text-lg sm:text-2xl text-white">
                                    Academic Qualifications
                                </h1>
                                <FaCirclePlus className="text-lg sm:text-2xl" />
                            </div>

                            <div
                                className="card bg-white text-black rounded-[25px] flex items-center justify-between p-4 sm:p-5"
                                onClick={flipCard1}
                            >
                                <div className="text-left mx-auto max-w-md">
                                    <h3 className="text-sm sm:text-base">2019 - 2022</h3>
                                    <h2 className="text-lg sm:text-xl">Physical Sciences (Advanced Level)</h2>
                                    <h3 className="text-base sm:text-lg">CH/Senanayake Central College</h3>
                                </div>
                                <div>
                                    <IoIosCloseCircle className="text-lg sm:text-2xl" />
                                </div>
                            </div>
                        </ReactCardFlip>
                    </div>

                    <div className="flex justify-center items-center w-full sm:w-28">
                        <ReactCardFlip flipDirection="vertical" isFlipped={isFlipped2}>
                            <div
                                className="card bg-gray-600 hover:border-hover-border-color border-4 border-gray-600 rounded-[25px] flex items-center justify-between p-4 sm:p-5"
                                onClick={flipCard2}
                            >
                                <h1 className="text-lg sm:text-2xl text-white">
                                    Degrees Earned
                                </h1>
                                <FaCirclePlus className="text-lg sm:text-2xl" />
                            </div>

                            <div
                                className="card bg-white text-black rounded-[25px] flex items-center justify-between p-48 sm:p-5"
                                onClick={flipCard2}
                            >
                                <div className="text-left mx-auto max-w-md">
                                    <h3 className="text-sm sm:text-base">2023 - Present</h3>
                                    <h2 className="text-lg sm:text-xl">BSc (hons) Computer Security</h2>
                                    <h3 className="text-base sm:text-lg">University of Plymouth - United Kingdom</h3>
                                </div>
                                <div>
                                    <IoIosCloseCircle className="text-lg sm:text-2xl" />
                                </div>
                            </div>
                        </ReactCardFlip>
                    </div>
                </div> */}


            </section>
        </>
    );
}


