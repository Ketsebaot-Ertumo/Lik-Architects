import React, {useEffect} from "react";
import LockClockOutlined from '@mui/icons-material/LockClockOutlined';
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import {useFormik} from 'formik';
import * as yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { forgot } from "../../redux/actions/userAction";
import Navbar from "../../components/Navbar";
import { Avatar, Box, CircularProgress,} from "@mui/material";
import Footer from "../../components/Footer";
import Loader from "../../components/Loader";
import { Lock, Security } from "@mui/icons-material";



const validationSchema= yup.object({
    email: yup
        .string('Enter your email')
        .email('Enter a valid email')
        .required('Email is required'),
});

const Forgot= () =>{

    const dispatch= useDispatch();
    const navigate= useNavigate();
    const {loading, isAuthenticated, user}= useSelector(state=> state.forgot);

    useEffect(() =>{
        if (isAuthenticated) {
            navigate(`/password/reset/${user.resetToken}`);
            console.log('user', user.resetToken)
        }
    }, [isAuthenticated])

    const formik= useFormik({
        initialValues: {
            email: '',
        },
        validationSchema: validationSchema,
        onSubmit: (values, actions) => {
            //alert(JSON.stringify(values, null,2));
            dispatch(forgot(values));
            actions.resetForm();
        }
    })

    return(
        <>
        <Navbar />
        <Box className='bg-gray-300 h-screen flex' sx={{ alignItems:"center", justifyContent: "center", bgcolor: "primary.white" }}>

            <Box onSubmit={formik.handleSubmit} component="form" className="form_style boarder-style" >
                <Box className='flex bg-white p-5' sx={{flexDirection: "column", alignItems: "center", width: "100%"}} >
                    <p className="text-xl font-semibold opacity-80">Forgot your password?</p>
                    <p className="opacity-70 pb-8 pt-[5px]">No worries, just enter your email below.</p>
                    <TextField
                         sx={{
                            mb: 3,
                            "& .MuiInputBase-root": {
                                color: 'text.secondary'
                            },
                            fieldset: {boarderColor: "rgb(231, 215, 240)"}
                          }}
                          fullWidth
                          id="email"
                          label="Email"
                          name='email'
                          InputLabelProps={{
                            shrink: true,
                          }}
                          placeholder="E-mail"
                          value={formik.values.email}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          error={formik.touched.email && Boolean(formik.errors.email)}
                          helperText={formik.touched.email && formik.errors.email}
                     />
                     
             
             <Button className="font-normal" disabled={loading} fullWidth variant="contained" type="submit">{loading ? <CircularProgress /> :"Reset Password" }</Button>

             <div className="pt-5 opacity-70 text-sm">Having issues with your link? Try and add <br/><a href="mailto:contact@techethio.com" className="text-blue-black">PasswordReset@techethio.com</a> to your email contacts  so the link <br/> doesn't end up in your spam.</div>
             <div className="pt-5 pr-10 opacity-70 text-sm">For more support, contact our Customer Support Team at <br/> <a href="mailto:contact@techethio.com" className="text-blue-black">help@techethio.com</a></div>
           </Box>
        </Box>
      </Box>
      
        < div className="text-center sm:text-right text-black text-opacity-20 md:text-lg font-normal font-['Inter'] sm:mr-20 py-5 sm:py-10">
            <p>© <span>{new Date().getFullYear()}</span> TechEthio IT Solutions PLC. All rights reserved.</p>
        </div>
  </>
)
}

export default Forgot