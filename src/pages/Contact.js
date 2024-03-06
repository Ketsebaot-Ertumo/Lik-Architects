import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import { toast } from 'react-toastify';
import { Email, Facebook, Instagram, LinkedIn, Smartphone } from '@mui/icons-material';
import { FaTiktok } from "react-icons/fa";
import Footer from '../components/Footer';
import axios from 'axios';




const Contact= () => {

    const url = process.env.REACT_APP_url;

    // Create a global Axios instance with the desired default configuration
    axios.defaults.withCredentials = true;

    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
      

    const [formData, setFormData] = useState({
        nameInput: '',
        emailInput: '',
        phoneInput: '',
        companyInput: '',
        servicesInput: '',
        scheduleInput: '',
      });
    
      const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevFormData) => ({
          ...prevFormData,
          [name]: value,
        }));
      };
    
      const handleSubmit = async (event) => {
        event.preventDefault();

        //send form data with email
        try {
            const response = await axios.post(`${url}/send-email`, {formData});
            if (response.status === 200) {
              toast.success('Email sent successfully!');
              console.log('Email sent successfully!')
            } else {
              toast.error(response.data.message || response.data.error);
              console.log(response.data.message || response.data.error)
            }
          } catch (error) {
            console.error(error);
            toast.error('Error occurred while sending email');
          }
        
    
        // Clear the form inputs
        setFormData({
            nameInput: '',
            emailInput: '',
            phoneInput: '',
            companyInput: '',
            servicesInput: '',
            scheduleInput: '',
        });
      };


    return (
        <>
        
          <Navbar  />

            <div className={`bg-gray-300 text-black pt-20`}>

                <div className='p-5 pb-10 md:pl-10 font-medium'>Contact Us</div>
                <p className='text-justify pl-5 md:pl-10 mr-1 font-medium text-lg md:text-lg dm-serif-text'>Let us help you become even greater at what you do.<br/>Fill out the following form and we will get back to you soon.</p>
        
                <div className="md:flex mt-5 md:pl-5 sm:mt-10 text-black">

                     <form onSubmit={handleSubmit}>
                            <div className="sm:m-5 p-5 sm:mt-10 pt-10 w-full sm:w-[120%] bg-black-500 rounded-lg border border-black-500 border-opacity-5">
                                <div className=" mb-10 flex relative">
                                    <div className="absolute w-12 h-7 rounded-2xl border border-white text-white font-medium font-['Inter'] text-center justify-center">01</div>
                                    <div className='ml-[18%] sm:ml-[10%] w-[120%]'>
                                        <div className="text-white text-lg sm:text-2xl font-normal font-['Inter']">What is your name?</div>
                                        <div className="text-white text-opacity-60 font-normal font-['Inter'] pt-5">
                                            <input 
                                                type="text" 
                                                id="name-input" 
                                                placeholder="Type your full name" 
                                                className='bg-transparent border-b border-white pb-4 w-full'
                                                name="nameInput"
                                                value={formData.nameInput}
                                                onChange={handleInputChange} 
                                                required
                                            />
                                        </div>
                                    </div>   
                                </div>
                                <div className="mb-10 flex relative">
                                    <div className="absolute w-12 h-7 rounded-2xl border border-white text-white font-medium font-['Inter'] text-center justify-center">02</div>
                                    <div className='ml-[18%] sm:ml-[10%] w-full'>
                                        <div className="text-white text-lg sm:text-2xl font-normal font-['Inter']">What is your email address?</div>
                                        <div className="text-white text-opacity-60 font-normal font-['Inter'] pt-5">
                                            <input 
                                                type="email" 
                                                id="email-input"
                                                placeholder="youremail@gmail.com" 
                                                className='bg-transparent border-b border-white pb-4 w-full' 
                                                name="emailInput"
                                                value={formData.emailInput}
                                                onChange={handleInputChange}
                                                required
                                            />
                                        </div>
                                    </div>   
                                </div>
                                <div className=" mb-10 flex relative">
                                    <div className="absolute w-12 h-7 rounded-2xl border border-white text-white font-medium font-['Inter'] text-center justify-center">03</div>
                                    <div className='ml-[18%] sm:ml-[10%] w-[120%]'>
                                        <div className="text-white text-lg sm:text-2xl font-normal font-['Inter']">What is your phone number?</div>
                                        <div className="text-white text-opacity-60 font-normal font-['Inter'] pt-5">
                                            <input 
                                                type="tel" 
                                                id="phone-input"
                                                placeholder="+251941862115" 
                                                className='bg-transparent border-b border-white pb-4 w-full'
                                                name="phoneInput"
                                                value={formData.phoneInput}
                                                onChange={handleInputChange} 
                                                required
                                            />
                                        </div>
                                    </div>   
                                </div>
                                <div className="mb-10 flex relative">
                                    <div className="absolute w-12 h-7 rounded-2xl border border-white text-white font-medium font-['Inter'] text-center justify-center">04</div>
                                    <div className='ml-[18%] sm:ml-[10%] w-[120%]'>
                                        <div className="text-white text-lg sm:text-2xl font-normal font-['Inter']">What is your organization/company name?(optional)</div>
                                        <div className="text-white text-opacity-60 font-normal font-['Inter'] pt-5">
                                            <input 
                                                type="text" 
                                                id="company-input" 
                                                placeholder="Type your company name if you have" 
                                                className='bg-transparent border-b border-white pb-4 w-full'
                                                name="companyInput"
                                                value={formData.companyInput}
                                                onChange={handleInputChange}
                                            />
                                        </div>
                                    </div>   
                                </div>
                                <div className=" mb-10 flex relative">
                                    <div className="absolute w-12 h-7 rounded-2xl border border-white text-white font-medium font-['Inter'] text-center justify-center">05</div>
                                    <div className='ml-[18%] sm:ml-[10%] w-[120%]'>
                                        <div className="text-white text-lg sm:text-2xl font-normal font-['Inter']">What services are you looking for?</div>
                                        <div className="text-white text-opacity-60 font-normal font-['Inter'] pt-5">
                                            <select id="services-input" name="servicesInput" value={formData.servicesInput} onChange={handleInputChange}  required className='bg-black-500 border-b border-white pb-4 w-full'>
                                                <option value="">choose from a list here</option>
                                                <option value="Frontend development">Architectural Design</option>
                                                <option value="Backend development">Interior Design</option>
                                                <option value="Fullstack development">Construction Works</option>
                                                <option value="Marketing Manager">Finishing Works</option>
                                                <option value="Call center agent">Construction Supervission</option>
                                                <option value="Other">Other</option>
                                            </select>
                                        </div>
                                        {formData.servicesInput === 'Other' && ( // Conditionally render the input field for "Other"
                                            <div>
                                                <input
                                                    type="text"
                                                    id="services-input-other"
                                                    name="servicesInputOther"
                                                    placeholder='Please enter your services looking for:'
                                                    value={formData.servicesInputOther}
                                                    onChange={handleInputChange}
                                                    className="text-white text-opacity-60 font-normal font-['Inter'] pt-5 bg-transparent border-b border-white pb-4 pt-5 ml-10 w-full"
                                                    required
                                                />
                                            </div>
                                        )}
                                    </div>   
                                </div>
                                <div className=" mb-10 flex relative">
                                    <div className="absolute w-12 h-7 rounded-2xl border border-white text-white font-medium font-['Inter'] text-center justify-center">06</div>
                                    <div className='ml-[18%] sm:ml-[10%] w-[120%]'>
                                        <div className="text-white text-lg sm:text-2xl font-normal font-['Inter']">What is your available time schedule?</div>
                                        <div className="text-white text-opacity-60 font-normal font-['Inter'] pt-5">
                                            <input 
                                                type="date" 
                                                id="schedule-input" 
                                                className="text-white text-opacity-60 font-normal font-['Inter'] bg-transparent border-b border-white w-full pb-4" 
                                                name="scheduleInput"
                                                value={formData.scheduleInput}
                                                onChange={handleInputChange}
                                                required
                                            />
                                        </div>
                                    </div>   
                                </div>

                                <div className="flex justify-center items-center my-10 mt-20 xs:mb-2 sm:mb-2 font-[Inter]">
                                    <button className="text-center bg-green-400 text-white rounded w-60 h-10 font-dm-serif-text text-2xl">Submit</button>
                                </div>
                            </div>
                        </form>

                        <div className='p-5 mt-10 sm:ml-80 font-medium'>
                            <p className='text-blue-black text-xl text-opacity-80'>CALL US</p>
                            <div className='p-5'>
                                <div className='flex gap-2'><Smartphone />+251941862115</div>
                                <div className='flex gap-2'><Smartphone />+251922752178</div>
                                {/* <div className='flex gap-2'><Email /><a href="mailto:likawunt100@gmail.com">contact@likarchitects.com</a></div> */}
                            </div>

                            <p className='text-blue-black text-xl text-opacity-80'>ADDRESS </p>
                            <div className='p-5'>
                                <p>Piassa,<br/>Nib International Building, 4th floor,<br/>Hawassa, Ethiopia.</p>
                            </div>

                            <div className='flex items-center justify-between text-lg font-inter mt-10 mb-20'>
                                <a className='hover:text-gray-500' href='mailto:likawunt100@gmail.com'><Email /></a>
                                <a className='hover:text-gray-500' href='https://www.linkedin.com/in/lik-architects?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app'><LinkedIn /></a>
                                <a className='hover:text-gray-500' href='https://www.instagram.com/likawunt1?igsh=YTQwZjQ0NmI0OA%3D%3D&utm_source=qr'><Instagram /></a>
                                <a href='https://www.tiktok.com/@likarchitects?_t=8jqITq4x6Ji&_r=1' className='pt-2 hover:text-gray-500'><FaTiktok /></a>
                                <a href='https://www.facebook.com/likawunt1?mibextid=LQQJ4d' className='hover:text-gray-500'><Facebook /></a>
                            </div>
                        </div>
                </div>
            </div>

            <Footer />
        </>
    );
}

export default Contact