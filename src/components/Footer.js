import React from 'react'
import { Link } from 'react-router-dom'
import { useUserAuth } from '../context/UserAuthContext';

const Footer = () => {
  const {user} = useUserAuth();
  return (
    <div className='font-poppins text-light w-full h-auto bg-dark py-32'>
      <div className='flex justify-evenly'>
        <div className='flex-col '>
          <p className='md:text-4xl text-2xl font-bold md:pb-10 pb-6'>Medicare</p>
          <p className='md:text-2xl text-lg font-light pb-10'>For our latest health tips and tricks subscribe below</p>
          <input placeholder='Your Email' 
            type='fixed' 
            className='focus:outline-none border p-2 focus:border-dark focus:border-2 font-light tracking-wider text-dark'
            name='email'
            id=''
            value={user && user.email}
            />
          <span className='py-3 px-7 rounded ml-4 bg-neon text-dark'>
            <button>
              Send
            </button>
          </span>
          <p>Made by Mahek</p>
        </div>
        <div className='flex flex-col '>
          <p className='md:text-2xl text-lg font-medium md:pb-10 pb-6'>Menu</p>
          <ul className='flex flex-col md:text-lg text-sm font-light '>
            <Link to="/meetdoctors" className='text-center'> Our Doctors </Link>
            <Link to="/works" className='text-center'> How it Works </Link>
          </ul>
        </div>
        <div className='flex flex-col'>
          <p className='md:text-2xl text-lg font-medium md:pb-10 pb-6'>Social</p>
          <ul className='flex flex-col md:text-lg text-sm font-light '>
            <Link to="/meetdoctors" className='text-center'> Instagram </Link>
            <Link to="/works" className='text-center'> Facebook </Link>
            <Link to="/works" className='text-center'> LinkedIn </Link>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Footer
