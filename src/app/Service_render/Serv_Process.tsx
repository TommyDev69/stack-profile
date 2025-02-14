"use client";

import { useState } from "react";

import Serve_content from "./Serve_content";

const Serv_Process = () => {
  const [service, setService] = useState([
    {
      id: 1,
      Image: require("../Image/Icon (1).png"),
      heading: "Development",
      content: "Create a platform with the best and coolest quality from us.",
      paddingTop: '74px',
    },
    {
      id: 2,
      Image: require("../Image/Icon(6).png"),
      heading: "UI/UX Designer",
      content:
        "We provide UI/UX Design services, and of course with the best quality.",
    },
    {
      id: 3,
      Image: require("../Image/Icon (2).png"),
      heading: "Graphik Designer",
      content: "We provide Graphic Design services, with the best designers.",
    }
  ])
    return (
        <div className="md:pl-0 pdl-10 mt-32 ">
           
                <h2 className="text-white text-center text-2xl md:text-[40px] pb-8 capitalize">
                   The Service We Provide For You
                </h2>
            
       
           <Serve_content  Tool={service}/>
        </div>
    );
};

export default Serv_Process;
