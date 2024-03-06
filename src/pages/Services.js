import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import { Link, useLocation } from 'react-router-dom';
import Footer from '../components/Footer';
import image from '../images/photo1707462299.jpeg';
import image2 from '../images/IMG_0069.JPG';
import image3 from '../images/IMG_0068.JPG';
import image4 from '../images/IMG_3138.JPG';
import image5 from '../images/IMG_3778.JPG';
import imageBg from '../images/testImg.png';



const Services = () => {

    const location = useLocation();

    useEffect(() => {
      const hash = location.hash;
      if (hash) {
        const section = document.querySelector(hash);
        if (section) {
          const elementOffsetTop = section.offsetTop;
          const shiftAmount = 100;
          const scrollPosition = elementOffsetTop - shiftAmount;
          window.scrollTo({ top: scrollPosition, behavior: 'smooth' });
        }
      }
    }, [location]);

    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);


    return (
        <>
            
            <Navbar  />

            <div className={`bg-gray-300 pt-20 text-black sm:text-lg font-inter`}>

                <div className='pl-5 sm:pl-10 pb-2 sm:pb-5 p-5 font-medium'>Services</div>
                <img className='w-full h-40' src={imageBg} alt='' />
                
                <div className='p-10'>
                    <div id='architectural' className='text-3xl sm:text-5xl pb-10 font-medium'>Architectural<br/>Design</div>
                    <div className='flex justify-between gap-10'>
                        <div className='md:w-[600px]'>
                            <p>Our architectural design works showcase our expertise in crafting visually stunning and functional structures. With meticulous attention to detail, our team of architects brings together innovative concepts, practical considerations, and artistic flair to create exceptional designs. From conceptualization to realization, we meticulously plan and organize space, materials, and aesthetics to deliver architectural marvels that leave a lasting impression. Our website content highlights our portfolio, showcasing our diverse range of projects and demonstrating our commitment to excellence. Through engaging descriptions, captivating visuals, and informative case studies, we invite visitors to explore our architectural design works and discover the unique solutions we offer.</p>
                            {/* <img src={image2} alt='' /> */}
                        </div>
                        <img className='w-[500px]' src={image2} alt='' />
                    </div>
                </div>  

                <div className='p-10'>
                    <div id='interior' className='text-3xl sm:text-5xl pb-10 font-medium'>Interior Design</div>
                    <div className='flex justify-between gap-10'>
                        <div className='md:w-[600px]'>
                            <p>Interior design works on our expertise in creating beautiful and functional living spaces. With a meticulous approach, our team of interior designers combines creativity, practicality, and client preferences to transform houses into personalized havens. From concept development to material selection and furniture arrangement, we curate every element to harmonize with the overall design aesthetic. Through our website content, we showcase our portfolio of interior house design works, featuring stunning visuals and detailed descriptions that highlight our attention to detail and commitment to creating inviting and stylish homes. Visitors to our website can explore our interior house design works and envision the possibilities of transforming their own homes into spaces that reflect their unique taste and lifestyle.</p>
                        </div>
                        <img className='w-[500px]' src={image2} alt='' />
                    </div>
                </div>

                <div className='p-10 pt-20'>
                    <div id='construction' className='text-3xl sm:text-5xl pb-10 font-medium'>Construction<br/>Works</div>
                    <div className='flex justify-between gap-10'>
                        <div className='md:w-[600px]'>
                            <p>Interior design works on our expertise in creating beautiful and functional living spaces. With a meticulous approach, our team of interior designers combines creativity, practicality, and client preferences to transform houses into personalized havens. From concept development to material selection and furniture arrangement, we curate every element to harmonize with the overall design aesthetic. Through our website content, we showcase our portfolio of interior house design works, featuring stunning visuals and detailed descriptions that highlight our attention to detail and commitment to creating inviting and stylish homes. Visitors to our website can explore our interior house design works and envision the possibilities of transforming their own homes into spaces that reflect their unique taste and lifestyle.</p>
                        </div>
                        <img className='w-[500px]' src={image2} alt='' />
                    </div>
                </div>

                <div className='p-10 pt-20'>
                    <div id='finishing' className='text-3xl sm:text-5xl pb-10 font-medium'>Finishing Works</div>
                    <div className='flex justify-between gap-10'>
                        <div className='md:w-[600px]'>
                            <p>Interior design works on our expertise in creating beautiful and functional living spaces. With a meticulous approach, our team of interior designers combines creativity, practicality, and client preferences to transform houses into personalized havens. From concept development to material selection and furniture arrangement, we curate every element to harmonize with the overall design aesthetic. Through our website content, we showcase our portfolio of interior house design works, featuring stunning visuals and detailed descriptions that highlight our attention to detail and commitment to creating inviting and stylish homes. Visitors to our website can explore our interior house design works and envision the possibilities of transforming their own homes into spaces that reflect their unique taste and lifestyle.</p>
                        </div>
                        <img className='w-[500px]' src={image2} alt='' />
                    </div>
                </div>

                <div className='p-10 pt-20'>
                    <div id='supervission' className='text-3xl sm:text-5xl pb-10 font-medium'>Construction<br/>Supervission</div>
                    <div className='flex justify-between gap-10'>
                        <div className='md:w-[600px]'>
                            <p>Interior design works on our expertise in creating beautiful and functional living spaces. With a meticulous approach, our team of interior designers combines creativity, practicality, and client preferences to transform houses into personalized havens. From concept development to material selection and furniture arrangement, we curate every element to harmonize with the overall design aesthetic. Through our website content, we showcase our portfolio of interior house design works, featuring stunning visuals and detailed descriptions that highlight our attention to detail and commitment to creating inviting and stylish homes. Visitors to our website can explore our interior house design works and envision the possibilities of transforming their own homes into spaces that reflect their unique taste and lifestyle.</p>
                        </div>
                        <img className='w-[500px]' src={image2} alt='' />
                    </div>
                </div>


                <div className="flex justify-center items-center py-10 sm:py-20 font-[Inter]">
                    <Link to="/contact-us"><button className="text-center bg-green-400 text-white rounded-lg w-60 h-10 font-dm-serif-text text-2xl">Contact Us</button></Link>
                </div> 
                {/* <div className="flex justify-center items-center py-10 sm:py-20 font-[Inter]">
                    <Link to="/contact-us"><button className="text-center bg-gradient-to-r from-white to-yellow-200 rounded-lg text-black w-60 h-10 font-dm-serif-text text-2xl">Contact Us</button></Link>
                </div>  */}
            </div> 

            <Footer />
             
        </>
    );
}

