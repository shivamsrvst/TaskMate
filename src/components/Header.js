import { useEffect, useState } from "react"
import Logo from "../assets/logo.svg"

export const Header = () => {

    const [theme,setTheme] =useState((localStorage.getItem("theme")) ||"medium");
    
    useEffect(()=>{
        
        localStorage.setItem("theme",theme);
        document.documentElement.removeAttribute("class");
        document.documentElement.classList.add(theme);
    },[theme]);  


  return (
    <header>
        <div className="logo">
            <img src={Logo} alt="Taskmate Logo" />
            <span>Taskmate</span>
        </div>
        <div className="themeSelector">

            <span key="light" onClick={() => setTheme("light")} className={theme==="light"? "light activeTheme":"light"}></span>
            <span key="medium" onClick={() => setTheme("medium")} className={theme==="medium"? "medium activeTheme":"medium"}></span>
            <span key="dark" onClick={() => setTheme("dark")} className={theme==="dark"? "dark activeTheme":"dark"}></span>
            <span key="gradientOne" onClick={() => setTheme("gradientOne")}className={theme==="gradientOne"? "gradientOne activeTheme":"gradientOne"}></span>
            <span key="gradientTwo" onClick={() => setTheme("gradientTwo")} className={theme==="gradientTwo"? "gradientTwo activeTheme":"gradientTwo"}></span>
            <span key="gradientThree"  onClick={() => setTheme("gradientThree")} className={theme==="gradientThree"? "gradientThree activeTheme":"gradientThree"}></span>


        </div>
    </header>
  )
}
