import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import image from '../images/photo1707462299.jpeg';
import image2 from '../images/IMG_0069.JPG';
import image3 from '../images/IMG_0068.JPG';
import image4 from '../images/IMG_3138.JPG';
import image5 from '../images/IMG_3778.JPG';



const Services = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);


    return (
        <>
            <div>
                <Navbar  />
            </div>

            <div className={`bg-gray-300 text-black sm:text-xl sm:font-medium font-inter`}>

                <div className='sm:flex items-center justify-center gap-10 mb-20'>
                    <div className="relative">
                        <img className='sm:h-[458px]' src={image} alt='service-1' />
                        <div className="w-full h-[122px] left-0 bottom-0 absolute bg-black bg-opacity-40"></div>
                        <div className="sm:w-522 sm:left-[0px] right-0 bottom-[20px] absolute text-white text-xl font-medium font-inter pl-2">Architectural Design<br/>Inclusive program extends warm welcome to our company founder.</div>
                    </div>
                    <div className=''>
                        <div className='sm:flex justify-start items-end sm:gap-5'>
                            <div className="relative">
                                <img className='w-full sm:w-[294px] h-full sm:h-[217px]' src={image5} alt='service-2' />
                                    <div className="absolute w-full h-[122px] left-0 bottom-0  bg-black bg-opacity-40"></div>
                                    <div className="sm:w-[286px] w-full h-[83px] right-0 bottom-[20px] absolute text-white text-xl font-medium font-inter pl-2 sm:pl-5">Interior Design<br/>Founder welcomed through inclusive program.</div>
                            </div>
                            <div className="relative">
                                <img className='w-[423px] h-[311px] pt-5 sm:pt-0' src={image2} alt='service-3' />
                                <div className="w-full h-[122px] left-0 bottom-0 absolute bg-black bg-opacity-40"></div>
                                <div className="w-full right-0 bottom-[20px] absolute text-white text-xl font-medium font-inter pl-2">Construction Works<br/>Inclusive program extends warm welcome to our company founder.</div>
                            </div>
                        </div>
                        <div className='sm:flex justify-start items-end sm:space-x-5 pt-5'>
                                <div className="relative ">
                                    <img className='sm:w-[423px] w-full h-[305px]' src={image3} alt='service-4' />
                                    <div className="w-full h-[122px] left-0 bottom-0 absolute bg-black bg-opacity-40"></div>
                                    <div className="w-full right-0 bottom-[20px] absolute text-white text-xl font-medium font-inter pl-2">Finishing Works<br/>Inclusive program extends warm welcome to our company founder.</div>
                                </div>
                                <div className="relative ">
                                    <img className='sm:w-[423px] w-full h-[305px] pt-5 sm:pt-0' src={image4} alt='service-5' />
                                    <div className="absolute w-full h-[122px] left-0 bottom-0 bg-black bg-opacity-40"></div>
                                    <div className="absolute w-full right-0 bottom-[20px] text-white text-xl font-medium font-inter pl-2">Construction Supervission<br/>Inclusive program extends warm welcome to our company founder.</div>
                                </div>
                        </div>
                    </div>
                </div>
                    

                <div className="flex justify-center items-center py-10 sm:py-20 font-[Inter]">
                    <Link to="/contact-us"><button className="text-center bg-green-400 text-white rounded w-60 h-10 font-dm-serif-text text-2xl">Contact Us</button></Link>
                </div>  

            <Footer />

            </div>
             
        </>
    );
}

export default Services