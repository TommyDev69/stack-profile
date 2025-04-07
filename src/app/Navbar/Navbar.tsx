import Content from "./Content";

import NavbarButton from "./NavbarButton";
import NavbarLogo from "./NavLogo";
import ToggleBar from "./ToggleBar";



const Navbar = () => {
    return (  
        <div className=" bg-blue-Black flex    flex-wrap    justify-around px-5 w-full">
        <NavbarLogo />
        {/* <ContentDisk /> */}
        {/* <Content /> */}
        {/* <NavbarButton/> */}
        <ToggleBar />
    </div>
    );
}
 
export default Navbar;