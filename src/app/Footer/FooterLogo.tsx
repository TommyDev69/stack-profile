import Image from "next/image";
import Logo from '../Image/sunnevian logo (1).svg'
const FooterLogo = () => {
 let Brand = Logo
    return ( 
        <div className="w-[30%] pl-12 bg-black flex flex-col items-center">
            <Image src={Brand} alt='logo' className=" md:w-[30%] mr-[90%]" />
        </div>
     );
}
 
export default FooterLogo;
