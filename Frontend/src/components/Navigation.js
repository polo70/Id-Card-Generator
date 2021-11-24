import React, {useContext, useEffect, useState } from 'react'
import "./Navigation.css";
import { NavLink } from 'react-router-dom'
import logoc from './images/logoc.png'
// import logoPic from '../images/logo6n.png'



const Navigation = ({color}) => {
    
    const handleClick = (event) => {
        event.preventDefault();
        localStorage.setItem("name", "");
        redirect()
    }

    const redirect = () => {
        window.location = "http://localhost:3000/"
    }
    const RenderMenu = () => {
        if(localStorage.getItem("name") !== ""){ 
            return(
                <>
                    <ul>
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/contact">Contact</NavLink></li>
                    <li><button onClick={handleClick}>Logout</button></li>
                    <li className="username">{localStorage.getItem("name")}</li>   
            </ul>
                </>
            )
        }else{
            return(
                <>
                <ul>
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/contact">Contact</NavLink></li>
                    <li><NavLink to="/login">Login</NavLink></li>
                    <li><NavLink to="/signup">Register</NavLink></li>  
               </ul>
                </>
            )
        }
    }
    const [open, setOpen] = useState(false);
    // const [show, setShow] = useState(false);

    // const [userName, setUserName] = useState("");
    
    // useEffect(() => {
    //     callNavPage();
    // }, []);
 

    return (
        <nav className="navbar">
            <div className="brand-title"><img src={logoc} alt="logo"/></div>       
            
        <a href="#0" className="toggle-button" onClick={() => setOpen(!open)}>  {/*toggle button */}
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </a>
            
            <div className={`navbar-links ${open ? 'active' : ''}`}>
                <RenderMenu />
           
        </div>
    </nav>

            )
}

 export default Navigation
