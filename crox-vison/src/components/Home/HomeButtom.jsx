import React from 'react'
import { Link } from 'react-router-dom'

const HomeButtom = () => {
  return (
    <div className='font-[font2] flex items-center pb-3 justify-center gap-2'>
      <Link className='text-[6vw] border-4 border-white hover:border-[#D3FD50] hover:text-[#D3FD50] rounded-full px-10 pt-1 leading-[7vw] uppercase'>projects</Link>
      <Link to='/agence' className='text-[6vw] border-4 border-white hover:border-[#D3FD50] hover:text-[#D3FD50] rounded-full px-10 pt-1 leading-[7vw] uppercase'>agency</Link>
    </div>
  )
}

export default HomeButtom