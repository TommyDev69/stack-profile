import React from 'react';
import Image from "next/image";

interface content{
    image: string;
    currency: string;
    id: number;
    background?: string;
    status: string;
} 

interface Product{
    Answer: content[];
    title : string

}

const Uppercontent: React.FC<Product> = ({ Answer, title }) => {
  return (
    <div className='py-6'>

    {Answer.map((item) =>(
        <div className="flex justify-center items-center" key={item.id}>
            <div className="w-40">

               <Image src={item.image} alt='door' />
            </div>
            <div className="flex flex-col items-center">
                <p className="text-sm md:text-xl trext-white font-700 md:text-left text-center">
                    {title}
                </p>
                <div className="w-40">
                    
                   <Image src={item.image} alt='door' />
                </div>
            </div>

            <div className="w-40">
                <Image src={item.currency} alt='dollars' />
            </div>


        </div>
    ))}

      
    </div>
  )
}
export default Uppercontent;
