import React, { useEffect, useState } from 'react';
import { Box, Button, IconButton, Paper, Typography, gridClasses } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from 'axios';
import moment from 'moment/moment';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import Loader from '../../../components/Loader';



const AdminDashboard = () =>{

    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    // const [pagination, setPagination] = useState({});
    const url = process.env.REACT_APP_url;
    
    // Create a global Axios instance with the desired default configuration
    axios.defaults.withCredentials = true;
    
    //show all posts
    const displayPosts= async () => {
        setLoading(true);
        try{
            const { data } = await axios.get(`${url}/project/all`)
            setPosts(data.posts);
            setLoading(false);
        }catch(error){
            console.log(error);
            toast.error('Failed to fetch posts.');
            setLoading(false);
        }
    }
    useEffect(() =>{
        displayPosts();
    }, []);


    //delete post by id
    const deletePost= async(e, id) => {
        if(window.confirm('Are you sure you want to delete this post')){
            try{
                const { data } = await axios.delete(`${url}/project/delete/${id}`);
                if(data.success === true){
                    toast.success(data.message);
                    displayPosts();
                }else{
                    toast.error(data.message)
                    console.log(data.message)
                }
            }catch(error){
                console.log(error);
                toast.error('Failed to delete post');
            }
        }
    };

    const columns =[
        {
            field: 'id',
            headerName: 'ID',
            width: 150,
            editable: true
        },
        {
            field: 'title',
            headerName: 'Project Title',
            width: 150
        },
        {
            field: 'content',
            headerName: 'Content',
            width: 150,
        },
        {
            field: 'file',
            headerName: 'Image',
            width: 150,
            renderCell: (params) => ( params.row.file && params.row.file.url ?
            <img width="40%" src={params.row.file.url} alt="" /> : null
        )
        },
        {
            field: 'createdAt',
            headerName: 'Created Date',
            width: 150,
            renderCell: (params) => (
                moment(params.row.createdAt).format('MMM DD, YYYY')
            )
        },
        {
        field: 'Actions',
        width: 100,
        renderCell: (value) => (
            <Box sx={{display: 'flex', justifyContent: 'space-between', width: '170px'}}>
                <Link to={`/admin/project/edit/${value.row.id}`}>
                    <IconButton aria-label="edit">
                        <EditIcon sx={{color: '#1976d2'}} />
                    </IconButton>
                </Link>
                <IconButton aria-label="delete" onClick={(e) => deletePost(e, value.row.id)}>
                    <DeleteIcon sx={{color: "red"}} />
                </IconButton>
            </Box>  
        )}
    ];


    return(
        <>


            <Box className='bg-white-grey h-screen text-black font-inter'>

                <div className='flex justify-between'>
                    <Typography variant="h4" sx={{color: 'black', pb: 3}}>
                        Projects
                    </Typography>
                    <Link to='/admin/project/create'>
                        <Button className='rounded bg-blue-200'>
                            Create Project
                        </Button> 
                    </Link>
                </div>
               
                <Paper sx={{bgcolor:'white'}}>
                    <Box sx={{height: 400, width: '100%'}}>
                        {loading? <Loader />:(
                        <DataGrid getRowId={(row) => row.id} 
                            sx={{
                                '& .MuiTablePagination-displayedRow': {
                                color: 'black',
                            },
                            color: 'black',
                            [
                                `& .${gridClasses.row}`]:{bgcolor: 'white'},
                            }}

                            rows={posts}
                            columns={columns}
                            checkboxSelection
                            
                            pageSizeOptions={[10,25,50,75,100]}
                            />
                        )}
                    </Box>
                </Paper>
            </Box>
        </>
    );
}
export default AdminDashboard

