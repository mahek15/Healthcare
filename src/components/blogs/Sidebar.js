import React from 'react'
import { Link } from 'react-router-dom';

const Sidebar = () => {
    return (
        <div className="m-10 bg-dark/80 text-light py-20 h-full px-10">
          <div className="flex flex-col items-center">
            <span className="m-3 w-4/5 font-medium text-lg">ABOUT US</span>
            <img
              src="/images/blog01.jpg"
              alt=""
              className='h-[200px] w-[300px] object-cover my-3'
            />
            <p className='font-light text-base my-3'>
              Laboris sunt aute cupidatat velit magna velit ullamco dolore mollit
              amet ex esse.Sunt eu ut nostrud id quis proident.
            </p>
          </div>
          <hr/>
          <div className="flex flex-col items-center">
            <span className="m-3 w-4/5 font-medium text-lg">CATEGORIES</span>
            <ul className="mb-2 text-sm">
              <li className="inline-block w-1/2 mt-3 cursor-pointer">
                <Link className="link" to="/blogs?category=Allergy">
                  Allergy
                </Link>
              </li>
              <li className="inline-block w-1/2 mt-3 cursor-pointer">
                <Link className="link" to="/blogs?category=Disease">
                  Disease
                </Link>
              </li>
              <li className="inline-block w-1/2 mt-3 cursor-pointer">
                <Link className="link" to="/blogs?category=Asthama">
                  Asthama
                </Link>
              </li>
              <li className="inline-block w-1/2 mt-3 cursor-pointer">
                <Link className="link" to="/blogs?category=Deficiency">
                  Deficiency
                </Link>
              </li>
              <li className="inline-block w-1/2 mt-3 cursor-pointer">
                <Link className="link" to="/blogs?category=Tech">
                  Tech
                </Link>
              </li>
              <li className="inline-block w-1/2 mt-3 cursor-pointer">
                <Link className="link" to="/blogs?category=Health">
                  Health
                </Link>
              </li>
            </ul>
          </div>
          <hr/>
        </div>
      );
}

export default Sidebar
