import { Close } from '@material-ui/icons'
import React from 'react'
import { useUserAuth } from '../context/UserAuthContext'
import { Link, useNavigate } from 'react-router-dom'

const NavbarMenuItems = ({showMenu,active}) => {
    const { logOut} = useUserAuth();
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
    <div >
        
      <ul className={active ? 'md:hidden flex flex-col items-center fixed inset-0 justify-center left-1/4 bg-dark/40 backdrop-blur-lg gap-8 text-light text-2xl' : 'hidden'}>
        <Close onClick={showMenu} className='cursor-pointer scale-150'/>
            <li><Link to="/meetdoctors">Our Doctors </Link></li>
            <li><Link to='/testimonials'>Testimonials</Link></li>
            <li><Link to='/works'>Works</Link></li>
            <li><Link to='/contact'>Contact</Link></li>
            <button onClick={handleLogout} className='bg-dark text-light py-2 rounded-2xl px-5'>Logout</button>
          </ul>
    </div>
  )
}

export default NavbarMenuItems
