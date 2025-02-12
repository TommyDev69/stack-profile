import Image from "next/image"


interface product{
    id: number;
    image: string;
    paddingTop?: string;
}

interface EducationProps{
    Edu_Sector: product[],
    Third_title: string
    
}
const Project_Three:React.FC<EducationProps> = ({Edu_Sector, Third_title}) => {
    return ( 
<div className="py-8 px-4">
            <h2 className="text-center text-white text-2xl pb-8 md:text-[30px] capitalize">
                {Third_title}
            </h2>
            <div className="flex  Edu_Sector-center space-x-3 md:px-14 flex-row ">
           
            {Edu_Sector.map((edu_List) =>(
                <div className="w-1/3" key={edu_List.id}>
                     <Image src={edu_List.image}   alt={`Project ${edu_List.id}`} style={{ paddingTop: edu_List.paddingTop }}  className=" w-[80%]" />
                </div>
            ))}
           
            </div>
        </div>
     );
}
 
export default Project_Three;