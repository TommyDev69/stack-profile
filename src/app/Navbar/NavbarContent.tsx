// "use client";

// import { useState } from 'react';
// import NavbarButton from "./NavbarButton";
// import NavbarIcon from "./NavbarIcon";

// // import Link from 'next/link';

// import Link from "next/link"; // Make sure you're using next/link for routing


// const NavbarContent = () => {
//   const content = ["home", "service", "our project", "about us"];
//   const [isOpenMenu, setOpenMenu] = useState(false);

//   const setMenuDropdown = () => {
//     setOpenMenu((prevState) => !prevState);
//   };

  


//   return (
//     <>
//       <div className="md:flex hidden capitalize  md:text-[22px] space-x-5 items-center text-white py-8 ">
//         <Link href="/" className="font-bold bg-blueBlack  hover:p-4 hover:border-2 border-2 p-4 rounded-3xl">{content[0]}</Link>
//         <Link href="/project_service " className='bg- blueBlack  hover:p-4 hover:border-2  p-4 hover:rounded-3xl focus:bg-blueBlack focus:rounded-3xl focus:border-t-8 focus:border-r-4 focus:border-l-4'>{content[2]}</Link>
//         <Link href='/services_page' className='bg- blueBlack  hover:p-4 hover:border-2  p-4 hover:rounded-3xl focus:bg-blueBlack  focus:rounded-3xl focus:border-t-8 focus:border-r-4 focus:border-l-4'>{content[1]}</Link>
//         <Link href="/About" className='bg- blueBlack  hover:p-4 hover:border-2  p-4 hover:rounded-3xl focus:bg-blueBlack focus:rounded-3xl focus:border-t-8 focus:border-r-4 focus:border-l-4'>{content[3]}</Link>
//       </div>

//       {/* NavbarButton could be a component for desktop */}
//       <NavbarButton />
      
//       {/* NavbarIcon toggles the menu on smaller screens */}
//       <NavbarIcon  />
//     </>
//   );
// }

// export default NavbarContent;
