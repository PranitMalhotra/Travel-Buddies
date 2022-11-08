import Head from 'next/head'
import Image from 'next/image'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import About from '../components/About'

export default function Home() {
  return (
    <div className=''>
      <Navbar />
      <Hero />
      <About />
      <Footer />
    </div>    
  )
}
