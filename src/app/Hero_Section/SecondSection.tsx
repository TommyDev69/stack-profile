import React from 'react'
import Image from "next/image";
import  CEO from "../Image/ceo.png"
export default function SecondSection() {
  return (
    <div className='md:w-1/2 flex  justify-center md:justify-end '>
     <Image src={CEO} alt='ceo' />
    </div>
  )
}
