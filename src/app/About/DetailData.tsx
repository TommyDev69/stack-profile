"use client";

import Image from "next/image";
import Brandlogo from '../Image/ceo.png'
import { useState, useEffect } from "react";

interface Item {
    id: number;
    roles: string;
    data: string;
}

interface DetailDataProps {
    result: Item[];
    title: string;
}

const DetailData: React.FC<DetailDataProps> = ({ result, title }) => {
    // State to track the current index of the carousel
    const [currentIndex, setCurrentIndex] = useState(0);

    // Function to move to the next item
    const goToNext = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === result.length - 1 ? 0 : prevIndex + 1
        );
    };

    // Automatically swipe every 3 seconds
    useEffect(() => {
        const intervalId = setInterval(goToNext, 3000); // 3000ms = 3 seconds

        // Cleanup the interval when the component unmounts
        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className=" mx-auto w-[90%] container bg-bqlack my-16  flex flex-col md:flex-row">
            <div className="w-full md:w-[70%]  bg-blueBlack border-l-white border-l-2 shadow-inner shadow-white rounded-l-3xl">

                <h1 className="uppercase md:py-6 py-7 text-4xl md:textc-5xl text-center font-bold text-white">
                    meet the CEO
                </h1>

                {/* Carousel Content */}
                <div className="border-2 p-6  w-[80%] mx-auto shadow-2xl  inset-5 shadow-white py-2">
                    <p className=" text-2xl md:text-2xl font-bold text-left  text-yellow-400 ">{result[currentIndex].roles}</p>
                    <p className="text-white mt-4 text-[10px] md:text-[14px]">{result[currentIndex].data}</p>
                    
                </div>
                {/* Optional: Show the index and total count of items */}
                <div className="text-white  text-center font-bold my-4 pt-18">
                    <p>
                        {currentIndex + 1} of {result.length}
                    </p>
                </div>
            </div>

            <div className="w-full md:w-[30%] mt-14 md:mt-0  border-2 md:bg-white rounded-r-3xl relateive ">
                <Image src={Brandlogo} alt="ceo" className="md:w-full w-[60%]" />
                <div className="w-full md:w-[25%]  bg-blueBlack absolute flex flex-col items-center  md:bottom-14 md:py-2 py-0 ">
                    <h1 className="bgc-white  font-bold text-white text-2xl md:text-xl">{title}</h1>
                    <p className=" font-bold text-yellow-400 text-xl md:text-xl">A.K.A (LINUX69)</p>
                    <p className="  font-bold text-white text-lg">CEO</p>
                </div>
            </div>


        </div>
    );
};

export default DetailData;
