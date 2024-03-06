import React, { useState } from 'react';
import logo from '../images/likLogo.png';
import { Link } from 'react-router-dom';
import { GridMenuIcon } from '@mui/x-data-grid';
import Sidebar from './Sidebar';


const NavAdmin = () => {

    const [showIconOnly, setShowIconOnly] = useState(false);
 
    const handleMenuIconClick = (e) => {
        setShowIconOnly(!showIconOnly);
    };

  
return (
        <>
        <header className='flex items-center justify-between pt-5 mb-2 sm:mb-5 sm:px-5 fixed top-0 left-0 right-0 w-full bg-black-500 z-40 h-[60px]'>

            <div className="flex text-center items-center text-xl ml-6 sm:ml-2 pb-2">
                <GridMenuIcon className={`cursor-pointer`} onClick={ handleMenuIconClick} />
                <div className='flex justify-center'>
                    <img className="w-[80px] h-full" src={logo} alt="TechEthio Logo" />
                    <div className='ml-[-8px]'>Lik Architects</div>
                </div>
                
            </div>

            <Link to='/login'>
                <div className='text-center bg-greenl font-dm-serif-text text-white rounded mb-2 sm:mb-3 mr-2 md:mr-0'>
                    <div className='sm:p-1 px-2 md:px-5'>Login</div>
                </div>
            </Link>

        </header>

        <div className={`${showIconOnly ? 'w-[60px]' : ''} sm:hover:w-[220px]`}>
            <Sidebar />
        </div>
        
    </>
    )
    }

export default NavAdmin;