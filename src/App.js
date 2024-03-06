import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ProSidebarProvider } from 'react-pro-sidebar';
import Home from './pages/Home';
import About from './pages/About'
import { Provider } from 'react-redux';
import Contact from './pages/Contact'
import Projects from './pages/Potfolio';
import Services from './pages/Services';
import { LogIn , Registration, Confirmation, Forgot, Reset } from './pages/auth';
import Layout from './components/Layout';
import AdminRoute from './components/Routes/AdminRoute';
import AdminDashboard from './pages/admin/portfolio/AdminDashboard';
import CreateProject from './pages/admin/portfolio/CreateProject';
import EditProject from './pages/admin/portfolio/EditProject';
import Users from './pages/admin/user/Users';
import EditUser from './pages/admin/user/EditUser';
// import Confirmation from './pages/auth/Confirm';
// import Forgot from './pages/auth/Forgot';
// import Reset from './pages/auth/Reset';
// import Registration from './pages/auth/Register';



const App = () => {
  return (
    <>
        <ToastContainer />
        {/* <Provider> */}
          {/* <ProSidebarProvider> */}
            <BrowserRouter>
              <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about-us' element={<About />} />
                <Route path='/services' element={<Services />} />
                <Route path='/Contact-us' element={<Contact />} />
                <Route path='/portfolio' element={<Projects />} />
                <Route path='/login' element={<LogIn />} />
                <Route path='/register' element={<Registration />} />
                <Route path='/confirm' element={<Confirmation />} />
                <Route path='/password/forgot' element={<Forgot />} />
                <Route path='/password/reset/:resetToken' element={<Reset />} />
                <Route path='/admin/dashboard' element={<AdminRoute><Layout><AdminDashboard /></Layout></AdminRoute>} />
                <Route path='/admin/project/create' element={<AdminRoute><Layout><CreateProject /></Layout></AdminRoute>} />
                <Route path='/admin/project/edit/:id' element={<AdminRoute><Layout><EditProject /></Layout></AdminRoute>} />
                <Route path='/admin/users' element={<AdminRoute><Layout><Users /></Layout></AdminRoute>} />
                <Route path='/admin/edit/user/:id' element={<AdminRoute><Layout><EditUser /></Layout></AdminRoute>} />
              </Routes>
            </BrowserRouter>
          {/* </ProSidebarProvider> */}
        {/* </Provider> */}
        
    </>
  );
}

export default App;







// // import logo from './logo.jpg';
// import { Link } from 'react-router-dom';
// import logo from './likLogo.png';
// import house3D from './images/3d-house-model.jpg';


// function App() {
//   return (
//     <div className="bg-black-500 h-screen">
//       <header className="flex items-center gap-5 text-white">
//         {/* <Link to='/'><img src={logo} className="App-logo" alt="logo" /></Link> */}
//         <img src={logo} className="w-20 h-20" alt="logo" />
//         <p>LIK ARCHITECTS</p>
        
//       </header>
//       <body>
//         <img className='h-[500px] w-full' src={house3D} alt='' />
          
//       </body>
//     </div>
//   );
// }

// export default App;
