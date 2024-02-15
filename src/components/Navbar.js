// import logo from './logo.jpg';
import { Link } from 'react-router-dom';
import logo from '../likLogo.png';
import { Close, Email, Instagram, LinkedIn, Menu } from '@mui/icons-material';
import MenuNav from './Menu';
import { IconButton } from '@mui/material';
import { useState } from 'react';


function Navbar() {

  const [activeMenu, setActiveMenu] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuHover = (menu) => {
    setActiveMenu(menu);
  };

  const handleNavMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    
      <header className="flex items-center justify-between text-white px-5 sm:px-10 fixed z-40 bg-black-500 w-full">
        <div className='flex items-center gap-5 cursor-pointer'>
            <Link to='/'><img src={logo} className="w-10 h-10 sm:w-20 sm:h-20" alt="logo" /></Link>
            <p className='hidden sm:flex hover:text-blue-500'>LIK ARCHITECTS</p>
        </div>

        <MenuNav />

        <div className="lg:hidden">

          <div
              className="pr-8 mt-2"
              onClick={handleNavMenu}
            >
              <Menu className='lg:mb-3' />

          {(isMenuOpen) && (
            <div
              className="absolute bg-white shadow text-left rounded-lg p-3 h-screen ml-[-90px] w-full top-0"
             >
              <div className='mb-3 ml-[100px]'>
                  <IconButton
                        edge="start"
                        color="inherit"
                        onClick={handleNavMenu}
                        aria-label="close"
                      >
                        <Close className='black' />
                  </IconButton>
              </div>

                    <div
                        onMouseEnter={() => handleMenuHover('aboutNav')}
                        onMouseLeave={() => handleMenuHover(null)}
                      >
                        <p className={`${activeMenu === 'aboutNav' ? 'text-blue-500' : 'text-black'} pb-3`}>About</p>
                        {activeMenu === 'aboutNav' && (
                          <div className="absolute bg-white shadow text-left p-4 rounded-lg ml-[-180px]">
                            <ul>
                              <Link to="/about-us/#weAre">
                                <li className="hover:text-blue">
                                  <p>Who we are?</p>
                                </li>
                              </Link>
                              <Link to="/about-us/#makesUnique">
                                <li className="hover:text-blue py-5">
                                  <p>What makes us unique?</p>
                                </li>
                              </Link>
                              <Link to="/about-us/#ourTeam">
                                <li className="hover:text-blue">
                                    <p>Meet the team!</p>
                                </li>
                              </Link>
                            </ul>
                          </div>
                        )}
                      </div>

                      <div
                          onMouseEnter={() => handleMenuHover('servicesNav')}
                          onMouseLeave={() => handleMenuHover(null)}
                        >
                          <p className={`${activeMenu === 'servicesNav' ? 'text-blue-500' : 'text-black'} pb-3`}>Services</p>
                          {activeMenu === 'servicesNav' && (
                            <div className="absolute bg-white shadow text-left p-4 rounded-lg ml-[-160px]">
                              <ul>
                              <li className="hover:text-blue">
                                <Link to="/services#architectural">
                                  <p>Architectural Design</p>
                                </Link>
                              </li>
                              <li className="hover:text-blue pt-5">
                                <Link to="/services/#interior">
                                  <p>Interior Design</p>
                                </Link>
                              </li>
                              <li className="hover:text-blue pt-5">
                                <Link to="/services/#construction">
                                  <p>Construction Works</p>
                                </Link>
                              </li>
                              <li className="hover:text-blue pt-5">
                                <Link to="/services/#finishing">
                                  <p>Finishing Works</p>
                                </Link>
                              </li>
                              </ul>
                            </div>
                          )}
                  </div>

                  <div 
                    onMouseEnter={() => handleMenuHover('portfolioNav')}
                    onMouseLeave={() => handleMenuHover(null)}
                  >
                      <Link to="/projects"><p className={`${activeMenu === 'portfolioNav' ? 'text-blue-500' : 'text-black'} pb-3`}>Portfolio</p></Link>
                  </div>

                  <div 
                    onMouseEnter={() => handleMenuHover('contactNav')}
                    onMouseLeave={() => handleMenuHover(null)}
                  >
                      <Link to="/contact-us"><p className={`${activeMenu === 'contactNav' ? 'text-blue' : 'text-black'}`}>Contact Us</p></Link>
                  </div>

            </div>
            )}

        </div>
        </div>
        
        {/* <nav className='hidden sm:flex justify-center gap-10 cursor-pointer'>
            <p>About</p>
            <p>Services</p>
            <p>Portfolio</p>
            <p>Contact-Us</p>
            <div className='flex gap-5 cursor-pointer'>
              <a href='https://www.linkedin.com/in/lik-architects?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app'><div className='cursor-pointer'><LinkedIn /></div></a>
              <a href='https://www.instagram.com/likawunt1?igsh=YTQwZjQ0NmI0OA%3D%3D&utm_source=qr'><div className='cursor-pointer'><Instagram /></div> </a>
              <a href='mailto:Likawunt100@gmail.com'><div className='cursor-pointer'><Email /></div></a>
            </div>
        </nav> */}

        {/* <div className='sm:hidden cursor-pointer'><Menu /></div> */}
       
        
      </header>
  );
}

export default Navbar;
