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
            <section id="about" className=" mt-4 max-w-6xl mx-auto p-4 text-center mb-8 scroll-smooth">

                <SectionHeaders
                    subHeader={'Overview of academic qualifications and degrees earned'}
                    mainHeader={'About'} />

                <div className=" flex flex-col sm:flex-row items-center justify-center gap-10">
                    <div className="flex justify-center items-center">
                        <ReactCardFlip
                            flipDirection="vertical"
                            isFlipped={isFlipped1}
                        >
                            <div
                                className="card bg-gray-600 hover:border-hover-border-color border-4 
                                            border-gray-600 rounded-[25px] flex items-center justify-between p-5"
                                onClick={flipCard1}
                            >
                                <h1 className="text-2xl text-white">
                                    Academic Qualifications
                                </h1>
                                <FaCirclePlus className=" size-6" />
                            </div>

                            <div
                                className="card bg-white text-black rounded-[25px] flex items-center justify-between p-5"
                                onClick={flipCard1}
                            >
                                <div className="text-left mx-auto max-w-md">
                                    <h3 className="text-base">2019 - 2022</h3>
                                    <h2 className="text-xl">Physical Sciences(Advanced Level)</h2>
                                    <h3 className="text-lg">CH/Senanayake Central College</h3>
                                </div>
                                <div>
                                    <IoIosCloseCircle className=" size-6" />
                                </div>
                            </div>
                        </ReactCardFlip>
                    </div>

                    <div className="flex justify-center items-center">
                        <ReactCardFlip
                            flipDirection="vertical"
                            isFlipped={isFlipped2}
                        >
                            <div
                                className="card bg-gray-600 hover:border-hover-border-color border-4 
                                            border-gray-600 rounded-[25px] flex items-center justify-between p-5"
                                onClick={flipCard2}
                            >
                                <h1 className="text-2xl text-white">
                                    Degrees Earned
                                </h1>
                                <FaCirclePlus className=" size-6" />
                            </div>

                            <div
                                className="card bg-white text-black rounded-[25px] flex items-center justify-between p-5"
                                onClick={flipCard2}
                            >
                                <div className="text-left mx-auto max-w-md">
                                    <h3 className="text-base">2023 - Present</h3>
                                    <h2 className="text-xl">BSc (hons) Computer Security</h2>
                                    <h3 className="text-lg">University of Plymouth - United Kingdom</h3>
                                </div>
                                <div>
                                    <IoIosCloseCircle className=" size-6" />
                                </div>
                            </div>
                        </ReactCardFlip>
                    </div>
                </div>

            </section>
        </>
    );
}


