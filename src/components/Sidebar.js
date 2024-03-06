import React, { useEffect, useState } from "react";
import { Menu, MenuItem, menuClasses } from "react-pro-sidebar";
import DashboardIcon from '@mui/icons-material/Dashboard';
import { Box } from "@mui/material";
import PeoplesIcon from '@mui/icons-material/PeopleSharp';
import { Link, useLocation} from "react-router-dom"; 
import { useDispatch, useSelector } from "react-redux";
import { userLogoutAction } from '../redux/actions/userAction';
import { useNavigate } from "react-router-dom";
import LoginIcon from '@mui/icons-material/Login';
import { AssignmentInd, GroupAdd, ManageAccountsOutlined, PostAdd, Work } from "@mui/icons-material";


const Sidebar = () => {

    const { userInfo } = useSelector(state => state.signIn);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();
    const [activeMenu, setActiveMenu] = useState(null);
    const [showIconOnly, setShowIconOnly] = useState(false);
    

    useEffect(() => {
        // Update active menu based on the current page
        const path = location.pathname;
        if (path.includes('dashboard')) {
            setActiveMenu('dashboard');
        } else if (path.includes('project')) {
            setActiveMenu('create');
        } else if (path.includes('user')) {
            setActiveMenu('users');
        } else if (path.includes('profile')) {
            setActiveMenu('profile');
        // } else if (path.includes('project')) {
        //     setActiveMenu('project');
        } else {
            setActiveMenu(null);
        }
    }, [location]);

    //log out
    const logOut = () => {
        dispatch(userLogoutAction());
        window.location.reload(true);
        navigate('/login');
    }


    const handleMenuItemClick = (event) => {
    };



    return (

        <>

        <div className={`pt-8 xs:pt-2 sm:pt-5 md:pt-6`}>
            <div style={{ boarderRightStyle: "none" }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'column', height: '100vh' }}>
                    <Box sx={{ pt: 4 }}>
                        <Menu
                            menuItemStyles={{
                                button: {
                                    [`&.${menuClasses.button}`]: {
                                        color: "#000",
                                    },
                                    [`&.${menuClasses.disabled}`]: {
                                        color: "green",
                                    },
                                    '&:hover': {
                                        backgroundColor: "#fafafa",
                                        color: "#1976d2",
                                    },
                                },
                                icon: {
                                    [`&.${menuClasses.icon}`]: {
                                        color: "#1976d2",
                                    }
                                },
                            }}>

                            {userInfo && userInfo.role === 'admin' ? (
                                <div>
                                        <MenuItem className={`${activeMenu === 'dashboard' ? 'bg-w-g' : ''}`} component={<Link to="/admin/dashboard" />} icon={<DashboardIcon /> }><span className={`${activeMenu === 'dashboard' ? 'text-blue' : 'text-black'}`}>Admin Dashboard</span></MenuItem>
                                        <MenuItem onClick={ handleMenuItemClick} className={`${activeMenu === 'create' ? 'bg-w-g' : ''}`} component={<Link to="/admin/project/create" />} icon={<PostAdd />}><span className={`${activeMenu === 'create' ? 'text-blue' : 'text-black'}`}>Create Project</span></MenuItem>
                                        <MenuItem onClick={ handleMenuItemClick} className={`${activeMenu === 'users' ? 'bg-w-g' : ''}`} component={<Link to="/admin/users" />} icon={<ManageAccountsOutlined />}><span className={`${activeMenu === 'users' ? 'text-blue' : 'text-black'}`}>Users</span></MenuItem>
                                        {/* <MenuItem onClick={ handleMenuItemClick} className={`${activeMenu === 'projects' ? 'bg-w-g' : ''}`} component={<Link to="/admin/projects" />} icon={<Work />}><span className={`${activeMenu === 'projects' ? 'text-blue' : 'text-black'}`}>Projects</span></MenuItem> */}
                                </div>
                            ) : (
                                <div>
                                    <div>
                                        <MenuItem className={`${activeMenu === 'dashboard' ? 'bg-w-g' : ''}`} component={<Link to="/user/dashboard" />} icon={<DashboardIcon />}><span className={`${activeMenu === 'dashboard' ? 'text-blue' : 'text-black'}`}>User Dashboard</span></MenuItem>
                                        <MenuItem className={`${activeMenu === 'profile' ? 'bg-w-g' : ''}`} component={<Link to="/user/profile" />} icon={<ManageAccountsOutlined />}><span className={`${activeMenu === 'profile' ? 'text-blue' : 'text-black'}`}>Profile Setting</span></MenuItem>
                                    </div>
                                </div>
                            )}
                        </Menu>
                    </Box>
                    <Box sx={{ pb: 2 }}>
                        <Menu
                            menuItemStyles={{
                                button: {
                                    [`&.${menuClasses.button}`]: {
                                        color: '#000',
                                    },
                                    [`&.${menuClasses.disabled}`]: {
                                        color: "green",
                                    },
                                    '&:hover': {
                                        backgroundColor: '#fafafa',
                                        color: "#1976d2",
                                    },
                                },
                                icon: {
                                    [`&.${menuClasses.icon}`]: {
                                        color: '#1976d2',
                                    }
                                },
                            }}>
                            <MenuItem onClick={logOut} icon={<LoginIcon />}>
                                <span>Log out</span>
                            </MenuItem>
                        </Menu>
                    </Box>
                </Box>
            </div>
        </div>
        </>
    )
}

export default Sidebar;

