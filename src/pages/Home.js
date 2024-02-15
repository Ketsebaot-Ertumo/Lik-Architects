import Navbar from "../components/Navbar";
import bg from "../images/bg.jpg"
import Papers from "../constants/paper";
import image1 from "../images/IMG_0089.jpeg";
import image2 from "../images/image with silg 91d48d75-58ef-44a3-9802-3db9179c6f70.png";
import image3 from "../images/photo1707462299.jpeg";
import image4 from "../images/office12.jpg";
import Footer from "../components/Footer";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Paper } from '@mui/material';



function Home() {
  return (
    <>

        <div className="bg-black-500 h-screen text-white">
            <Navbar />
            
            <div className="relative pt-10 sm:pt-20">
                <img className="w-full sm:h-[480px]" src={bg} alt="" />
                <div className="absolute p-5 pl-10 w-[40%] top-[140px] sm:top-[180px] text-left">
                    <p className="text-2xl sm:text-5xl pb-5">Best Architectural Works</p>
                    <p className="hidden sm:flex">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed faucibus ligula id viverra varius. Suspendisse potenti. Nam vitae tristique enim.</p>
                    <a href="mailto:Likawunt100@gmail.com"><button className="bg-gradient-to-r from-white to-yellow-200 rounded-lg text-black p-2 sm:mt-5">Contact Me</button></a>
                </div>
                
            </div>

            <div className="sm:grid sm:grid-cols-2">
                <Papers />
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3959.648465591803!2d38.470993907689135!3d7.050529392922327!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x17b1451569486af7%3A0x630636b89140a5a2!2sNib%20International%20Bank!5e0!3m2!1sen!2set!4v1707823186965!5m2!1sen!2set" className="w-full h-full" style={{border:0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>

            
            <Footer />
            
        </div>

        
    </>
  );
}

export default Home;
