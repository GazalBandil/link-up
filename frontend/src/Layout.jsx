import React from 'react'
import Sidenav from './components/Sidenav'
import Topnav from './components/Topnav'
import {Outlet} from 'react-router-dom'


function Layout(){
    return (
        <>
        <Topnav/>
        <Outlet/>
        <Sidenav/>
        </>
    )
}

export default Layout