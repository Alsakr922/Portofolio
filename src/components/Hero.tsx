import React from 'react'
import Button from './Button'
import Image from 'next/image'
import {  ArrowForwardIos } from '@mui/icons-material'
import Link from 'next/link'
import { TypeAnimation } from 'react-type-animation'

const Hero = () => {

  return (
    <main id='home' className='hero mt-[85px] lg:p-20 p-10 grid lg:grid-cols-2 sm:grid-cols-1'>
    <div className='lg:flexBetween sm:flexCenter md:flexCenter sm:text-center md:text-center lg:text-start container' >
      <div className=''>
          <Button
        classes="md:m-auto sm:m-auto lg:m-0"
        type="button"
        title="Welcome In My Portofolio"
        theme="btn_hero "
        />
        <div className='py-5 regular-64 text-main-3 capitalize'>
        <span className='regular-64 capitalize'>
          Hi! Im <span className=' text-transparent stroke'>Mohamed</span></span>
        <span className='lg:absolute md:hidden lg:block hidden water lg:top-[226px] lg:left-[257px] regular-64 text-main-3 capitalize'>
          Mohamed
            </span>
            <br />
            <span>
                  <TypeAnimation
    sequence={[
      'FrontEnd Developer',
      1000,
      'BackEnd Developer',
      1000,
      'Fullstack Developer',
      1000,
      'UI/UX Designer',
      1000
    ]}
      wrapper='span'
      speed={50}
      className='regular-64 text-main-3 capitalize'
      repeat={Infinity}
    />
            </span>
          </div>
          <h6 className='text-[18px] pt-[30px] text-main-4'>Hell Everyone , I have A #Years Of Experiance in Web And alot Of Skills</h6>
        <Link href={"/"} className='text-main-2 py-10 block'>
        Lets Connect  <div className='left_right inline-block'><ArrowForwardIos /></div>
        </Link>
        </div>
      </div>
      <div className='up_down flexCenter lg:w-[500] lg:h-[500] md:w-[300] md:h-[300] sm:w-[200] sm:h-[200]'>
        <Image
          className='lg:w-[500] lg:h-[500] md:w-[300] md:h-[300] sm:w-[200] sm:h-[200]'
          src="/Hero.png"
          alt="Logo"
          width={200}
          height={200}
        />
      </div>
</main>
  )
}

export default Hero