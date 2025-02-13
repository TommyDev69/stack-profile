import Image from "next/image";
import Logo from '../Image/sunnevian logo (1).svg'
const FooterLogo = () => {
 let Brand = Logo
    return ( 
        <div className="w-[45%] pl-12 bg-black flex flex-col items-center">
            <Image src={Brand} alt='logo' className="wv-[35%] md:w-[40%] mr-[90%]" />
        </div>
     );
}
 
export default FooterLogo;
