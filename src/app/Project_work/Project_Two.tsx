import Image from "next/image"
interface goods{
  id: number;
  image: string;
  paddingTop?: string;
}

interface EcommerceProps{
    Ecomm_Sector: goods[]; // Projects passed from parent
    Sec_title: string;
   
}
const Project_Two:React.FC<EcommerceProps> = ({Ecomm_Sector, Sec_title}) => {
    return ( 
        <div className="py-8 px-4">
            <h2 className="text-center text-white text-2xl pb-8 md:text-[30px] capitalize">{Sec_title}</h2>
            <div className="flex  space-x-6 flex-row md:px-14"  >
                {Ecomm_Sector.map((item_ecomm) =>(
                    <div className="w-1/3 pt-6" key={item_ecomm.id}>
                        <Image src={item_ecomm.image}   alt={`Project ${item_ecomm.id}`} style={{ paddingTop: item_ecomm.paddingTop }}  className=" w-[80%]" />
                    </div>

                ))}
            </div>
            
        </div>
    );
}
 
export default Project_Two;