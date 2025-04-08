'use client';  // <-- Add this line to indicate this is a client-side component

import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import Content from './Content';


const ToggleBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Track the state of the menu

  // Function to toggle the menu open/close
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
    <nav className="flex w-[80%] mx-auto items-center justiwfy-end">
      <div></div>
        <div className="hidden w-full justify-between md:flex">

            <Content />
        </div>
        <div className="md:hidden absolute top-8 right-6">
            <FontAwesomeIcon
                icon={isMenuOpen ? faTimes : faBars} // Toggle icon based on state
                className="text-green-400 w-10 h-10 cursor-pointer"
                onClick={toggleMenu} // Toggle menu visibility on click
            />
        </div>
    </nav>
    {isMenuOpen && (
        <div className="flecx flecx-col items-center basis-full">
             <Content />
        </div>
    )}
    </>
    // <div className="  w-10 h-10 md:hidden block py-0 pr-e24">
    //  
      
    //   {isMenuOpen && (
    //     <div className="flex-wrap  bg-black basis-full p-6 rounded-lg z-50">
    //       <ContentDisk /> {/* Properly close the ContNetwork component */}
    //     </div>
    //   )}
    // </div>
  );
};

export default ToggleBar;
