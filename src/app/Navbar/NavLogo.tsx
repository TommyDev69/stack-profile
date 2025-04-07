import Image from "next/image";
import Brand_Logo from "../Image/sunnevian logo (1).svg"
const NavbarLogo = () => {
    return (  
        <div className=" w-28 md:w-36 flex items-center">

            <Image src= {Brand_Logo} alt="logo" />
        </div>
    );
}
 
export default NavbarLogo;