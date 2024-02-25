import Image from 'next/image'
import React from 'react'
import Pro1 from "../../public/project-img1.png"
import Pro2 from "../../public/project-img2.png"
import Pro3 from "../../public/project-img3.png"
const SectionOne = () => {
  return (
    <section className='container m-auto lg:p-20 p-10 '>
      <div className="grid gap-5 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 ">
        <div className='cursor-pointer hover:scale-105 transition-all'>
          <Image
          className='rounded-2xl'
            src={Pro1}
            alt='Photo'
            width={600}
          height={400}/>
        </div> {/*Image*/}
        <div className='cursor-pointer hover:scale-105 transition-all'>
          <Image
          className='rounded-2xl'
            src={Pro2}
            alt='Photo'
            width={600}
          height={400}/>
        </div> {/*Image*/}
        <div className='cursor-pointer hover:scale-105 transition-all'>
          <Image
          className='rounded-2xl'
            src={Pro3}
            alt='Photo'
            width={600}
          height={400}/>
        </div> {/*Image*/}
        <div className='cursor-pointer hover:scale-105 transition-all'>
          <Image
          className='rounded-2xl'
            src={Pro1}
            alt='Photo'
            width={600}
          height={400}/>
        </div> {/*Image*/}
        <div className='cursor-pointer hover:scale-105 transition-all'>
          <Image
          className='rounded-2xl'
            src={Pro2}
            alt='Photo'
            width={600}
          height={400}/>
        </div> {/*Image*/}
        <div className='cursor-pointer hover:scale-105 transition-all'>
          <Image
          className='rounded-2xl'
            src={Pro3}
            alt='Photo'
            width={600}
          height={400}/>
        </div> {/*Image*/}
      </div>
    </section>
  )
}

export default SectionOne