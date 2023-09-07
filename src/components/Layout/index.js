import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../Sidebar/';
import Footer from '../Footer/';
import ScrollToTop from "../ScrollToTop/";
import './index.scss';


const Layout = () => {
  return (
    <>
      <Sidebar />
      <Outlet />
      <ScrollToTop />
      <Footer />
    </>
  )
}

export default Layout
