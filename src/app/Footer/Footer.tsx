import React from 'react'
import FooterLogo from './FooterLogo'
import FooterContent from './FooterContent'
import FooterCopy from './FooterCopy'
import FooterCom from './FooterCom'

export default function Footer() {
  return (
    <div className='flex justify-space items-center mt-10 px-2'>
      <FooterLogo />
     <FooterCom />
    </div>
  )
}