export default Services













// import React, { useEffect } from 'react';
// import Navbar from '../components/Navbar';
// import { Link } from 'react-router-dom';
// import Footer from '../components/Footer';
// import image from '../images/photo1707462299.jpeg';
// import image2 from '../images/IMG_0069.JPG';
// import image3 from '../images/IMG_0068.JPG';
// import image4 from '../images/IMG_3138.JPG';
// import image5 from '../images/IMG_3778.JPG';



// const Services = () => {

//     useEffect(() => {
//         window.scrollTo(0, 0);
//       }, []);


//     return (
//         <>
//             <div>
//                 <Navbar  />
//             </div>

//             <div className={`bg-gray-400 pt-20 text-black sm:text-xl sm:font-medium font-inter`}>

//                 <div className='pl-5 sm:pl-12 pb-2 sm:py-5 p-1'>Services</div>
//                 <div className='p-5 sm:pl-12'>Aygdiasxgu padsggGUSSPHI xoas iuga9sxg9q8w ixguq9ewq8xausxgsoal gxiy ixaq9 yiq8ex. xy8feq6y 8f9ceeeeeeeeee6crrcwxasgjhsx.gyuxfyuaxfyasfyasyuxfyxq fue yucdw fuyyyyyceyfudfyu uywdfyuxe yufwcweiucd. gicdwfwe 78cge uwcdfyusd vuysdcsyc vucfuquice.</div>

//                 <div className='sm:flex items-center justify-center gap-10 pt-5'>
//                     <div className="relative">
//                         <img className='sm:h-[458px]' src={image} alt='service-1' />
//                         <div className="w-full h-[122px] left-0 bottom-0 absolute bg-black bg-opacity-40"></div>
//                         <div className="sm:w-522 sm:left-[0px] right-0 bottom-[20px] absolute text-white text-xl font-medium font-inter pl-2">Architectural Design<br/>Inclusive program extends warm welcome to our company founder.</div>
//                     </div>
//                     <div className=''>
//                         <div className='sm:flex justify-start items-end sm:gap-5'>
//                             <div className="relative">
//                                 <img className='w-full sm:w-[294px] h-full sm:h-[217px]' src={image5} alt='service-2' />
//                                     <div className="absolute w-full h-[122px] left-0 bottom-0  bg-black bg-opacity-40"></div>
//                                     <div className="sm:w-[286px] w-full h-[83px] right-0 bottom-[20px] absolute text-white text-xl font-medium font-inter pl-2 sm:pl-5">Interior Design<br/>Founder welcomed through inclusive program.</div>
//                             </div>
//                             <div className="relative">
//                                 <img className='w-[423px] h-[311px] pt-5 sm:pt-0' src={image2} alt='service-3' />
//                                 <div className="w-full h-[122px] left-0 bottom-0 absolute bg-black bg-opacity-40"></div>
//                                 <div className="w-full right-0 bottom-[20px] absolute text-white text-xl font-medium font-inter pl-2">Construction Works<br/>Inclusive program extends warm welcome to our company founder.</div>
//                             </div>
//                         </div>
//                         <div className='sm:flex justify-start items-end sm:space-x-5 pt-5'>
//                                 <div className="relative ">
//                                     <img className='sm:w-[423px] w-full h-[305px]' src={image3} alt='service-4' />
//                                     <div className="w-full h-[122px] left-0 bottom-0 absolute bg-black bg-opacity-40"></div>
//                                     <div className="w-full right-0 bottom-[20px] absolute text-white text-xl font-medium font-inter pl-2">Finishing Works<br/>Inclusive program extends warm welcome to our company founder.</div>
//                                 </div>
//                                 <div className="relative ">
//                                     <img className='sm:w-[423px] w-full h-[305px] pt-5 sm:pt-0' src={image4} alt='service-5' />
//                                     <div className="absolute w-full h-[122px] left-0 bottom-0 bg-black bg-opacity-40"></div>
//                                     <div className="absolute w-full right-0 bottom-[20px] text-white text-xl font-medium font-inter pl-2">Construction Supervission<br/>Inclusive program extends warm welcome to our company founder.</div>
//                                 </div>
//                         </div>
//                     </div>
//                 </div>
                    

//                 <div className="flex justify-center items-center py-10 sm:py-20 font-[Inter]">
//                     <Link to="/contact-us"><button className="text-center bg-green-400 text-white rounded w-60 h-10 font-dm-serif-text text-2xl">Contact Us</button></Link>
//                 </div>  

//             <Footer />

//             </div>
             
//         </>
//     );
// }

// export default Services