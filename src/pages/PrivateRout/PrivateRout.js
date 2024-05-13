import React, { useState } from 'react'
import { Navigate, Outlet } from 'react-router-dom';

const PrivateRout = () => {
    const loginUser = JSON.parse(localStorage.getItem("user"));
    const [isAuthentication,setIsAuthentication] = useState(loginUser && loginUser.email ? true : false)
  return (
      <>
{isAuthentication ? <Outlet /> : <Navigate to={"/sign-up"} /> }          
    </>
  )
}

export default PrivateRout