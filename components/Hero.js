import React from 'react'
import Image from 'next/image'
import heroTaxi from "../public/images/happy-family-travelling-by-car-with-camping-equipment-top_74855-10751 1.png"
import Link from "next/link"

function Hero() {
  return (
    <div className='ml-10 mt-9 flex flex-row justify-between h-screen m-auto'>
      <div>
        <h1 className='text-7xl mb-[50px] mt-12'><span className='text-[#EA3535]'>T</span>ravel <span className='text-[#EA3535]'>B</span>uddies</h1>
        <p className='text-[#5a5151] mb-5 text-[20px]'>Now Travel made Comfortable and Credible</p>
        <Link href="/filters">
        <button className='bg-[#EA3535] hover:bg-[#ffc7c7] text-white font-bold py-2 px-4 hover:text-[#5c4d4d] hover:border-[#ea3535] mt-12 rounded'>Book Now</button>
        </Link>
      </div>
      <div><Image className='' src={heroTaxi}  width={696} height={317} /></div>
    </div>
  )
}

export default Hero