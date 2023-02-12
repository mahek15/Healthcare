import React from 'react'

const Works = () => {
  return (
    <div className='font-poppins bg-light py-32'>
      <p className='text-dark font-bold text-5xl text-center'>How it Works</p>
      <p className='text-base font-light text-center w-1/3 mx-auto my-8'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
      <div className='border border-black flex w-4/5 mx-auto justify-center '>
        <img src='/images/works.svg' alt='works' className='border border-black w-[500px] py-32'/>
        <div className='flex flex-col p-5 border border-black justify-center px-32 bg-dark/40 '>
          <div className='flex mb-10 '>
            <img src='/images/chat.svg' alt='chat' className='w-[150px] mr-3'/>
            <div className='bg-dark/40 p-3 rounded-lg text-light'>
              <p className='py-2 font-medium text-lg '>Start a Chat</p>
              <p className='font-light text-sm'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
          </div>
          <div className='flex flex-row-reverse mb-10'>
            <img src='/images/plan.svg' alt='plan' className='w-[150px] mr-3'/>
            <div className='bg-dark/40 text-light p-3 rounded-lg'>
              <p className='py-2 font-medium text-lg'>Choose A Plan</p>
              <p className='font-light text-sm'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
          </div>
          <div className='flex'>
            <img src='/images/book.svg' alt='book' className='w-[150px] mr-3'/>
            <div className='bg-dark/40 text-light p-3 rounded-lg'>
              <p className='py-2 font-medium text-lg'>Book a session</p>
              <p className='font-light text-sm'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Works
