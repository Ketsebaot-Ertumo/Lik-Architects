import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ProSidebarProvider } from 'react-pro-sidebar';
import Home from './pages/Home';
import { Provider } from 'react-redux';









const App = () => {
  return (
    <>
        <ToastContainer />
        {/* <Provider> */}
          {/* <ProSidebarProvider> */}
            <BrowserRouter>
              <Routes>
                <Route path='/' element={<Home />} />
                {/* <Route path='/about-us' element={<About />} />
                <Route path='/Contact-us' element={<Contact />} /> */}
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
