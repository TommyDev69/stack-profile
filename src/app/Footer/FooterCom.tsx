import React from 'react'
import FooterContent from './FooterContent'
import FooterCopy from './FooterCopy'

export default function FooterCom() {
  return (
    <div className='flex justify-around items-center w-full bg-green-800'>
      <FooterContent />
      <FooterCopy />
    </div>
  )
}
