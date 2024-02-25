import React from 'react'
import Button from './Button'

const Submit = () => {
  return (
    <section id='submit' className=' bg-main-4 py-[70px] lg:px-[100px] px-[20px] relative '>
      <div className="absolute w-[80%] lg:top-[-110px] left-[11%] p-[20px] text-center grid justify-between items-center lg:grid-cols-2 grid-cols-1 sm:grid-cols-1 lg:p-10 md:p-7 text-main-1 bg-main-3 rounded-5xl container m-auto">
        <div className='lg:regular-32 p-[20px] text-[22px]'>
          See My Projects At Once   
          & leave Here Your E-mail
          Address
        </div>
        <div className='border-2 border-main-1 flex items-center rounded-3xl'>
        <input
          className='px-5 py-2 bg-transparent w-[70%] border-none focus:border-none focus:outline-none  rounded-3xl text-main-1  transition-all text-[18px]'
          type='email'
          placeholder='Your Email'
        />
        <Button
          classes="w-[30%] border-r-2 px-5 py-2 rounded-3xl border-r-white transition-all hover:bg-main-1 hover:text-main-3 inline-block"
          type="submit"
          title="Send"
          theme="btn_gray_blue "
          />
        </div>
      </div>
    </section>
  )
}

export default Submit