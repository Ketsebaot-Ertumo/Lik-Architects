import React, { useEffect, useState } from "react";
import { Box, Button, CircularProgress, MenuItem, TextField, Typography } from "@mui/material";
import { useFormik } from "formik";
import * as yup from 'yup';
import Dropzone from 'react-dropzone';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import axios from "axios";
import ReactQuill from 'react-quill';
import "react-quill/dist/quill.snow.css";
import { toast } from "react-toastify";
import { Link, useNavigate, useParams } from "react-router-dom";
import {modules}  from '../../../components/moduleToolbar';




const validationSchema = yup.object({
    title: yup
        .string('Add a Post Title')
        .min(4, 'Text content should have a minimum of 4 characters'),
    content: yup
        .string('Add text content')
        .min(10, 'Text content should have a minimum of 10 characters'),
});

const EditProject = () => {
    
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const {id}= useParams();
    const url = process.env.REACT_APP_url;
    const [title, setTitle]= useState('');
    const [content, setContent]= useState('');
    const [imagePreview, setImagePreview] = useState(null)

    // Create a global Axios instance with the desired default configuration
    axios.defaults.withCredentials = true;


    const updatePost= async (values) => {
        try{
            const {data} = await axios.put(`${url}/project/edit/${id}`, values);
            console.log(data.postUpdated)
            if (data.success === true){
                toast.success('post updated');
                navigate('/admin/projects')
            }else{
                toast.error(data.message || 'Failed to edit post!')
                console.log(data.message || 'Failed to edit post')
            }
        }catch(error){
            console.log(error);
            toast.error(error.response.data.error);
        }
    }

    //single post
    const singlePostById = async () => {
        try {
            const { data } = await axios.get(`${url}/project/show/${id}`);
            setTitle(data.post.title);
            setContent(data.post.content);
            setImagePreview(data.post.file.url);

        } catch (error) {
            console.log(error);
            toast.error(error);
        }
    };

    useEffect(() => {
        singlePostById();
    }, [id]);


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
            title,
            content,
        },
        validationSchema: validationSchema,
        enableReinitialize: true,
        onSubmit: (values, actions) => {
            console.log('values',values)
            updatePost(values);
            actions.resetForm();
        }
    });

    return (
        <>
            <div className='px-50 md:px-[200px] md:py-5' sx={{ bgcolor: "white"}}>

                <div className='flex justify-between'>
                    <Typography variant="h4" sx={{color: 'black', pb: 3}}>
                        Edit Project
                    </Typography>
                    <Link to='/admin/project/create'><div className='bg-blue rounded text-white text-bold p-2 mb-5'>Create Project</div></Link>
                </div>

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
                                                <Box><img
                                                    style={{ maxWidth: '100px' }}
                                                    src={values.file instanceof Blob ? URL.createObjectURL(values.file) : imagePreview}
                                                    alt=""
                                                /></Box>
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
                    {loading ? <CircularProgress /> : 'Edit Project'}
                 </Button>
              </Box>
          
          </div>
        </>
    );
       
    
}
export default EditProject

