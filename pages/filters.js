import React from 'react'
import Navbar from '../components/Navbar'
import Link from 'next/link'

function filters() {
  return (
    <div>
        <Navbar />
        <div className=''>
            <div>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <div className='ml-10 mt-12 border-8 border-black w-[600px] p-12 h-[600px] bg-gray-200'>
                <h1 className='text-3xl bold text-center'>Filters</h1>
                <form className='p-2 mt-6'>
                <label class="block text-black-500 font-bold mb-3 pr-4" for="inline-full-name">Gender</label>
                <select className='rounded mb-3 w-[450px]'>
                    <option>Male</option>
                    <option>Female</option>
                    <option>Transgender</option>
                </select>
                <label class="block text-black-500 font-bold mb-3 pr-4" for="inline-full-name">Available Cab Details</label>
                <select className='mb-3 rounded w-[450px]'>
                    <option>6:00 AM to 12:00 PM</option>
                    <option>12:00PM to 6:00 PM</option>
                    <option>6:00 PM to 12:00 AM</option>
                    <option>12:00 AM to 6:00 AM</option>
                </select>
                <label class="block text-black-500 font-bold mb-3 pr-4" for="inline-full-name">Available Cab Details</label>
                <select className='mb-3 rounded w-[450px]'>
                    <option>4 Seater</option>
                    <option>Sedan</option>
                    <option>SUV</option>
                    <option>13 Seater</option>
                </select>
                <div><Link href="/payment"><button className='bg-gray-500 p-3 rounded'>Confirm</button></Link></div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default filters