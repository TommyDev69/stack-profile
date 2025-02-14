"use client";

import { useState } from 'react';
import NavbarButton from "./NavbarButton";
import NavbarIcon from "./NavbarIcon";

import Link from 'next/link';

const NavbarContent = () => {
  const content = ["home", "service", "our project", "about us"];
  const [isOpenMenu, setOpenMenu] = useState(false);

  const setMenuDropdown = () => {
    setOpenMenu((prevState) => !prevState);
  };

  return (
    <>
      <div className="md:flex hidden capitalize md:text-[22px] space-x-5 items-center text-white py-8">
        <Link href="/" className="font-bold">{content[0]}</Link>
        <Link href="/service">{content[1]}</Link>
        <a href="#our-project">{content[2]}</a>
        <a href="#about-us">{content[3]}</a>
      </div>

      {/* NavbarButton could be a component for desktop */}
      <NavbarButton />
      
      {/* NavbarIcon toggles the menu on smaller screens */}
      <NavbarIcon  />
    </>
  );
}

export default NavbarContent;
