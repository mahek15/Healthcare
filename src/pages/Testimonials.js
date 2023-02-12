import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const Testimonials = () => {
  return (
    <div className='h-auto bg-light text-dark flex flex-col items-center justify-center font-poppins py-10'>
      <p className='text-dark text-5xl uppercase font-bold mb-5'>Testimonials</p>
      <div className='max-w-5xl'>
      <Swiper
      spaceBetween={50}
      slidesPerView={3}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <div className='h-96 flex'>
            <div className={`card `}>
              <div className='logo'>
                <img src='/images/male.svg' alt='aadmi'/>
              </div>
              <h2 className='text-3xl mt-2 font-semibold'>Jackie, 25</h2>
              <p className='text-xl font-light mt-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='h-96 flex'>
            <div className={`card`}>
            <div className='logo'>
                <img src='/images/female.svg' alt='aadmi'/>
              </div>
              <h2 className='text-3xl mt-2 font-semibold'>Jackie, 26</h2>
              <p className='text-xl font-light mt-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='h-96 flex'>
            <div className={`card `}>
            <div className='logo'>
                <img src='/images/male.svg' alt='aadmi'/>
              </div>
              <h2 className='text-3xl mt-2 font-semibold'>Jackie, 27</h2>
              <p className='text-xl font-light mt-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='h-96 flex '>
            <div className={`card `}>
            <div className='logo'>
                <img src='/images/female.svg' alt='aadmi'/>
              </div>
              <h2 className='text-3xl mt-2 font-semibold'>Jackie, 28</h2>
              <p className='text-xl font-light mt-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
      </div>
    </div>
  )
}

export default Testimonials
