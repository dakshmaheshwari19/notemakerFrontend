import { Login } from '../Login/Login'
import { SignUp } from '../SignUp/SignUp'
import './Home.css'
import React, { useState } from 'react'
import { Outlet } from 'react-router-dom';
import { useNavigate } from "react-router-dom";


export const Home = () => {
  const navigate = useNavigate();
  

  return (
    <>
      <div className="homeContainer">


        {/* signup container */}
        <div className="signupContainer">
          <div className="signUpToggle">
            <div className="signUpText" onClick={() => { navigate("/signup") }}>
              <h2>SignUp / </h2>
            </div>
            <div className="loginText" onClick={() => { navigate("/login")  }}>
              <h2> Login</h2>
            </div>
          </div>
          <Outlet/>
          <div className="login-toggle"></div>

        </div>

      </div>
    </>
  )
}
