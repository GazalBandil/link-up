import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider,createBrowserRouter } from 'react-router-dom'
import Login from './pages/Login.jsx'
import Signup from './pages/Signup.jsx'
import Layout from './Layout.jsx'



const router=createBrowserRouter([
  {
    path:'/',
    element:<Login/>
  },
  {
    path:'signup',
    element:<Signup/>
  },
  {
    path:'Dashboard',
    element:<Layout/>
  }



])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
