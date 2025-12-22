import React from 'react'
import { Outlet } from 'react-router';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import { ToastContainer } from 'react-toastify';


const Layout = () => {
  return (
   <>
   <ToastContainer />
   <Navbar />
   <Outlet />
   <Footer />

   </>
  );
};

export default Layout