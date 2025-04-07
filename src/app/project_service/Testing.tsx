'use client';
import React, { useState, useEffect } from 'react';
import proImage_one from "../../../public/work_9.jpg";
import proImage_two from "../../../public/work_1.png";
import proImage_three from "../../../public/work_3.png";
import proImage_four from "../../../public/work_5.jpg";
import proImage_five from "../../../public/work_4.png";
import { motion } from "framer-motion";

function Testing() {
    const [PositionIndexes, setPositionIndexes] = useState([0, 1, 2, 3, 4]);
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
        setPositionIndexes((prevIndexes) => {
            const updatedIndexes = prevIndexes.map((prevIndex) => (prevIndex + 1) % 5);
            return updatedIndexes;
        });
    };

    const positions = [
        'center',
        'left1',
        'left',
        'right1',
        'right'
    ];

    const imager = [
        proImage_one,
        proImage_two,
        proImage_three,
        proImage_four,
        proImage_five
    ];

    const imageVariant = {
        center: { x: "0%", scale: 1, opacity: 1, zIndex: 5 },
        left1: { x: "-50%", scale: 0.7, opacity: 0.7, zIndex: 2 },
        left: { x: "-90%", scale: 0.5, opacity: 0.5, zIndex: 1 },
        right: { x: "90%", scale: 0.5, opacity: 0.5, zIndex: 1 },
        right1: { x: "50%", scale: 0.7, opacity: 0.7, zIndex: 2 },
    };

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % imager.length);
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className='flex items-center flex-col overflow-hidden relEative'>
            {imager.map((image, index) => (
                <motion.img
                    key={index}
                    src={image.src} // Ensure you use `.src` if using StaticImageData
                    alt={`image-${index}`}
                    className='rounded-[-12px]'
                    initial="center"
                    animate={positions[PositionIndexes[index]]} // Fix: Using correct variant for animation
                    transition={{ duration: 0.5 }}
                    variants={imageVariant}
                    style={{ width: '40%', position: 'absolute' }}
                />
            ))}
            <button 
                onClick={handleNext} 
                className="absolute bottom-4 right-4 text-[40px] bg-red-500 border-spacing-4 text-white px-4 py-2 rounded"
            >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi expedita corrupti velit dicta iure? Fugit atque alias laboriosam, suscipit, dicta repellendus, assumenda minus laudantium commodi nesciunt vero aperiam placeat fuga?
            </button>
        </div>
    );
}

export default Testing;
