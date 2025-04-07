import Content from "./Content";

import NavbarButton from "./NavbarButton";
import NavbarLogo from "./NavLogo";
import ToggleBar from "./ToggleBar";



const Navbar = () => {
    return (  
        <div className=" bg-blue-Black flex flex-wrap justify-between itemsw-center bg-red-500 px-5 w-full">
       <div>

        <NavbarLogo />
       </div>
        
        <ToggleBar />
    </div>
    );
}
 
export default Navbar;