import React from 'react'
import FooterLogo from './FooterLogo'
import FooterContent from './FooterContent'
import FooterCopy from './FooterCopy'

export default function Footer() {
  return (
    <div className='flex justify-space items-center px-2'>
      <FooterLogo />
      <FooterContent />
      <FooterCopy />
    </div>
  )
}
