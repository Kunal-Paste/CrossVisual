import React from 'react'
import Videoh from './Videoh'

const HomeHero = () => {
  return (
    <div className='text-center p-3'>
      <div className='font-[font1] text-[18vh] uppercase leading-[8vw] flex items-center justify-center'>The spark</div>
      <div className='font-[font1] text-[18vh] uppercase leading-[8vw] flex items-center justify-center gap-2'>Who
        <div className='h-[7vw] rounded-full -mt-4 overflow-hidden'>
          <Videoh/>
        </div>
      </div>
      <div className='font-[font1] text-[18vh] uppercase leading-[8vw] flex items-center justify-center'>generates</div>
      <div className='font-[font1] text-[18vh] uppercase leading-[8vw] flex items-center justify-center'>there</div>
      <div className='font-[font1] text-[18vh] uppercase leading-[8vw] flex items-center justify-center'>creativity</div>
    </div>
  )
}

export default HomeHero