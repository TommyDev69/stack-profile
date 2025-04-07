"use client"; // <-- Add this at the top to make this a Client Component

import { useState, useEffect } from "react";
import ImageWork from "./ImageWork";
import proImage_one from "../../../public/photo/work_9.jpg";
import proImage_two from "../../../public/photo/work_1.png";
import proImage_three from "../../../public/photo/work_3.png";
import proImage_four from "../../../public/photo/work_5.jpg";
import proImage_five from "../../../public/photo/work_2.png";
import proImage_six from "../../../public/photo/work_6.jpg";
import proImage_seven from "../../../public/photo/work_4.png";
import proImage_eight from "../../../public/photo/work_7.jpg";
import proImage_nine from "../../../public/photo/work_8.png";
import Main from "../Project_work/Main";
import Navbar from "../Navbar/Navbar";

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const ImagePhoto = [
    { id: 1, Photo: proImage_one },
    { id: 2, Photo: proImage_two },
    { id: 3, Photo: proImage_three },
    { id: 4, Photo: proImage_four},
    { id: 5, Photo: proImage_five },
    { id: 6, Photo: proImage_six },
    { id: 7, Photo: proImage_seven},
    { id: 8, Photo: proImage_eight},
    { id: 9, Photo: proImage_nine }


  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % ImagePhoto.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return(
      <div className="!bg-blueBlack h-full">
      <Navbar/>
      <ImageWork ImageResult={ImagePhoto} currentIndex={currentIndex} />;
      <div className="mt-[40%]">

      <Main  />
      </div>
      </div>
  )
};

export default ImageSlider;
