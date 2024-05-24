import React, { useEffect } from 'react'
import './DashboardHeader.css'
import DarkMode from '../../DarkMode/DarkMode'
import { BiSolidYinYang } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { loadUser, logoutUser } from '../../app/actions/userActions.js';

export const DashboardHeader = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const {loading,user,error} = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(loadUser());
  }, [dispatch]);

  const handleLogout=async()=>{
    await dispatch(logoutUser());
    console.log("User logged out successfully");
    navigate("/") ;
  }
  return (
    <>
    <div className="DashboardHeader">
        <div className="leftHeader">
          {/* <div  style={{fontSize:"2em"}}>
          <BiSolidYinYang/>
          </div> */}
        <img src={user?.avatar} alt="" style={{width:"55px",height:"55px",border:"2px solid white",objectFit:"cover",padding:"3px",borderRadius:"50%"}} />
        <h1> {loading?<></>:<>{user?.fullname}'s Secret Diary </>}</h1>
        {/* <h1> Secret Diary  </h1> */}
        </div>
        <div className="rightHeader">
            <form>
              <input type="text"
              placeholder='Search'
              // value={searchNote}
              />
            </form>
            <div className="toggleD">
            <DarkMode/>
            </div>
            <button className='nav-btn'>Contact us</button>
            <button className='nav-btn'>Profile</button>
            <button onClick={handleLogout} className='nav-btn' >Logout</button>
        </div>
    </div>
    </>
  )
}
