import Link from "next/link";
import { SectionHeaders } from "./Hero";

import { FaSquareWhatsapp } from "react-icons/fa6";

export default function Contact() {
    return (
        <>

            <section id="contact" className=" mt-4 max-w-6xl mx-auto p-4 text-center mb-16 scroll-smooth">

                <SectionHeaders
                    subHeader={'Reach Out for Collaboration and Inquiries'}
                    mainHeader={'Contact Me'} />

                <div className=" flex flex-col sm:flex-row gap-4 my-10 -mx-4 sm:mt-28 mt-[-10px] items-center justify-center">
                    <a
                        href={'https://wa.me/+94760536392'}
                        className="bg-gray-600 hover:bg-blue-500 text-white px-6 sm:px-4 py-2 gap-2 rounded-full flex uppercase text-center"
                    >
                        Chat with <FaSquareWhatsapp className="size-6 sm:size-6 ml-8 sm:ml-1 text-[#25d366]" />
                    </a>
                </div>

            </section>

        </>
    );
}