import Image from "next/image";
import Brand_Logo from "../Image/sunnevian logo (1).svg"
const NavbarLogo = () => {
    return (  
        <div className=" w-24 md:w-40">

            <Image src= {Brand_Logo} alt="logo" />
        </div>
    );
}
 
export default NavbarLogo;