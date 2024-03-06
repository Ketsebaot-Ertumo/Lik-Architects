import React from 'react';
import logo from '../likLogo.png';
// import logo from '../logo.jpg';
import { FaTiktok } from 'react-icons/fa';
import { Email, Instagram, LinkedIn, Facebook, Smartphone } from '@mui/icons-material';
import { Link } from 'react-router-dom';

const Footer = () => {

    return (
        <>
            <div className='bg-gray-800 text-white'>

            <div className='hidden md:flex justify-between p-10 lg:px-20 text-lg'>
                <div className='justify-center items-center'>
                        <img className="w-20 h-20" src={logo} alt='Lik Architects' />
                        <div className='text-4xl font-inter font-bold my-10 w-[60%]'>
                            <p>“We Build Your Dream!”</p>
                        </div>
                        <div>
                            <p className='font-semibold pb-2'>Connect with Us</p>
                            <div className='opacity-60'>
                                <div className='flex gap-2'><Smartphone />+251941862115</div>
                                <div className='flex gap-2'><Smartphone />+251922752178</div>
                            </div>
                        </div>
                        
                        <div className='flex items-center justify-between text-lg font-inter mt-1'>
                            <div className='flex justify-between gap-5'>
                                <a className='hover:text-gray-500' href='mailto:likawunt100@gmail.com'><Email /></a>
                                <a className='hover:text-gray-500' href='https://www.linkedin.com/in/lik-architects?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app'><LinkedIn /></a>
                                <a className='hover:text-gray-500' href='https://www.instagram.com/likawunt1?igsh=YTQwZjQ0NmI0OA%3D%3D&utm_source=qr'><Instagram /></a>
                                <a href='https://www.tiktok.com/@likarchitects?_t=8jqITq4x6Ji&_r=1' className='pt-2 hover:text-gray-500'><FaTiktok /></a>
                                <a href='https://www.facebook.com/likawunt1?mibextid=LQQJ4d' className='hover:text-gray-500'><Facebook /></a>
                            </div>
                        </div>
                </div>

                <div>
                        <p className='font-bold text-2xl pb-5 pt-10'>Services</p>
                        <div className='opacity-60'>
                            <Link to='/services/#architectural'><p className='hover:text-gray-500'>Architectural Design</p></Link>
                            <Link to='/services/#interior'><p className='py-1 hover:text-gray-500'>Interior Design</p></Link>
                            <Link to='/services/#construction'><p className='hover:text-gray-500'>Construction Works</p></Link>
                            <Link to='/services/#finishing'><p className='py-1 hover:text-gray-500'>Finishing Works</p></Link>
                            <Link to='/services/#supervission'><p className='hover:text-gray-500'>Construction Supervission</p></Link>
                        </div>
                </div>

                <div className='pr-10'>
                        <p className='font-bold text-2xl pb-5 pt-10'>Company</p>
                        <div className='opacity-60'>
                            <Link to='/about-us'><p className='hover:text-gray-500'>About Us</p></Link>
                            <Link to='/portfolio'><p className='py-1 hover:text-gray-500'>Portfolio</p></Link>
                            <Link to='/contact-us'><p className='hover:text-gray-500'>Contact Us</p></Link>
                        </div>
                </div>

                <div>
                        <p className='font-bold text-2xl pb-5 pt-10'>Social</p>
                        <div className='opacity-60'>
                            <a className='hover:text-gray-500' href='mailto:likawunt100@gmail.com'><p>Email</p></a>
                            <a className='hover:text-gray-500 py-1' href='https://www.linkedin.com/in/lik-architects?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app'><p>LinkedIn</p></a>
                            <a className='hover:text-gray-500' href='https://www.instagram.com/likawunt1?igsh=YTQwZjQ0NmI0OA%3D%3D&utm_source=qr'><p>Instagram</p></a>
                            <a href='https://www.tiktok.com/@likarchitects?_t=8jqITq4x6Ji&_r=1' className='pt-3 pb-1 hover:text-gray-500'><p>Tiktok</p></a>
                            <a className='hover:text-gray-500 pt-1' href='https://www.facebook.com/likawunt1?mibextid=LQQJ4d'><p>Facebook</p></a>
                        </div>
                </div>

            </div>

            <div className="text-center sm:text-right text-white text-opacity-40 md:text-lg font-normal font-['Inter'] sm:mr-20 py-5 sm:py-10">
                <p>©<span>{new Date().getFullYear()}</span> Lik Architects. All rights reserved.</p>
            </div>

            </div>
        </>
);
};

export default Footer;

