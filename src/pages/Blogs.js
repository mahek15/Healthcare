import React from 'react'
import { Link } from 'react-router-dom'
import Post from '../components/blogs/Post'
import Sidebar from '../components/blogs/Sidebar'

const Blogs = () => {
  return (
    <div className='bg-light font-poppins h-auto flex flex-col items-center rounded-2xl text-lg font-medium '>
      <div className='flex'>
      <div className='grid grid-cols-2'>
        <Post img='/images/blog01.jpg'/>
        <Post img='/images/blog02.jpg'/>
        <Post img='/images/blog03.jfif'/>
        <Post img='/images/blog04.jfif'/>
        <Post img='/images/blog05.jfif'/>
      </div>
      <Sidebar/> 
      </div>
      <button className='bg-neon text-dark m-auto p-3 flex my-10'>
        <Link to='/composeblog'>
          Compose 
        </Link>
        <img src='/images/add.png' alt='add'/>
      </button>
    </div>
  )
}

export default Blogs
