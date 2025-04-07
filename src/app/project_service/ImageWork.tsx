"use client";
import { motion } from "framer-motion";
import { StaticImageData } from "next/image";
import Navbar from "../Navbar/Navbar";
import Main from "../Project_work/Main";


// Define interface for each image item
interface ImageData {
    id: number;
    Photo: StaticImageData;// Make sure Photo is a string representing the image URL
    
  }
  

// Define interface for the props expected by ImageWork component
interface ImageRef {
    ImageResult: ImageData[]; // Array of image data
    currentIndex: number;     // Track the current image index for animation
  }
  

const ImageWork: React.FC<ImageRef> = ({ ImageResult, currentIndex }) => {
    const positionImage = [
        "left", "left3", "left2", "left1", "center", "right2", "right1", "right", "right3"
      ];
    
      // Animation variants based on positions
      const imageVariant = {
        center: { x: "0%", scale: 1, zIndex: 5 },
        left3: { x: "-90%", scale: 0.7 , zIndex: 0 },
        left2: { x: "-70%", scale: 0.5, zIndex: 1 },
        left1: { x: "-50%", scale: 0.3, zIndex: 2 },
        left: { x: "-30%", scale: 0.1, Index: 3 },
        right: { x: "30%", scale: 0.1, zIndex: 3 },
        right1: { x: "50%", scale: 0.3, zIndex: 2 },
        right2: { x: "70%", scale: 0.5, zIndex: 1 },
        right3: { x: "90%", scale: 0.7, zIndex: 0 },
      };   

  return (
    <div className="bg-blueBlaeck  h-escreen">
        <div className="flex items-center flex-col bg-blue Black h-scr een">
            {ImageResult.map((displayImage, index) => {
                // Calculate position for each image based on the current index
                const positionKey = positionImage[(index - currentIndex + positionImage.length) % positionImage.length];
                const position = imageVariant[positionKey as keyof typeof imageVariant];

                return (
                    <motion.img
                        key={displayImage.id}
                        src={displayImage.Photo.src}  // Use displayImage.Photo.src, not displayImage.Photo
                        alt={`displayImage ${displayImage.id}`}
                        initial="center"
                        variants={ imageVariant }
                        animate={position}
                        transition={{ duration: 0.5 }}
                        className="absolute md:w-[35%] w-[40%] md:top-[30%] top-[15%]  "
                        // style={{ position:'absolute'}}
                    />

                
                );
            })}

            
            {/* <Maisn /> */}
        </div>

        
    </div>
  );
};

export default ImageWork;
