import React from 'react'
import Navbar from '../components/Navbar'

function cabagency() {
  return (
    <div>
        <Navbar />
        <h1 className='text-3xl bold m-10 '>Details of Cab</h1>
        <div className='bg-black text-white p-6 w-[600px] ml-6 rounded'>
          <h1 className='text-center bold'>FORM</h1>
          <div className='bg-gradient-to-r from-gray-200 to-gray-400 text-black'>
            <form className='p-2'>
              <label class="block text-black-500 font-bold mb-1 md:mb-0 pr-4" for="inline-full-name">Available Cab Details</label>
              <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text"></input>
              <label class="block text-black-500 font-bold mb-1 md:mb-0 pr-4" for="inline-full-name">Available Cab Details</label>
              <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text"></input>
              <label class="block text-black-500 font-bold mb-1 md:mb-0 pr-4" for="inline-full-name">Available Cab Details</label>
              <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text"></input>
            </form>
          </div>
          <div className='m-6 flex flex-row justify-around'>
              <button className='bg-white text-black p-2 rounded'>Select Trip</button>
              <button className='bg-white text-black p-2 rounded'>Confirm</button>
            </div>
        </div>

    </div>
  )
}

export default cabagency