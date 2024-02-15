import React from 'react';
import logo from '../likLogo.png';
// import logo from '../logo.jpg';
import { FaTiktok } from 'react-icons/fa';
import { Email, Instagram, LinkedIn, Facebook } from '@mui/icons-material';
import { Link } from 'react-router-dom';

const Footer = () => {

    return (
        <>
            <div className='bg-black-500'>

            <div className='hidden md:flex justify-between p-10 px-20 text-lg mt-10'>
                <div className='justify-center items-center'>
                        <img className="w-10 h-10 sm:w-20 sm:h-20" src={logo} alt='Lik Architects' />
                        <div className='text-4xl font-inter font-bold my-10 w-[90%]'>
                            <p>“We Build Your Dream!”</p>
                        </div>
                        <div>
                            <p className='font-semibold'>Connect with Us</p>
                            <div className='opacity-60'>
                                <p className='hover:text-blue-500'>+251941862115</p>
                                <p className='hover:text-blue-500'>+251922752178</p>
                            </div>
                        </div>
                        
                        <div className='flex items-center justify-between text-lg font-inter mt-1'>
                            <div className='flex justify-between gap-5'>
                                <a className='hover:text-blue-500' href='mailto:Likawunt100@gmail.com'><Email /></a>
                                <a className='hover:text-blue-500' href='https://www.linkedin.com/in/lik-architects?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app'><LinkedIn /></a>
                                <a className='hover:text-blue-500' href='https://www.instagram.com/likawunt1?igsh=YTQwZjQ0NmI0OA%3D%3D&utm_source=qr'><Instagram /></a>
                                <a href='https://www.tiktok.com/@likarchitects?_t=8jqITq4x6Ji&_r=1' className='pt-2 hover:text-blue-500'><FaTiktok /></a>
                                <a href='https://www.facebook.com/likawunt1?mibextid=LQQJ4d' className='hover:text-blue-500'><Facebook /></a>
                            </div>
                        </div>
                </div>

                <div>
                        <p className='font-bold text-2xl pb-5 pt-10'>Services</p>
                        <div className='opacity-60'>
                            <Link to='/services'><p>Architectural Design</p></Link>
                            <Link to='/services'><p className='py-1'>Interior Design</p></Link>
                            <Link to='/services'><p>Construction Works</p></Link>
                            <Link to='/services'><p className='py-1'>Finishing Works</p></Link>
                            <Link to='/services'><p>Construction Supervission</p></Link>
                        </div>
                </div>

                <div>
                        <p className='font-bold text-2xl pb-5 pt-10'>Company</p>
                        <div className='opacity-60'>
                            <Link to='/about-us'><p>About Us</p></Link>
                            <Link to='/portfolio'><p className='py-1'>Portfolio</p></Link>
                            <Link to='/contact-us'><p>Contact Us</p></Link>
                        </div>
                </div>

                <div>
                        <p className='font-bold text-2xl pb-5 pt-10'>Social</p>
                        <div className='opacity-60'>
                            <a className='hover:text-blue-500' href='mailto:Likawunt100@gmail.com'><p>Email</p></a>
                            <a className='hover:text-blue-500 py-1' href='https://www.linkedin.com/in/lik-architects?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app'><p>LinkedIn</p></a>
                            <a className='hover:text-blue-500' href='https://www.instagram.com/likawunt1?igsh=YTQwZjQ0NmI0OA%3D%3D&utm_source=qr'><p>Instagram</p></a>
                            <a href='https://www.tiktok.com/@likarchitects?_t=8jqITq4x6Ji&_r=1' className='pt-3 pb-1 hover:text-blue-500'><p>Tiktok</p></a>
                            <a className='hover:text-blue-500 pt-1' href='https://www.facebook.com/likawunt1?mibextid=LQQJ4d'><p>Facebook</p></a>
                        </div>
                </div>

            </div>

            <div className="text-right text-white text-opacity-50 text-lg font-normal font-['Inter'] mr-40 p-5 sm:pb-10 ">
                <p>© <span>{new Date().getFullYear()}</span> Lik Architects. All rights reserved.</p>
            </div>
            </div>
        </>
);
};

export default Footer;

