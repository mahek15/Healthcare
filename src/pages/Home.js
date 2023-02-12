import React from 'react'
import Chat from '../components/Chat';
import Blogs from './Blogs';
import Contact from './Contact';
import MeetDoctors from './MeetDoctors';
import Testimonials from './Testimonials';
import Works from './Works';

const Home = () => {

  return (
    <>
    <div className='flex flex-row-reverse justify-center my-auto font-poppins' >
    <img src='/images/home-img.png' alt='home' className='h-auto bg-cover'/>
        <div className='flex flex-col w-auto text-dark bg-auto bg-light items-center justify-center '>
            <p className='font-bold text-6xl py-8 ml-10'>Virtual Healthcare When You Need It Most</p>
            <p className='font-light text-4xl pb-4'>For Anyone, Anywhere, at Anytime.</p>
            <button className='bg-dark text-white mx-auto py-3 px-6 font-medium rounded-xl '>Join Now</button>
        </div>
        
    </div>
    <div className='bg-dark rounded-full fixed w-50px' onClick={<Chat/>}></div>
    <MeetDoctors/>
    <Works/>
    <Testimonials/>
    <Blogs/>
    <Contact/>
    </>
  )
}

export default Home