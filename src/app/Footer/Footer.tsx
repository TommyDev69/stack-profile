import React from 'react'
import FooterLogo from './FooterLogo'
import FooterContent from './FooterContent'
import FooterCopy from './FooterCopy'
import FooterCom from './FooterCom'

export default function Footer() {
  return (
    <div className='flex justify-space items-center px-2'>
      <FooterLogo />
     <FooterCom />
    </div>
  )
}
