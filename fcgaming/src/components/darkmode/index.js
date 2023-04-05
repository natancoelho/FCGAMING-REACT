import React from "react"
import './style.css'




const DarkMode = () =>{
    const setLightMode = () => {
        document.querySelector("body").setAttribute("data-theme", "light")

    }
    const setDarkMode = () => {
        document.querySelector("body").setAttribute("data-theme", "dark")
        
    }

    const toggleTheme = e => {
        if (e.target.checked) setLightMode();
        else setDarkMode()
    }


   setDarkMode()
   return(

    <div className="dark_mode"> 
        <img className="sol_lua" src="solua.png"></img>
        <label>
        <input type="checkbox" className="quad" onChange={toggleTheme}/>
        <span className="check"></span>
        </label>
    
    </div>


)
}

export default DarkMode;