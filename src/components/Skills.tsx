import Image from 'next/image'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Skills = () => {
    const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  return (
    <div className="skills py-5" id='skills'>
    <div className='w-3/4 m-auto text-center text-main-1'>
      <h1 className='regular-60'>Skills</h1>
      <p className='regular-32 text-main-2 pb-10'>You can See My Skills Here</p>
        <Slider {...settings}>
            <div className='flexCenter h-[450px] text-main-1 rounded-xl'>
              <div className="rounded-t-xl flex-col flexCenter">
              <Image
                src={"/meter1.svg"}
                alt="Image"
                width={200}
                height={200}/>
                <div className="flexCenter gap-4 p-4flex-col">
                <h1 className='regular-24 pt-5'>Web Developer</h1>
                </div>
              </div>
              </div>
            <div className='flexCenter h-[450px] text-main-1 rounded-xl'>
              <div className="rounded-t-xl flex-col flexCenter">
              <Image
                src={"/meter2.svg"}
                alt="Image"
                width={200}
                height={200}/>
                <div className="flexCenter gap-4 p-4flex-col">
                <h1 className='regular-24 pt-5'>Front End Developer</h1>
                </div>
              </div>
              </div>
            <div className='flexCenter h-[450px] text-main-1 rounded-xl'>
              <div className="rounded-t-xl flex-col flexCenter">
              <Image
                src={"/meter3.svg"}
                alt="Image"
                width={200}
                height={200}/>
                <div className="flexCenter gap-4 p-4flex-col">
                <h1 className='regular-24 pt-5'>JavaScript Developer</h1>
                </div>
              </div>
              </div>
            <div className='flexCenter h-[450px] text-main-1 rounded-xl'>
              <div className="rounded-t-xl flex-col flexCenter">
              <Image
                src={"/meter1.svg"}
                alt="Image"
                width={200}
                height={200}/>
                <div className="flexCenter gap-4 p-4flex-col">
                <h1 className='regular-24 pt-5'>Web Developer</h1>
                </div>
              </div>
              </div>
      </Slider>
    </div>
    </div>
  )
}

export default Skills