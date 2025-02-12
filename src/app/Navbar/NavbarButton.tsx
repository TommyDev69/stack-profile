"use client";

import React, { useState } from "react";

// Your component code here


const NavbarButton = () => {
    const [Info, setInfo] = useState("Info")
    return ( 
        <a href="" className="hidden md:block py-2 px-0 md:px-12 rounded-full border-2 text-[24px] text-white ml-[30px]">{Info}</a>
     );
}
 
export default NavbarButton;