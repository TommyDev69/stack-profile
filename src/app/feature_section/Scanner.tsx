import React from 'react'
import Image from 'next/image'
import QRCODE from "../Image/sunnev.png"
export default function Scanner() {
  return (
    <div className=' md:w-[40%] flex justify-center md:justify-end'>
      <Image src={QRCODE} alt='Scanner' className='md:w-[60%] ww-[70%] mwd:h-0 h-[w400px]'/>
    </div>
  )
}
