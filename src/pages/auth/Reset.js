import React, {useEffect, useState} from "react";
import LockClockOutlined from '@mui/icons-material/LockClockOutlined';
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import {useFormik} from 'formik';
import * as yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import { reset } from "../../redux/actions/userAction";
import Navbar from "../../components/Navbar";
import { Avatar, Box, CircularProgress, IconButton, InputAdornment,} from "@mui/material";
import Footer from "../../components/Footer";
import Loader from "../../components/Loader";
import { Visibility, VisibilityOff } from "@mui/icons-material";



const validationSchema= yup.object({
    newPassword: yup
        .string('Enter your a new password')
        .min(8, 'Password should be of minimum 8 chars length')
        .required('Password is required!'),
    confirmPassword: yup
        .string('Enter your password')
        .min(8, 'Password should be of minimum 8 chars length')
        .required('Password is required!')
        .test('passwords-match', 'Passwords do not match!', function(value) {
            return this.parent.newPassword === value;
          }),
});

const Reset= () =>{

    const dispatch= useDispatch();
    const navigate= useNavigate();
    const {resetToken}= useParams();
    const {loading, isAuthenticated}= useSelector(state=> state.reset);
    const [showPassword, setShowPassword] = useState(false);

    const handleClickShowPassword = () => {
      setShowPassword(!showPassword);
    };

    
    useEffect(() =>{
        if (isAuthenticated) {
            navigate('/login');
        }
    }, [isAuthenticated])

    const formik= useFormik({
        initialValues: {
            resetToken: resetToken,
            newPassword: '',
            confirmPassword: '',
            
        },
        validationSchema: validationSchema,
        onSubmit: (values, actions) => {
            dispatch(reset(values));
            actions.resetForm();
        }
    })
    return(
        <>
        <Navbar />
        <Box className='bg-gray-300 h-screen flex' sx={{ alignItems:"center", justifyContent: "center", bgcolor: "primary.white" }}>
        
            <Box onSubmit={formik.handleSubmit} component="form" className="form_style boarder-style" >
                <Box className='flex bg-white p-5' sx={{flexDirection: "column", alignItems: "center", width: "100%"}} >
                    <p className="text-xl font-semibold opacity-80 pb-5">Password Reset</p>
                    
                    <TextField
                     sx={{
                        mb: 3,
                        "& .MuiInputBase-root":{
                            color: 'text.secondary'
                        },
                        fieldset:{ boarderColor: "rgb(231, 235, 240)"}
                     }}
                     fullWidth
                     id="newPassword"
                     name="newPassword"
                     label="New Password"
                     type={showPassword ? 'text' : 'password'}
                     InputLabelProps={{
                        shrink: true,
                     }}
                     placeholder="New Password"
                     value={formik.values.newPassword}
                     onChange={formik.handleChange}
                     onBlur={formik.handleBlur}
                     error={formik.touched.newPassword && Boolean(formik.errors.newPassword)}
                     helperText={formik.touched.newPassword && formik.errors.newPassword}
                     InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">
                            <IconButton
                              onClick={handleClickShowPassword}
                              edge="end"
                              aria-label="toggle password visibility"
                            >
                              {showPassword ? <VisibilityOff /> : <Visibility />}
                            </IconButton>
                          </InputAdornment>
                        ),
                      }}
                 />

                 <TextField
                     sx={{
                        mb: 3,
                        "& .MuiInputBase-root":{
                            color: 'text.secondary'
                        },
                        fieldset:{ boarderColor: "rgb(231, 235, 240)"}
                     }}
                     fullWidth
                     id="confirmPassword"
                     name="confirmPassword"
                     label="Confirm Password"
                     type={showPassword ? 'text' : 'password'}
                     InputLabelProps={{
                        shrink: true,
                     }}
                     placeholder="Confirm Password"
                     value={formik.values.confirmPassword}
                     onChange={formik.handleChange}
                     onBlur={formik.handleBlur}
                     error={formik.touched.confirmPassword && Boolean(formik.errors.confirmPassword)}
                     helperText={formik.touched.confirmPassword && formik.errors.confirmPassword}
                     InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">
                            <IconButton
                              onClick={handleClickShowPassword}
                              edge="end"
                              aria-label="toggle password visibility"
                            >
                              {showPassword ? <VisibilityOff /> : <Visibility />}
                            </IconButton>
                          </InputAdornment>
                        ),
                      }}
                 />
                     
             
             <Button disabled={loading} fullWidth variant="contained" type="submit">{loading ? <CircularProgress /> :"Submit" }</Button>

             <div className="pt-5 opacity-70 text-sm">Having issues with your link? Try and add <br/><a href="mailto:contact@techethio.com" className="text-blue-black select-none">PasswordReset@techethio.com</a> to your email contacts  so the link <br/> doesn't end up in your spam.</div>
             <div className="pt-5 pr-10 opacity-70 text-sm">For more support, contact our Customer Support Team at <br/> <a href="mailto:contact@techethio.com" className="text-blue-black select-none">help@techethio.com</a></div>
           
            
           </Box>
        </Box>
      </Box>

      <div className="text-center sm:text-right text-black text-opacity-20 md:text-lg font-normal font-['Inter'] sm:mr-20 py-5 sm:py-10">
          <p>© <span>{new Date().getFullYear()}</span> TechEthio IT Solutions PLC. All rights reserved.</p>
      </div>
  </>
)
}

export default Reset