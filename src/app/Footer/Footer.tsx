import React from 'react'
import FooterLogo from './FooterLogo'
import FooterContent from './FooterContent'

export default function Footer() {
  return (
    <div className='flex justify-between items-center px-2'>
      <FooterLogo />
      <FooterContent />
      <FooterLogo />
    </div>
  )
}
