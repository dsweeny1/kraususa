import React from 'react'
import Image from 'next/image'
import Dropdown from '../components/Dropdown'

const Homepage = () => {
  return (
    <div>
        <Dropdown />
        <Image src="/bellucciBanner.jpg" height={500} width={500} alt='homepage-image' />
        <h1 className='text-2xl'>KRAUSⓇ - Engineered To Be Exceptional</h1>
        <h2 className='text-1xl'>Sinks, Faucets, and Accessories for the Kitchen and Bathroom</h2>
        <h3 className='text-xl'>We believe in the power of design to transform ordinary environments into beautiful spaces. We strive to inspire and empower consumers by creating kitchen and bathroom fixtures that raise industry standards of quality, functionality, value, and style. We encourage you to experience the Kraus difference and Live Beautifully™.</h3>
    </div>
  )
}

export default Homepage