import { Email, Instagram, LinkedIn } from '@mui/icons-material';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Menu = () => {
  const [activeMenu, setActiveMenu] = useState(null);
  const location = useLocation();

  useEffect(() => {
    // Update active menu based on the current page
    const path = location.pathname;
    if (path.startsWith('/about')) {
      setActiveMenu('about');
    } else if (path.startsWith('/services')) {
      setActiveMenu('service');
    } else if (path.startsWith('/projects')) {
      setActiveMenu('project');
    } else if (path.startsWith('/contact-us')) {
      setActiveMenu('contact');
    } else {
      setActiveMenu(null);
    }
  }, [location]);

  const handleMenuHover = (menu) => {
    setActiveMenu(menu);
  };


  return (
    <div>
        <div className="mt-5 cursor-pointer text-black">
            <nav className="space-x-8 hidden xs:hidden sm:hidden lg:flex text-center text-base font-inter text-md">
              <div
                onMouseEnter={() => handleMenuHover('aboutNav')}
                onMouseLeave={() => handleMenuHover(null)}
                >
                <p className={`${(activeMenu === 'aboutNav' || activeMenu === 'about') ? 'text-blue-500' : 'text-white'} pb-3`}>About</p>
                {activeMenu === 'aboutNav' && (
                    <div className="absolute bg-white shadow text-left p-4 rounded-lg">
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
                    <p className={`${(activeMenu === 'servicesNav' || activeMenu === 'service') ? 'text-blue-500' : 'text-white'} pb-3`}>Services</p>
                    {activeMenu === 'servicesNav' && (
                    <div className="absolute bg-white shadow text-left p-4 rounded-lg">
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
                    <Link to="/projects">
                        <p className={`${(activeMenu === 'portfolioNav' || activeMenu === 'projects') ? 'text-blue-500' : 'text-white'}`}>Portfolio</p>
                    </Link>
                </div>

                <div 
                    onMouseEnter={() => handleMenuHover('contactNav')}
                    onMouseLeave={() => handleMenuHover(null)}
                >
                    <Link to="/contact-us">
                        <p className={`${(activeMenu === 'contactNav' || activeMenu === 'contact') ? 'text-blue-500' : 'text-white'}`}>Contact Us</p>
                    </Link>
                </div>

                <div className='flex gap-5 cursor-pointer text-white'>
                    <a href='https://www.linkedin.com/in/lik-architects?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app'><div className='cursor-pointer'><LinkedIn /></div></a>
                    <a href='https://www.instagram.com/likawunt1?igsh=YTQwZjQ0NmI0OA%3D%3D&utm_source=qr'><div className='cursor-pointer'><Instagram /></div> </a>
                    <a href='mailto:Likawunt100@gmail.com'><div className='cursor-pointer'><Email /></div></a>
                </div>

            </nav>

        </div>
  </div>
  );
};

export default Menu;



