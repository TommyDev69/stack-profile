
import Image from "next/image"

interface listing{
    id: number,
    image: string,

}
interface Project_OneProps{
    Items:listing[],
    title:string
}
const Project_One:React.FC<Project_OneProps> = ({Items, title}) => {
    return ( 
        <div className="py-8 px-4">
            <h2 className="text-center text-white text-2xl pb-8 md:text-[30px] capitalize">
                {title}
            </h2>
            <div className="flex  items-center space-x-3 md:px-14 flex-row " >
           
            {Items.map((list) =>(
                <div className="w-1/3" key={list.id}>
                     <Image src={list.image}   alt={`Project ${list.id}`}  className=" w-[80%]" />
                </div>
            ))}
           
            </div>
        </div>
     );
}
 
export default Project_One;