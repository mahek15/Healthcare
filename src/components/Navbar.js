import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useUserAuth } from '../context/UserAuthContext'
import NavbarMenuItems from './NavbarMenuItems';
import { MenuOutlined } from '@material-ui/icons';

const Navbar = () => {
    const {user, logOut} = useUserAuth();
    const [active,setActive] = useState(false);
    const showMenu = () => {
      setActive (!active)
    }
    let navigate = useNavigate();
    const handleLogout = async () => {
        try {
          await logOut();
          navigate("/");
        } catch (error) {
          console.log(error.message);
        }
      };
  return (
    //         <p className='ml-10'>{user && user.email}</p>
    <div className=' w-full text-light font-poppins flex justify-between p-4 items-center bg-dark '>
      <div className='text-2xl font-bold'>
      <Link to="/home">MediCare </Link>
      </div>
        <nav>
          <div className='absolute right-6 md:hidden top-6 scale-150'>
            <MenuOutlined onClick={showMenu} className='scale-150 cursor-pointer'/>
          </div>
          <ul className='hidden md:flex gap-8 p-6 items-center '>
            <li><Link to="/meetdoctors">Our Doctors </Link></li>
            <li><Link to='/testimonials'>Testimonials</Link></li>
            <li><Link to='/works'>Works</Link></li>
            <li><Link to='/blogs'>Blogs</Link></li>
            <li><Link to='/medicines'>Medicines</Link></li>
            <li><Link to='/contact'>Contact</Link></li>
            <button onClick={handleLogout} className='bg-neon text-dark py-2 rounded-2xl px-5'>Logout</button>
          </ul>
          <NavbarMenuItems showMenu={showMenu} active={active}/>
        </nav>
    </div>
  )
}

export default Navbar
