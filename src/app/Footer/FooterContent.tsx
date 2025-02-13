"use client";
import { useState } from "react";

const FooterContent = () => {
    const [Footer_Nav, Setfooter] = useState(["support", "privacy policy", "Terms and Conditions"])
    let result = Footer_Nav.map((list, index) =>(
        <p key={index} className="md:text-[18px] text-[8px] text-white">{list}</p>
    ))
    return (  
        <div className="flex  justify-center space-x-10 items-center">
            {result}
        </div>
    );
}
 
export default FooterContent;