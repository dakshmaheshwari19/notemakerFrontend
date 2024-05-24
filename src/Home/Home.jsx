import { Login } from '../Login/Login'
import { SignUp } from '../SignUp/SignUp'
import './Home.css'
import React, { useState } from 'react'
import { Outlet, useLocation } from 'react-router-dom';
import { useNavigate } from "react-router-dom";


export const Home = () => {
  const navigate = useNavigate();
  const location = useLocation();



  return (
    <>
      <div className="homeContainer">


        {/* signup container */}
        <div className="signupContainer">
          <div className="signUpToggle">

            {location.pathname==='/signup' || location.pathname==='/login' ?(
              <div className="signUpText" onClick={() => { navigate("/") }}>
              <h2 className='signInOptions' >Home</h2>
            </div>
            ):null}
            {location.pathname==='/' || location.pathname==='/login' ? (
              <div className="signUpText" onClick={() => { navigate("/signup") }}>
              <h2 className='signInOptions' >SignUp</h2>
            </div>
            ): null}
            
            {location.pathname==='/' || location.pathname==='/signup' ?(
              <div className="loginText" onClick={() => { navigate("/login") }}>
              <h2 className='signInOptions' >Login</h2>
            </div>
            ):null}
            
          </div>

          {location.pathname === '/' ? (
            <div className="welcomeText">

              <div className="welcomeHeading">
                The Secret Diary🤫
              </div>
              <div className="welcomeDescription">
                Login or SignUp to access the
                your Secret Diary for free now.
              </div>

            </div>
          ) : null}

          <Outlet />

          <div className="login-toggle"></div>

        </div>

      </div>
    </>
  )
}
