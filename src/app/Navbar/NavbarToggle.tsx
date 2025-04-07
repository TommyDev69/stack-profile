"use client"
import {FC} from "react"
interface myDropdownMenu{
    isOpenMenu: boolean
}
const NavbarToggle:FC<myDropdownMenu> = ({ isOpenMenu }) => {
    const content = ["home", "service", "our project", "about us"];
    
    return ( 
        <div
        className={`${
          isOpenMenu ? "block" : "hidden"
        } absolute w-[98.1%] left-0 right-0 top-full text-2xl py-10 mx-auto 
        flex flex-col items-startpy-8 px-6 text-white space-y-6 font-bold sm:self-center drop-shadow-md shadow-inner
         shadow-white transition-all duration-300 ease-in-out transform ${
          isOpenMenu ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
            {content.map((navCon, index) => (
                <a 
                    key={index}
                    href={`#${navCon.replace(/\s+/g, '-').toLowerCase()}`} 
                    className="capitalize hover:bg-green-400 w-screen hover:py-4 hover:px-4 transition-colors duration-300 "
                    aria-label={`Navigate to ${navCon}`}
                >
                    {navCon}
                </a>
            ))}
        </div>
    );
};

export default NavbarToggle;
