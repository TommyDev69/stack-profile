import React from 'react'
import ContactInfo from './ContactInfo'

export default function MainContact() {
  return (
    <div className='flex py-20  space-x-12 px-6 border-dashed border-2'>
       <div className="p-6 max-w-full  bg-black ">
        <h1 className="text-white text-left md:text-[30px] text-2xl font-bold capitalize">
            Contact us for more informations
        </h1>
       </div>
       <ContactInfo />
    </div>
  )
}
