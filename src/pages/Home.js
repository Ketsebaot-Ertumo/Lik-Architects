import Navbar from "../components/Navbar";
import bg from "../images/bg.jpg"
import Footer from "../components/Footer";
import { useEffect, useState } from "react";
import Services from "../components/Services";
import img1 from '../images/photo1709040661.jpeg';
import img2 from '../images/IMG_0068.JPG';
import img3 from '../images/IMG_3778.JPG'
import img4 from '../images/IMG_3330.JPG'
import img5 from '../images/IMG_0216.JPG'
import Scroll from "../components/Scroll";
import founder from "../images/img1.png";
// import founder from '../images/founder.png';







function Home() {

    const [count, setCount] = useState(1);

    useEffect(() => {
      const interval = setInterval(() => {
        setCount(prevCount => prevCount + 1);
      }, 100);

      return () => clearInterval(interval);
    }, []);



    const phrase = "Architectural Excellence";
  const [letters, setLetters] = useState([]);

  useEffect(() => {
    const letterElements = phrase.split('').map((letter, index) => ({
      id: index,
      value: letter,
      isVisible: false
    }));

    setLetters(letterElements);
  }, [phrase]);

  useEffect(() => {
    const delay = 100; // Adjust delay between letters if needed

    letters.forEach((letter, index) => {
      setTimeout(() => {
        const updatedLetters = [...letters];
        updatedLetters[index].isVisible = true;
        setLetters(updatedLetters);
      }, index * delay);
    });
  }, [letters]);


  return (
    <>

        <div className="bg-black-500 h-screen text-white">
            <Navbar />
            
            <div className="relative sm:pt-10">
                <img className="w-full sm:h-[480px]" src={bg} alt="" />
                <div className="absolute p-2 sm:p-5 pl-4 sm:pl-10 w-[40%] top-[65px] sm:top-[140px] text-left">
                    <div className="text-2xl sm:text-5xl pb-5">
                        Architectural Excellence
                    </div>
                        {/* <div className="text-container">
                            {letters.map(letter => (
                                <span
                                key={letter.id}
                                className={`letter text-2xl sm:text-5xl pb-5 ${letter.isVisible ? 'show' : ''}`}
                                >
                                {letter.value}
                                </span>
                            ))}
                        </div> */}
                    
                    <p className="hidden sm:flex">Where vision meets precision, crafting spaces that inspire awe with impeccable design and impeccable execution.</p>
                    <a href="mailto:Likawunt100@gmail.com"><button className="bg-gradient-to-r from-white to-yellow-200 rounded-lg text-black p-2 sm:mt-5">Email Us</button></a>
                </div>
                
            </div>

            <div className="bg-gray-300 text-xl p-10 text-black">
                <div className="text-4xl sm:text-5xl py-5 font-semibold font-medium">About Us</div>
                <div className="md:flex justify-between">
                    <div className="sm:w-[50%] pt-5">Lik Architects is a comprehensive construction and design firm offering a range of services to cater to your architectural and interior design needs. Our team of skilled architects specializes in Architectural Design, creating functional and visually appealing structures that align with your specific requirements. We also provide Interior Design services, crafting captivating and functional spaces within buildings, paying attention to every detail from color schemes to furniture placement.<p className="md:pt-5">Lik Architects, Your comprehensive solution for architectural and interior design needs. Our skilled team creates functional, visually appealing structures and captivating spaces, tailored to your requirements.</p></div>    
                    <img className="sm:w-[500px] rounded-lg" src={img1} alt="About Us" />
                    {/* <img className="h-[400px]" src={founder} alt="Founder" /> */}
                </div>
            </div>

            <div className="bg-gray-300 text-xl p-10 text-black">
                <div className="text-4xl sm:text-5xl py-5 font-semibold font-medium">Explore<br/>Our Solutions</div>
                <div className="md:flex justify-between">
                    <div className="sm:w-[50%] pt-5"><b>Architectural design</b> shapes the layout and structure of a building, while <b>Interior design</b> focuses on creating appealing and functional spaces within it. <b>Construction works</b> involve the physical assembly of the building, and <b>Finishing works</b> add the final touches and details. <b>Construction supervision</b> ensures the smooth progress of the project, coordinating activities and ensuring quality and safety standards are met.<p className="py-5">Together, these elements collaborate to bring forth well-designed, visually appealing, and functional spaces that meet clients' needs and aspirations.</p></div>    
                    <img className="sm:w-[500px] rounded-lg" src={img2} alt="Our Solutions" />
                </div>
            </div>


            {/* <div className="flex justify-between gap-10 overflow-x-auto scrollbar-hide p-10 bg-gray-300">
                  <img className="sm:w-[500px] rounded-xl" src={img1} alt="image1" />
                  <img className="sm:w-[500px] rounded-xl" src={img2} alt="image2" />
                  <img className="sm:w-[500px] rounded-xl" src={img3} alt="image3" />
                  <img className="sm:w-[500px] rounded-xl" src={img4} alt="image4" />
            </div> */}

            <Scroll />

            {/* <Services /> */}

            
            <div className="bg-gray-300 text-black text-4xl text-center sm:text-5xl p-10 lg:pt-20 pb-5 font-semibold font-medium">Our Track Records!</div>
            <div className='bg-gray-300 text-black flex flex-wrap text-center justify-between sm:text-xl font-inter sm:pt-10 p-5 sm:pb-20 lg:p-20 lg:gap-20'>
                  <div className='rounded-lg p-5 fold w-[48%] lg:w-[25%] mb-10 sm:mb-5' style={{ boxShadow: '0 0 5px rgba(0, 0, 0, 0.2)' }}>
                    <p className='fold-text text-4xl sm:text-6xl font-bold text-blue-black pb-3 sm:pb-5'>
                      {count >= 15? '15+' : count.toFixed(1)}
                    </p>
                    <p>Number of clients/ partners</p>
                  </div>
                  <div className='rounded-lg p-5 fold w-[48%] lg:w-[25%] mb-10 sm:mb-5' style={{ boxShadow: '0 0 5px rgba(0, 0, 0, 0.2)' }}>
                    <p className='fold-text text-4xl sm:text-6xl font-bold text-blue-black pb-3 sm:pb-5'>
                      {count >= 20 ? '20+' : count.toFixed(1)}
                    </p>
                    <p>Number of Projects</p>
                  </div>
                  <div className='rounded-lg p-5 fold w-[48%] lg:w-[25%] mb-10 sm:mb-5' style={{ boxShadow: '0 0 5px rgba(0, 0, 0, 0.2)' }}>
                    <p className='fold-text text-4xl sm:text-6xl font-bold text-blue-black pb-3 sm:pb-5'>
                      {count >= 5 ? '5+' : count.toFixed(1)}
                    </p>
                    <p>Current Projects</p>
                  </div>
                  

                </div>



            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3959.648465591803!2d38.470993907689135!3d7.050529392922327!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x17b1451569486af7%3A0x630636b89140a5a2!2sNib%20International%20Bank!5e0!3m2!1sen!2set!4v1707823186965!5m2!1sen!2set" className="w-full h-full" style={{border:0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>

            <div>

    </div>

            <Footer />
            
        </div>

        
    </>
  );
}

export default Home;
