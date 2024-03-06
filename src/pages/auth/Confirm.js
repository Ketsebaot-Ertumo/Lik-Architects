import React, {useEffect} from "react";
import LockClockOutlined from '@mui/icons-material/LockClockOutlined';
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import {useFormik} from 'formik';
import * as yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { confirmEmail } from "../redux/actions/userAction";
import Navbar from "../components/Navbar";
import { Box, CircularProgress,} from "@mui/material";



const validationSchema= yup.object({
    confirmationCode: yup
        .string('Enter six digit code.')
        .min(6, 'Code should be of 6 digit!')
        .max(6, 'Code should be of 6 digit!')
        .required('Code is required'),
});

const Confirmation= () =>{

    const dispatch= useDispatch();
    const navigate= useNavigate();
    const {loading, isAuthenticated, userinfo}= useSelector(state=> state.forgot);

    useEffect(() =>{
        if (isAuthenticated) {
            if (userinfo.role === 'admin') {
                navigate('/admin/dashboard');
            }else{
                navigate('/user/dashboard');
             } 
        }
    }, [isAuthenticated])


    const formik= useFormik({
        initialValues: {
            confirmationCode: '',
        },
        validationSchema: validationSchema,
        onSubmit: (values, actions) => {
            dispatch(confirmEmail(values));
            actions.resetForm();
        }
    })

    return(
        <>
        <Navbar />
        <Box className='bg-gray-300 h-screen flex' sx={{ alignItems:"center", justifyContent: "center", bgcolor: "primary.white" }}>

            <Box onSubmit={formik.handleSubmit} component="form" className="form_style boarder-style" >
                <Box className='flex bg-white p-5' sx={{flexDirection: "column", alignItems: "center", width: "100%"}} >
                    <p className="text-xl font-semibold opacity-80">Confirm Your Email</p>
                    <p className="opacity-70 pb-8 pt-[5px]">Please enter a six digit code from your email.</p>
                    <TextField
                         sx={{
                            mb: 3,
                            "& .MuiInputBase-root": {
                                color: 'text.secondary'
                            },
                            fieldset: {boarderColor: "rgb(231, 215, 240)"}
                          }}
                          fullWidth
                          id="confirmationCode"
                          label="Confirmation Code"
                          name='confirmationCode'
                          type="text"
                          InputLabelProps={{
                            shrink: true,
                          }}
                          placeholder="Confirmation Code"
                          value={formik.values.confirmationCode}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          error={formik.touched.confirmationCode && Boolean(formik.errors.confirmationCode)}
                          helperText={formik.touched.confirmationCode && formik.errors.confirmationCode}
                     />
                     
             
             <Button className="font-normal" disabled={loading} fullWidth variant="contained" type="submit">{loading ? <CircularProgress /> :"Confirm Email" }</Button>
             
             <div className="flex justify-between gap-10 sm:gap-20 pt-2 text-blue-black">
                <Link to='/password/register'><p>New Account?</p></Link>
                <Link to='/login' style={{ textDecoration: 'none' }} className="text-center">Already have an Account?</Link>
             </div>

             <div className="pt-5 opacity-70 text-sm">Having issues with your link? Try and add <br/><a href="mailto:contact@techethio.com" className="text-blue-black">PasswordReset@techethio.com</a> to your email contacts  so the link <br/> doesn't end up in your spam.</div>
             <div className="pt-5 pr-10 opacity-70 text-sm">For more support, contact our Customer Support Team at <br/> <a href="mailto:contact@techethio.com" className="text-blue-black">help@techethio.com</a></div>
           </Box>
        </Box>
      </Box>
      
      <div className="text-center sm:text-right text-black text-opacity-20 md:text-lg font-normal font-['Inter'] sm:mr-20 py-5 sm:py-10">
            <p>© <span>{new Date().getFullYear()}</span> TechEthio IT Solutions PLC. All rights reserved.</p>
      </div>
  </>
)
}

export default Confirmation