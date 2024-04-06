import React, { useEffect } from 'react'
import './DarkMode.css'
import { useState } from 'react';

const DarkMode = () => {
    const [theme, setTheme] = useState("light-theme");

    const changeTheme=()=>{
        theme==="light-theme"? 
        setTheme("dark-theme") 
        :
        setTheme("light-theme");
    }

    useEffect(()=>{
     document.body.className=theme;

    },[theme])

  return (
    <div className={`toggle-container ${theme==="dark-theme" ? 'dark' : 'light'}`} onClick={changeTheme}>
      <div className="toggle-track"></div>
      <div className="sun"></div>
      <div className="moon"></div>
    </div>

    // <div className={`toggle-container ${theme==="dark-theme" ? 'dark' : 'light'}`}
    //  onClick={changeTheme}>
    //   <div className="toggle-track">
    //     <div className="toggle-thumb"></div>
    //   </div>
    //   <div className="toggle-icon">{theme==="dark-theme" ? '🌙' : '☀️'}</div>
    // </div>
  )
}

export default DarkMode