import Navbar from "../components/Navbar";
import bg from "../images/photo1707462299.jpeg"
import Footer from "../components/Footer";
import { useEffect } from "react";
// import founder from "../images/img1.png"
import bg1 from "../images/IMG_0068.JPG"
import bg6 from '../images/img2.png'
import { Link, useLocation } from "react-router-dom";
import founder from '../images/founder.png';
// import img2 from '../images/IMG_0068.JPG';



function About() {

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

  return (
    <>

          <Navbar />

          <div className="bg-black-500 h-screen">
            
            <div className="relative bg-black bg-opacity-40">
                <img className="w-full sm:h-[480px]" src={bg6} alt="" /> 
                <div className="absolute text-6xl top-0 bg-black bg-opacity-40 text-white w-[347px] h-full pt-[10%] pl-5">Get to Know Us Better</div>
            </div> 
            
        <div className="bg-gray-300 text-black">

            <div className="p-5 sm:p-10 md:pt-20 text-lg text-justify tracking-tight" id="about">
              <p className="text-4xl sm:text-6xl pb-10 w-[30%] text-left">About Us</p>
              <div className="flex justify-between">
                <div>
                  <p className="w-[600px]">We are a renowned architectural firm dedicated to creating innovative and inspiring spaces. With a passion for design excellence and a strong commitment to client satisfaction, our mission is to transform your vision into a remarkable reality. At Lik Architects, we believe that exceptional architecture goes beyond the physical structures; it has the power to shape experiences, evoke emotions, and improve lives. Our talented team of architects and designers combines creativity, expertise, and attention to detail to deliver unique and tailored solutions for each project.</p>
                  <p className="pl-10 pt-5 w-[600px]">Our team will guide you through the entire project, ensuring high-quality implementation and attention to detail. We combine technical expertise with artistic vision to create functional and impressive spaces. Our focus on innovation, sustainability, and client satisfaction sets us apart as a trusted partner in architecture. Experience the Lik Architects difference and bring your vision to life.</p>
                </div>
                {/* <div> */}
                  <img className="w-[40%] rounded-lg" src={bg1} alt="About-Us" />
                {/* </div> */}
              </div>
            </div>

            <div id="Mission" className="text-lg p-10 pb-20 sm:px-40 bg-black-500 text-white text-center sm:text-lg">
              <p className="text-2xl sm:text-3xl py-5">Mission</p>
              <p>Provide innovative, efficient and sustainable solutions through exceptional client service, excellence in Architectural Design and ethics in practice.</p>
            </div>

            <div id="approach" className="px-10 py-20 pr-40 text-lg">
              <p className="text-4xl sm:text-6xl pb-10">Our Approach</p>
              <p>At Lik Architects, we believe that architecture is more than just structures; it's about creating environments that enhance lives and leave a lasting impact. We approach each project with a blend of creativity, functionality, and sustainability, ensuring that our designs not only meet your needs but also contribute positively to the community and the environment.</p>
            </div>

            <div id="Vission" className="p-10 pb-20 sm:px-40 bg-black-500 text-white text-center sm:text-lg">
              <p className="text-2xl sm:text-3xl py-5">Vission</p>
              <p>Aims to be amongst the leading Architectural Design Firms that are globally recognized, highly valued and respected by clients, colleagues and other industry leaders.</p>
            </div>

            <div id="team" className="p-10 pt-20 pr-20 text-lg">
              <p className="text-4xl sm:text-6xl pb-[50px] text-center font-semi-bold">Meet the Expert</p>
              <div className="sm:flex justify-center items-center gap-10 px-10 pl-40">
                  {/* <div> */}
                    <img src={founder} alt="Founder" />
                  {/* </div> */}
                  <div className="sm:text-lg p-5 items-center">
                    <p className="text-2xl font-semibold pb-3">Founder</p>
                    <p className="w-[80%] text-justify tracking-tight">Our team consists of talented architects, designers, and professionals who are passionate about their craft. With a wealth of experience in diverse architectural projects, we bring a unique perspective to every endeavor. We collaborate closely with our clients, listening to their aspirations and translating them into exceptional designs that exceed expectations.</p>
                  </div>
              </div>
            </div>

            </div>

            <div className="flex bg-gray-300 justify-center items-center py-10 sm:py-20 font-[Inter]">
                <Link to="/contact-us"><button className="text-center bg-green-400 text-white rounded-lg w-60 h-10 font-dm-serif-text text-2xl">Contact Us</button></Link>
            </div>
            
            <Footer />
            
        </div>

        
    </>
  );
}

export default About;
