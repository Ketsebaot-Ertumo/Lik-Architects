import React, { useState } from 'react';
import { Box } from '@mui/material';
import NavAdmin from './NavAdmin';



const Layout = ({ children }) => {

    return (
        <>
            <div style={{ display: 'flex', minHeight: '100vh', width: '100%' }}>
                <NavAdmin />
                <Box sx={{ width: '100%' }} className='bg-gray-300 pt-10 mt-5'>
                    <Box sx={{ p: 3 }}>
                        {children}
                    </Box>
                </Box>
            </div>
        </>
    );
};

export default Layout;

