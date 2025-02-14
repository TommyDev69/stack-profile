import React from 'react';
import Image from "next/image";

interface content{
    image: string,
    currency: string,
    id: number,
    background: string,
    status: string;
} 

interface Product{
    Answer: content[],
    title : string

}

const Uppercontent: React.FC<Product> = ({ Answer, title }) => {
  return (
    <div className='py-6'>

    {Answer.map((item) =>(
        <div className="flex px-2  iteems-center space-x-6 space-y-6 md:space-y-0  py-4 items-center bg-red-500" key={item.id}>
            
            <div className="w-1/3 flex flex-col items-center bg-blue-600">

               <Image src={item.image} alt='door' />
            </div>
            <div className="flex flex-col items-center bg-yellow-700 w-1/2  md:w-1/3">
                <p className=" text-writing text-[10px] md:text-[16px] leading-[20px] text-white capitalize font-bold trext-white font-700 md:text-left text-center">
                    {title}
                </p>
                <div className="w-[50%] pt-0 md:pt-[24px]">
                    
                   <Image src={item.background} alt='door' />
                </div>
            </div>

            <div className="w-1/3 hidden  bg-gray-900 md:flex flex-col   items-center">
                <Image src={item.currency} alt='dollars' className='w-[6b4%]' />
            </div>


        </div>
    ))}

      
    </div>
  )
}
export default Uppercontent;
