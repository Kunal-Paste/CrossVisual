import React from 'react'
import Videoh from '../components/Home/Videoh'
import HomeHero from '../components/Home/HomeHero'
import HomeButtom from '../components/Home/HomeButtom'

const Home = () => {
  return (
    <div>
       <div className='h-screen w-screen fixed -z-10'>
         <Videoh/>
       </div>

       <div className='min-h-screen w-screen relative flex flex-col justify-between gap-10'>
         <HomeHero/>
         <HomeButtom/>
       </div>
    </div>
  )
}

export default Home