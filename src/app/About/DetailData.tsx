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
        <div className="bg-blueBlack  h-screen mx-auto w-full   md:p-28 p-0 flex flex-col md:flex-row  justify-center">
            <div className="md:w-[70%] w-[80%]  md:mx-0 mx-auto  bg-blueBlack border-l-white border-l-2 shadow-inner shadow-white rounded-l-3xl">

                <h1 className="uppercase md:py-20 py-4 text-4xl md:text-6xl text-center font-bold text-white">
                    meet the CEO
                </h1>

                {/* Carousel Content */}
                <div className="flex justify-center items-center py-5">
                    <div className="border-2 p-6 md:w-[60%] w-[90%] md:h-72  shadow-md  inset-5 shadow-white">
                        <p className="md:text-4xl text-2xl font-bold  text-yellow-400 text-blueBlack">
                            {result[currentIndex].roles}
                        </p>
                        <p className="text-white mt-4 text-lg md:text-xl">{result[currentIndex].data}</p>
                    </div>
                </div>

                {/* Optional: Show the index and total count of items */}
                <div className="text-white text-center my-4 pt-18">
                    <p>
                        {currentIndex + 1} of {result.length}
                    </p>
                </div>
            </div>

            <div className="md:w-[30%] w-[80%] md:mx-0 mx-auto mdv:p-0 py-1v6 my-8 md:my-0 flex flex-col  justify-center items-center  border-2 md:bg-white rounded-r-3xl relative ">
                <Image src={Brandlogo} alt="ceo" className="w-[60%] md:w-[80%] flex justify-end " />
                <div className="w-full bg-blueBlack md:absolute flex flex-col items-center md:bottom-28 md:py-2 py-0 ">
                    <h1 className="bgc-white  font-bold text-white text-2xl md:text-4xl">{title}</h1>
                    <p className=" py-J4 font-bold text-yellow-400 text-xl md:text-2xl">A.K.A (LINUX69)</p>
                    
                    <p className=" py-J4 font-bold text-white text-xl">CEO</p>
                </div>
            </div>


        </div>
    );
};

export default DetailData;
