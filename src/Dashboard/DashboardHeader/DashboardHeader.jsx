import React from 'react'
import './DashboardHeader.css'
import DarkMode from '../../DarkMode/DarkMode'
import { BiSolidYinYang } from "react-icons/bi";

export const DashboardHeader = () => {
  return (
    <>
    <div className="DashboardHeader">
        <div className="leftHeader">
          <div  style={{fontSize:"2em"}}>
          <BiSolidYinYang/>
          </div>
        <h1>Secret Diary</h1>
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
        </div>
    </div>
    </>
  )
}
