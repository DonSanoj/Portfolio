import { FaXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

import { IoMoonOutline } from "react-icons/io5";
import { LuSun } from "react-icons/lu";

import Link from "next/link";

export default function Footer() {
    return (
        <footer className=" border-t border-gray-600 p-[22px] sm:p-8 text-center text-gray-400 mt-16 flex flex-col sm:flex-row items-center justify-between bg-black">

            <div className=" text-xl flex gap-4 mb-4 sm:mb-0">
                <Link className=" hover:text-white" href={'https://twitter.com/Sanoj1128'}><FaXTwitter /></Link>
                <Link className=" hover:text-white" href={'https://github.com/DonSanoj'}><FaGithub /></Link>
                <Link className=" hover:text-white" href={'https://www.linkedin.com/in/sanoj-aminda/'}><FaLinkedin /></Link>
            </div>

            <div className="mb-4 sm:mb-0">
                &copy; 2024 All rights reserved
            </div>

            <div className=" text-xl sm:flex gap-4 cursor-pointer hidden ">
                <IoMoonOutline className=" hover:text-white" />
                <LuSun className=" hover:text-white" />
            </div>

        </footer>
    );
}