import React, { useState } from "react";
import { Box, Button, CircularProgress, MenuItem, TextField, Typography } from "@mui/material";
import { useFormik } from "formik";
import * as yup from 'yup';
import Dropzone from 'react-dropzone';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import axios from "axios";
import ReactQuill from 'react-quill';
import "react-quill/dist/quill.snow.css";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import {modules}  from '../../../components/moduleToolbar';





const validationSchema = yup.object({
    title: yup
        .string('Add a Post Title')
        .min(4, 'Text content should have a minimum of 4 characters')
        .required('Post title is required'),
    content: yup
        .string('Add text content')
        .min(10, 'Text content should have a minimum of 10 characters')
        .required('Text content is required'),
    file: yup
        .mixed()
        .required('Image is required'),
});



const CreateProject = () => {

    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const url = process.env.REACT_APP_url;
    
    // Create a global Axios instance with the desired default configuration
    axios.defaults.withCredentials = true;



    const createNewPost = async (values) => {
        setLoading(true);
        try {
            const formData = new FormData();
            formData.append('title', values.title);
            formData.append('content', values.content);
            formData.append('file', values.file);

            const { data } = await axios.post(`${url}/project/create`, formData );

            if (data.success === true) {
                toast.success('Post created successfully!');
                navigate('/admin/projects');
            }
            setLoading(false);
        } catch (error) {
            console.error(error, values);
            toast.error('Failed to create post. Please try again.' || error.message);
            setLoading(false);
        }
    };

    const {
        values,
        errors,
        touched,
        handleBlur,
        handleChange,
        handleSubmit,
        setFieldValue
    } = useFormik({
        initialValues: {
            title: '',
            content: '',
            file: null,
        },
        validationSchema: validationSchema,
        onSubmit: (values, actions) => {
            createNewPost(values);
            actions.resetForm();
        }
    });

    return (
        <>
            <div className='px-50 md:px-[200px] md:py-5' sx={{ bgcolor: "white"}}>

                <Typography variant="h5" sx={{ pb: 4 }} className="sm:text-center">Create Post</Typography>
                <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }} encType="multipart/form-data">

                    <TextField sx={{ mb: 3 }}
                        fullWidth
                        id="title"
                        label="Post title"
                        name="title"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        placeholder="Post title"
                        value={values.title}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={touched.title && Boolean(errors.title)}
                        helperText={touched.title && errors.title}
                    />
                    <Box sx={{ mb: 3 }}>
                        <ReactQuill
                            theme="snow"
                            placeholder={'Write the post content...'}
                            modules={modules}
                            value={values.content}
                            onChange={(e) => setFieldValue('content', e)}
                        />
                        <Box component='span' sx={{ color: '#d32f2f', fontSize: "12px", pl: 2 }}>{touched.content && errors.content}</Box>
                    </Box>

                    <Box border={"2px dashed blue"} sx={{ p: 1 }}>
                        <Dropzone
                            acceptedFiles=".jpg, .jpeg, .png, .jpng"
                            multiple={false}
                            onDrop={(acceptedFiles) => {
                                setFieldValue("file", acceptedFiles[0]);
                            }}
                        >
                            {({ getRootProps, getInputProps, isDragActive }) => (
                                <Box
                                    {...getRootProps()}
                                    p="1rem"
                                    sx={{ "&:hover": { cursor: "pointer" }, bgcolor: isDragActive ? '#cceffc' : '#fafafa' }}
                                >
                                    <input {...getInputProps()} />
                                    {isDragActive ? (
                                        <>
                                            <p style={{ textAlign: "center" }}><CloudUploadIcon sx={{ color: "primary.main", mr: 2 }} /></p>
                                            <p style={{ textAlign: "center", fontSize: "12px" }} > Drag here!</p>
                                        </>
                                    ) : values.file === null ? (
                                        <>
                                            <p style={{ textAlign: "center" }}><CloudUploadIcon sx={{ color: "primary.main", mr: 2 }} /></p>
                                            <p style={{ textAlign: "center", fontSize: "12px" }} > Drag and Drop image here or click to choose!</p>
                                        </>
                                    ) : (
                                        <>
                                            <Box sx={{ display: "flex", justifyContent: 'space-around', alignItems: 'center' }}>
                                                <Box><img style={{ maxWidth: '100px' }} src={URL.createObjectURL(values.file)} alt="" /></Box>
                                            </Box>
                                        </>
                                    )}
                                </Box>
                            )}
                        </Dropzone>
                    </Box>

                    <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    elevation={0}
                    sx={{mt:3, p:1,mb:2, boarderRadius: "25px",}}
                    disabled={loading}
                 >
                    {loading ? <CircularProgress /> : 'Create Project'}
                 </Button>
              </Box>
          
          </div>
        </>
    );
       
    
}
export default CreateProject


