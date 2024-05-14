'use client'

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

import { FaChevronDown } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";

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
        <header className=" bg-black text-white shadow-md fixed z-[100] w-full 
                            container mx-auto p-4 px-8 flex items-center justify-between border-b border-gray-600">

            <Link className=" hidden md:flex text-2xl cursor-pointer" href={'/'}>Sanoj Aminda</Link>

            <Link className=" md:hidden flex text-2xl cursor-pointer" href={'/'}>S Aminda</Link>

            <nav className=" hidden md:flex items-center gap-10 cursor-pointer">
                <Link href={'/'} className="hover:text-blue-500 transition duration-200">Home</Link>
                <Link href={'/#skills'} className="hover:text-blue-500 transition duration-200">Skills</Link>
                <Link href={'/#about'} className="hover:text-blue-500 transition duration-200">About</Link>
                <Link href={'/#contact'} className="hover:text-blue-500 transition duration-200">Contact</Link>
            </nav>

            <nav className=" flex md:hidden gap-4 text-gray-500 font-semibold ml-24">
                <div className="relative" ref={dropdownRef}>
                    <div
                        className="lg:hidden bg-[#eee] text-black rounded-lg cursor-pointer p-2 hover:bg-blue-500 hover:text-white"
                        onClick={toggleDropdown}
                    >
                        <ArrowIcon width={50} height={50} className="size-6" />
                    </div>
                    {dropdownOpen && (
                        <div className="absolute top-full left-0 bg-white border border-gray-200 rounded-lg shadow-lg">
                            <nav className="flex flex-col gap-2 p-8 bg-[#2d2d2c] text-white rounded-lg shadow-lg border-none text-[18px]">
                                <Link href={'/'} className="hover:text-blue-500 transition duration-200">Home</Link>
                                <Link href={'/#skills'} className="hover:text-blue-500 transition duration-200">Skills</Link>
                                <Link href={'/#about'} className="hover:text-blue-500 transition duration-200">About</Link>
                                <Link href={'/#contact'} className="hover:text-blue-500 transition duration-200">Contact</Link>
                            </nav>
                        </div>
                    )}
                </div>
            </nav>

            <nav className=" hidden md:flex gap-8 text-gray-500 font-semibold items-center">
                <Link
                    className=" hover:bg-white hover:text-black bg-blue-500 text-white rounded-full px-8 py-2"
                    href={'https://github.com/DonSanoj'}>My GitHub Profile
                </Link>
            </nav>

            <nav className=" flex md:hidden gap-8 text-gray-500 font-semibold items-center">
                <Link
                    className=" hover:bg-white hover:text-black bg-blue-500 text-white rounded-full px-4 py-4"
                    href={'https://github.com/DonSanoj'}><FaGithub />
                </Link>
            </nav>

        </header>
    );
}