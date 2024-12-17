import { useState } from 'react';
import logo from '../assets/logo.png';
import arrow from '../assets/down-arrow.png';
import { RxCross2 } from "react-icons/rx";
import { FaBarsStaggered } from "react-icons/fa6";

const Navber = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className='shadow-sm xl:py-7 py-5'>
      <div className='max-w-[1440px] w-[95%] mx-auto'>
        <nav className='flex justify-between items-center'>
          {/* Logo */}
          <div>
            <img className='xl:w-[153px] lg:w-[120px] w-[100px]' src={logo} alt="logo" />
          </div>
          
          {/* Menu Items */}
          <div className='flex-grow px-10'>
            <ul
              className={`justify-center items-center gap-10 xl:flex hidden ${
                menuOpen ? 'block' : 'hidden'
              } xl:block`}
            >
              <li>Home</li>
              <li>For Business</li>
              <li>For Investors</li>
              <li>Financing Rates</li>
              <li className='flex gap-2'>
                Others <span className='mt-[10px]'><img src={arrow} alt="" /></span>
              </li>
            </ul>
          </div>

          {/* Buttons */}
          <div className='flex justify-between items-center'>
            <button className='font-medium text-primary mr-10 hidden xl:block'>
              Log In
            </button>
            <button className='bg-primary text-white xl:px-8 px-6 py-4 rounded-[42px] hidden xl:block'>
              Apply Now
            </button>
          </div>

          {/* Hamburger Menu for Mobile */}
          <div className='xl:hidden flex items-center'>
            <button
              className='text-primary font-medium mr-5'
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <RxCross2 className='text-2xl'/> : <FaBarsStaggered className='text-xl'/>}
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className='xl:hidden mt-4'>
            <ul className='flex flex-col items-center gap-5'>
              <li>Home</li>
              <li>For Business</li>
              <li>For Investors</li>
              <li>Financing Rates</li>
              <li className='flex gap-2'>
                Others <span><img className='mt-2' src={arrow} alt="" /></span>
              </li>
              <div className='mt-4'>
                <button className='font-medium text-primary mr-8'>
                  Log In
                </button>
                <button className='bg-primary text-white px-6 py-3 rounded-[42px]'>
                  Apply Now
                </button>
              </div>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navber;
