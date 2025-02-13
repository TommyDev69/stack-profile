"use client";
import { useState } from "react";

const FooterContent = () => {
    const [Footer_Nav, Setfooter] = useState(["support", "privacy policy", "Terms and Conditions"])
    let result = Footer_Nav.map((list, index) =>(
        <p key={index} className="md:text-xl text-[8px] text-white">{list}</p>
    ))
    return (  
        <div className="flex w-[45w%] justify-center space-x-10 items-center">
            {result}
        </div>
    );
}
 
export default FooterContent;