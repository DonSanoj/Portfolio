import Link from "next/link";

export default function Header() {
    return (
        <header className=" bg-black text-white shadow-md fixed z-[100] w-full 
                            container mx-auto p-4 px-8 flex items-center justify-between border-b border-gray-600">

            <Link className=" text-2xl cursor-pointer" href={'/'}>Don Sanoj</Link>

            <nav className=" flex items-center gap-10 cursor-pointer">
                <Link href={'/'}>Home</Link>
                <Link href={'/#about'}>About</Link>
                <Link href={'/#faq'}>FAQ</Link>
                <Link href={'/#contact'}>Contact</Link>
            </nav>

            <nav className=" flex gap-8 text-gray-500 font-semibold items-center">
                <Link
                    className=" bg-white text-black rounded-full px-8 py-2 hover:bg-[#eee]"
                    href={'/request'}>Project Request
                </Link>
            </nav>

        </header>
    );
}