"use client";

import React, { useState } from "react";
// import NavbarIcon from "./NavbarIcon";
// import ToggleBar from "./ToggleBar";

// Your component code here


const NavbarButton = () => {
    const [Info, setInfo] = useState("Info")
    return ( 
        <button className="  py-12 hidden md:block w bg-black ">
            <a href="" className=" md:blvock hiddven  rounded-2xl border-2 px-6  text-[24px] text-white ">{Info}</a>
            {/* <ToggleBar /> */}
        </button>
     );
}
 
export default NavbarButton;