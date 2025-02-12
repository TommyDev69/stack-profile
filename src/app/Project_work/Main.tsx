"use client"; 

import { useState } from "react";
import Project_One from "./Project_One";
import Project_Two from "./Project_Two";
import Project_Three from "./Project_Three";

const Main = () => {
    const heading = "industrial & health sectors";
    const heading_2 = "ecommerce & business sectors";
    const heading_3 = 'education & learning sectors';

    const [Project, setProject] = useState([
        { id: 1, image: require( "../Image/work_2.avif")},
        { id: 2, image: require("../Image/work_1.png") },
        { id: 3, image: require("../Image/work_3.avif")},
        { id: 4, image: require("../Image/work_5.jpg" ) },
        { id: 5, image: require("../Image/work_4.png" )},
        { id: 6, image: require("../Image/work_6.jpg" ), paddingTop:'45%'},
        { id: 7, image: require("../Image/work_7.jpg" )},
        { id: 8, image: require("../Image/work_9.jpg" ),  paddingTop:'5%' },
        { id: 9, image: require("../Image/work_8.png" )},
    ])

    let item_1 = Project.filter((itemize)=> (itemize.id >=1 && itemize.id <=3 ))
    let item_2 = Project.filter((item) =>( item.id >= 4 && item.id <= 6))
    let item_3 = Project.filter((item_3) =>(item_3.id >=7 && item_3.id <=9))

  
    return (  
        <div className="md:pl-0 phl-10 mt-32">
            <h1 className="text-white text-center text-3xl md:text-[45px] pb-14">
                OUR AWESOME STRENGTH PORTFOLIO
            </h1>
            <Project_One Items={item_1} title={heading} />
            <Project_Two Ecomm_Sector={item_2} Sec_title={heading_2} />
            <Project_Three Edu_Sector={item_3} Third_title={heading_3} />
        </div>
    );
}
 
export default Main;