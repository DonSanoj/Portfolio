'use client'

import Link from "next/link";
import { SectionHeaders } from "./Hero";

import { FaSquareWhatsapp } from "react-icons/fa6";
import { BackgroundGradient } from "../ui/background-gradient";
import React, { useState } from "react";

export default function Contact() {

    const [result, setResult] = useState("");
    const [resultSuccess, setResultSuccess] = useState(null);

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending...");
        const formData = new FormData(event.target);

        formData.append("access_key", "f923605a-8d51-4cf3-b8d2-bc9c2131ccc2");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            setResult("Email send successfully!");
            setResultSuccess(true);
            event.target.reset();
        } else {
            console.log("Error", data);
            setResultSuccess(false);
            setResult(data.message);
        }
    };

    return (
        <>

            <section id="contact" className=" mt-0 max-w-6xl mx-auto p-4 text-center mb-3 sm:mb-3 scroll-smooth z-10">

                <SectionHeaders
                    subHeader={'Reach Out for Collaboration and Inquiries'}
                    mainHeader={'Contact Me'} />

                <div className=" mt-8">
                    <BackgroundGradient className="h-40 w-full sm:w-96 rounded-[22px] p-4 sm:p-4 bg-white dark:bg-zinc-900">
                        <div className="flex flex-col">
                            <p className="text-base sm:text-lg text-gray-400 mt-4 mb-2">
                                Drop your message and let&apos;s discuss.
                            </p>
                        </div>
                        <div className="mt-3 w-full">
                            <Link
                                href="https://wa.me/+94760536392"
                                className=" hover:bg-gradient-to-r from-purple-500 to-orange-400 rounded-full p-2 px-4 flex flex-row items-center justify-center text-xs font-semibold text-white dark:bg-zinc-800 hover:bg-opacity-70"
                            >
                                <span className="flex items-center text-lg">
                                    <FaSquareWhatsapp className="mr-1 text-[#25D366] size-7" />
                                    Chat on WhatsApp
                                </span>
                            </Link>
                        </div>

                    </BackgroundGradient>
                </div>

                <div className=" w-full">
                    <BackgroundGradient className="h-96 w-full mt-5 sm:w-96 rounded-[22px] p-4 sm:p-4 bg-white dark:bg-zinc-900">
                        <div className="flex flex-col">
                            <p className="text-base sm:text-lg text-gray-400 mt-4 mb-2">
                                Drop your message via Email.
                            </p>
                        </div>
                        <div className="mt-3 w-full p-3">

                            <span
                                className={`text-lg mb-2 ${resultSuccess === true ? 'text-green-500' : resultSuccess === false ? 'text-red-500' : 'text-gray-500'}`}>
                                {result}
                            </span>
                            <form onSubmit={onSubmit}>
                                <input
                                    type="text"
                                    name="name"
                                    required
                                    placeholder="Name"
                                    className=" mt-4 mb-3 text-white dark:bg-zinc-800 rounded-xl border-none p-2 w-full"
                                />

                                <input
                                    type="email"
                                    name="email"
                                    required
                                    placeholder="Email"
                                    className=" mb-3 text-white dark:bg-zinc-800 rounded-xl border-none p-2 w-full"
                                />

                                <textarea
                                    name="message"
                                    required
                                    placeholder="Type Message..."
                                    className=" h-12 max-h-16 overflow-x-hidden mb-3 text-white dark:bg-zinc-800 rounded-xl border-none p-2 w-full"
                                >
                                </textarea>

                                <button
                                    type="submit"
                                    className=" hover:bg-gradient-to-r from-purple-500 to-orange-400 text-white rounded-full text-semibold px-8 py-2 w-56 dark:bg-zinc-800 op"
                                >
                                    Send Email
                                </button>

                            </form>
                        </div>

                    </BackgroundGradient>
                </div>

            </section>

        </>
    );
}