import React, { useEffect } from 'react'
import Header from './common/Header'
import { Outlet } from 'react-router-dom'
import Footer from './common/Footer'

const Layout = () => {

  return (
    <>
    <Header/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default Layout