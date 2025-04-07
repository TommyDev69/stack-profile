"use client";
import Link from 'next/link';

import NavbarButton from "./NavbarButton";

const Content = () => {
    return (
        <div className="w-full bg-yqellow-700 flex justify-between">
        <div className="flex flex-col w-full md:flex-row px-6 md:mx-auto container justify-center md:items-center">
            {/* Navigation Links */}
            <ul className="flex flex-col md:flex-row md:space-x-4 space-x-0 space-y-4 md:space-y-0 text-[20px] text-white capitalize justify-center md:items-center">
                <Link href="/" className="font-bold bg-blueBlack  hover:p-4 hover:border-2 border-2 p-4 rounded-3xl">home</Link>
                <Link href="/project_service" className="hover:p-4 hovwer:bg-wblueBlack hover:border-2  p-4 hover:rounded-3xl active:bg-blueBlack focus:bg-blueBlack focus:rounded-3xl focus:border-t-8 focus:border-r-4 focus:border-l-4">project</Link>
                <Link href="/services_page" className="hover:p-4 hover:border-2  p-4 hover:rounded-3xl active:bg-blueBlack focus:bg-blueBlack focus:rounded-3xl focus:border-t-8 focus:border-r-4 focus:border-l-4">service</Link>
                <Link href="/About"className="hover:p-4 hover:border-2  p-4 hover:rounded-3xl active:bg-blueBlack focus:bg-blueBlack focus:rounded-3xl focus:border-t-8  focus:border-r-4 focus:border-l-4 ">about</Link>
            </ul>

            {/* Register Button */}
            <p className="py-4 md:pl-4 md:py-x0 bxg-blue-800">
                <a href="" className="capitalize rounded-2xl  text-[20px] hover:p-4 hover:border-2  p-4 hover:rounded-3xl active:bg-blueBlack focus:bg-blueBlack focus:rounded-3xl focus:border-t-8 focus:border-r-4 focus:border-l-4 text-white">
                    register
                </a>
            </p>
        </div>

        {/* Navbar Button for mobile */}
        <NavbarButton />
        </div>

    );
};

export default Content;
