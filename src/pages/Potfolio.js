import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Loader from '../components/Loader';
import { toast } from 'react-toastify';
// import axios from 'axios';
import PortfolioCard from '../components/PortfolioCard';
// import project from '../images/project.png';



const Projects = () =>{

    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    const url = process.env.REACT_APP_url;

    // Create a global Axios instance with the desired default configuration
    // axios.defaults.withCredentials = true;


    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
    
    // display posts
    const showPosts = async () => {
        setLoading(true);
        try {

        //   const {data} = await axios.get(`${url}/project/all`);
        //   console.log(data.posts)
  
    
        //   setPosts(data.posts);
        //   console.log('posts',posts)

    
        //   setLoading(false);
        } catch (error) {
          console.log(error)
          // console.log(error.response?.data?.error);
          toast.error(error.response?.data?.error || 'Failed to fetch post data');
        }
      };
    
      useEffect(() => {
        showPosts();
      }, []);


    return(
        <>
            <Navbar  />

            <div className={`bg-gray-400 pt-20 text-black font-inter`}>
              
              <div className='sm:bg-frame1 bg-no-repeat bg-right-top'>
                <div>  
                    <div className='pl-5 pb-2 sm:pt-5 sm:text-xl bg-white-grey'>Projects</div> 
                    {/* <img className='h-20 sm:h-40' src="" alt='' /> */}
                    <div className='text-lg p-5 pt-5 sm:pt-10 font-medium sm:w-[60%] text-left'>
                        <p className='text-4xl sm:text-5xl font-semibold pb-5 sm:pb-10'>Creative Pursuits</p>
                        <p className='text-justify tracking-tight sm:text-left' style={{ wordSpacing: '-0.1em' }}>Creative pursuits ignite passion, inspire minds, push boundaries. They express, provoke, and bring positive change through imaginative exploration.</p>
                    </div>
                </div>


                        <div  className={`post-container flex sm:pr-0 pt-10 sm:pt-20 pb-5`}>
                        {loading ? (
                          <Loader />
                        ) : (
                          <div className="flex justify-center flex-wrap">
                            {posts && posts.map((post,index) => (
                                <div className={`post-card md:pl-6 md:w-1/2 lg:w-1/2 xl:w-1/2 ${index % 2 !== 0 ? 'sm:mb-[-50px] sm:mt-[120px] sm:pb-5' : ''} ${index % 2 == 0 ? 'sm:mb-[100px]' : ''}`} key={index} >
                                  <PortfolioCard
                                    id={post.id}
                                    title={post.title}
                                    content={post.content}
                                    file={post.file ? post.file.url : 'Loading'}
                                    showPosts={showPosts}
                                  />
                                </div>
                              ))}
                          </div>
                        )}
                      </div>

                
                <div className="flex justify-center items-center py-10 sm:py-20 font-[Inter]">
                    <Link to="/contact-us"><button className="text-center bg-green-400 text-white rounded w-60 h-10 font-dm-serif-text text-2xl">Contact Us</button></Link>
                </div>         

                <Footer />
            </div>
        </div>

        </>
    );
}
export default Projects