import React from 'react'
import {Navigate,Outlet} from 'react-router-dom' 
import SignUp from './SignUp'

export default function PrivateComponent() {
    const auth =localStorage.getItem("usrinfo")
  return auth ? <Outlet/> : <Navigate to={<SignUp/>}/>
  
}
