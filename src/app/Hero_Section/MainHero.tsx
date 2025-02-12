import React from 'react'
import FirstSection from './FirstSection';
import SecondSection from './SecondSection';

function MainHero() {
  return (
    <div className='contai3ner mt-10  flex space-y-6 flex-col-reverse mx-auto  md:flex-row px-6 md:px-14'>
      <FirstSection />
      <SecondSection />
    </div>
  )
}
export default MainHero;
