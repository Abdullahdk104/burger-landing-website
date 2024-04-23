'use client';
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import BurgerImg1 from "@/public/images/b1.png";
import BurgerImg2 from "@/public/images/b2.png";
import Image from "next/image";
import { BiCycling } from "react-icons/bi";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  }
};

export const Hero = () => {
  return (
    <Carousel
      additionalTransfrom={0}
      arrows={false}
      autoPlay={true}
      autoPlaySpeed={4000}
      centerMode={false}
      infinite
      responsive={responsive}
      itemClass="item"
      showDots={true}
    >
      {/* first hero slide */}
      <div className="w-[100%] h-[88vh] flex items-center justify-center flex-col bg-orange-950  md:clip_path">
        <div className="w-[80%] grid grid-cols-1 md:grid-cols-2 justify-center items-center gap-[2rem] mx-auto">
         {/* image */}
          <Image src={BurgerImg1} alt="burger" className="hidden md:block"/>
          {/** information */}
          <div> 
          <h1 className="text-[40px] font-semibold text-yellow-400">
            Fast Food Burger
          </h1>
          <h1 className="text-[90px] leading-[5rem] uppercase text-white font-bold">
            Yammy<br/>Burger
          </h1>
          <p className="mt-[1rem] text-white text-opacity-70 text-[18px]">
            Absolutely !  Whether you prefer classic beef burgers, vegetarian options, or gourmet  creations, these quotes and  captions can enhance  your burger  experience with the yammy burgers.
            </p>
            <button className=' mt-[2rem] px-8 py-3 text-[16px]   bg-yellow-400
          transition-all duration-200 hover:bg-red-600 flex items-center rounded-md space-x-2 text-white'>
            <span>
              <BiCycling className='w-[1.7rem] h-[1.7rem]'/>
            </span>
            <span className='font-bold'>Order Now</span>
          </button>
          </div>
        </div>

      </div>



       {/* Second hero slide */}
       <div className="w-[100%] h-[88vh] flex items-center justify-center flex-col bg-blue-950  md:clip_path">
        <div className="w-[80%] grid grid-cols-1 md:grid-cols-2 justify-center items-center gap-[2rem] mx-auto">
         {/* image */}
          <Image src={BurgerImg2} alt="burger" className="hidden md:block"/>
          {/** information */}
          <div> 
          <h1 className="text-[40px] font-semibold text-yellow-400">
            Tasty Burger
          </h1>
          <h1 className="text-[90px] leading-[5rem] uppercase text-white font-bold">
            Best<br/>Burger
          </h1>
          <p className="mt-[1rem] text-white text-opacity-70 text-[18px]">
            Absolutely !  Whether you prefer classic beef burgers, vegetarian options, or gourmet  creations, these quotes and  captions can enhance  your burger  experience with the yammy burgers.
            </p>
            <button className=' mt-[2rem] px-8 py-3 text-[16px]   bg-blue-500
          transition-all duration-200 hover:bg-green-600 flex items-center rounded-md space-x-2 text-white'>
            <span>
              <BiCycling className='w-[1.7rem] h-[1.7rem]'/>
            </span>
            <span className='font-bold'>Order Now</span>
          </button>
          </div>
        </div>

      </div>
    </Carousel>
  );
};

export default Hero;
