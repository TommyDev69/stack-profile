// "use client";
import Image from "next/image";

interface dept {
  id: number;
  Image: string;
  heading: string;
  content: string;
}

interface Material {
  
  Tool: dept[];
  
}

const Strenght:React.FC<Material> = ({Tool}) => {
    return (  
        <div className="space-x-4 space-y-14 grid grid-cols-3 md:grid-cols-3 ">
                {Tool.map((subj) => (
                <div className=" md:px-8 px-0  py-10" key={subj.id}>
                    
                  <div className="md:w-[50%] mx-8 md:mx-auto ">

                      <Image src={subj.Image} alt={`Project ${subj.id}`}  className="md mx-auto"  />
                  </div>
                  <div className=" md:w-full ">
                    <h3 className="mt-4 text-[8px] md:text-3xl font-bold text-center  text-white">{subj.heading}</h3>
                    
                    <p className="mt-2 text-center text-[10px] md:text-left md:text-[14px] text-white font-thin">{subj.content}</p>
                  </div>
                </div>
            ))}
        </div>
    );
}
 
export default Strenght;