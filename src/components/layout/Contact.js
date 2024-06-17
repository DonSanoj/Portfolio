import Link from "next/link";
import { SectionHeaders } from "./Hero";

import { FaSquareWhatsapp } from "react-icons/fa6";

export default function Contact() {
    return (
        <>

            <section id="contact" className=" mt-0 max-w-6xl mx-auto p-4 text-center mb-16 scroll-smooth z-10">

                <SectionHeaders
                    subHeader={'Reach Out for Collaboration and Inquiries'}
                    mainHeader={'Contact Me'} />

                <div className=" flex flex-col sm:flex-row gap-4 my-10 -mx-4 sm:mt-28 mt-[-10px] items-center justify-center">
                    <div className=" p-3 rounded-lg space-y-5 bg-slate-300 bg-opacity-15">
                        <h2 className=" text-xl text-gray-400">Want to hire me as a freelancer?</h2>
                        <h2 className=" text-lg">Drop your message and let&apos;s discuss about your project.</h2>
                        <a
                            href={'https://wa.me/+94760536392'}
                            className="w-[140px] bg-gray-600 hover:bg-blue-500 text-white px-6 sm:px-4 py-2 gap-2 rounded-full flex uppercase text-center"
                        >
                            Chat on <FaSquareWhatsapp className="size-6 sm:size-6 ml-8 sm:ml-1 text-[#25d366]" />
                        </a>
                    </div>
                </div>

            </section>

        </>
    );
}