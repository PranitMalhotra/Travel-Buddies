import React from 'react'
import { SocialIcon } from 'react-social-icons'

function Footer() {
  return (
    <div className='bg-[#4d4848] text-white mt-10 h-[200px]'>
        <div className='ml-10 pt-10 text-4xl'>Contact Us</div>
        <div className='mt-12 ml-12'>
            <SocialIcon url="instagram.com"  className='mr-6 ml-10'/>
            <SocialIcon url="facebook.com" className='mr-6'/>
            <SocialIcon url="twitter.com" className='mr-6'/>
            <SocialIcon url="linkedin.com" className='mr-6'/>
        </div>
    </div>
  )
}

export default Footer