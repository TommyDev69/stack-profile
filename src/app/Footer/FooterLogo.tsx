import Image from "next/image";
import Logo from '../Image/sunnevian logo (1).svg'
const FooterLogo = () => {
 let Brand = Logo
    return ( 
        <div className="w-1/3 pl-12 bg-black flex flex-col items-center">
            <Image src={Brand} alt='logo' className="w-[20%] md:w-[40%] mr-[90%]" />
        </div>
     );
}
 
export default FooterLogo;
