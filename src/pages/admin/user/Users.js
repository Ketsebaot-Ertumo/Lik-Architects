import React, { useEffect, useState } from 'react';
import { Box, IconButton, Paper, Typography, gridClasses } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from 'axios';
import moment from 'moment/moment';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import Loader from '../../../components/Loader';



const Users= () =>{
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);
    const url = process.env.REACT_APP_url;
    
    // Create a global Axios instance with the desired default configuration
    axios.defaults.withCredentials = true;

    
    //show all users
    const displayUsers= async (page) => {
        setLoading(true);
        try{
            const { data } = await axios.get(`${url}/user/all`);
            setUsers(data.users);
            setLoading(false);
        }catch(error){
            console.log(error);
            toast.error('Failed to fetch users.');
            setLoading(false);
        }
    }
    useEffect(() =>{
        displayUsers();
    }, []);



    //delete post by id
    const deleteUser= async(e, id) => {
        if(window.confirm('Are you sure you want to delete this user')){
            try{
                const { data } = await axios.delete(`${url}/user/delete/${id}`);
                if(data.success === true){
                    toast.success(data.message);
                    displayUsers();
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
            width: 100,
            editable: true
        },
        {
            field: 'fullName',
            headerName: 'User Full Name',
            width: 150
        },
        {
            field: 'email',
            headerName: 'Email',
            width: 150,
        },
        {
            field: 'phone',
            headerName: 'Phone Number',
            width: 150,
        },
        {
            field: 'role',
            headerName: 'Role',
            width: 150,
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
                <Link to={`/admin/edit/user/${value.row.id}`}>
                    <IconButton aria-label="edit">
                        <EditIcon sx={{color: '#1976d2'}} />
                    </IconButton>
                </Link>
                <IconButton aria-label="delete" onClick={(e) => deleteUser(e, value.row.id)}>
                    <DeleteIcon sx={{color: "red"}} />
                </IconButton>
            </Box>  
        )}
    ];


    return(
        <>

            <Box className='bg-white-grey h-screen text-black font-inter'>
                <Typography variant="h4" sx={{color: 'black', pb: 3}}>
                    Users
                </Typography>
               
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

                            rows={users}
                            columns={columns}
                            checkboxSelection
                            pagination
                            pageSizeOptions={[10,25,50,75,100]}
                            />
                        )}
                    </Box>
                </Paper>
            </Box>
        </>
    );
}
export default Users


