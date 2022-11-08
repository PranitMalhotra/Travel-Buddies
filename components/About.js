import React from 'react'
import Image from 'next/image'
import logo from "../public/images/logoo 1.png"


function about() {
  return (
    <div>
        <div className='flex flex-row justify-between mt-10 '>
          <div><Image src={logo} /></div>
          <div className='max-width-[25%]'>
            <h1 className='text-[32px] font-bold'>About Us</h1>
            <p className='flex-wrap'>Travel Buddies is a platform which helps people book cab or taxis from one place to other and assures customers safety and affordable travel. We are VIT Vellore based software agency who aims to provide customers with all the comfort they want. </p>
          </div>
        </div>
    </div>
  )
}

export default about