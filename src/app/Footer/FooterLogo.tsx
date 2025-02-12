import Image from "next/image";
import Logo from '../Image/sunnevian logo (1).svg'
const FooterLogo = () => {
 let Brand = Logo
    return ( 
        <div className="w-[10%] flex flex-col items-center">
            <Image src={Brand} alt='logo' />
        </div>
     );
}
 
export default FooterLogo;
