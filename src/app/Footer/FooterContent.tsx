"use client";
import { useState } from "react";

const FooterContent = () => {
    const [Footer_Nav, Setfooter] = useState(["support", "policy", "terms & conditions"])
    let result = Footer_Nav.map((list, index) =>(
        <p key={index} className="capitalize font-bold md:text-[14px] text-[6px] text-white">{list}</p>
    ))
    return (  
        <div className="flex  justify-center w-[50%] space-x-4 items-center">
            {result}
        </div>
    );
}
 
export default FooterContent;