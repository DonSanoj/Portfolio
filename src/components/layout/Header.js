'use client'

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

import { FaChevronDown } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";
import Image from "next/image";
import LikeButton from "./LikeButton";

export default function Header() {

    const [dropdownOpen, setDropdownOpen] = useState(false);
    const dropdownRef = useRef(null);

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setDropdownOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const ArrowIcon = dropdownOpen ? IoClose : FaChevronDown;

    return (
        <header className=" bg-transparent backdrop-blur-md text-white shadow-md fixed z-[100] w-full 
                            container mx-auto p-2 px-8 flex items-center justify-between">

            <Link className=" md:flex text-2xl cursor-pointer" href={'/'}>
                <Image src={'/SanojAminda.png'} width={55} height={55} className=" rounded-xl" />
            </Link>


            <nav className=" hidden md:flex gap-8 text-gray-500 font-semibold items-center">
                
                <LikeButton />

                <Link
                    className=" hover:text-[#e6e0e0] bg-gradient-to-r from-purple-500 to-orange-400 text-white rounded-full px-8 py-2"
                    href={'https://github.com/DonSanoj'}>My GitHub Profile
                </Link>
            </nav>

            <nav className=" flex md:hidden gap-8 text-gray-500 font-semibold items-center">
                <Link
                    className=" hover:text-black bg-gradient-to-r from-purple-500 to-orange-400 text-white rounded-full px-4 py-4"
                    href={'https://github.com/DonSanoj'}><FaGithub />
                </Link>
            </nav>

        </header>
    );
}