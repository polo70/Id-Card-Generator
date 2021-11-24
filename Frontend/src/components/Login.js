import React, {  useState } from 'react'
import axios from 'axios'
import { NavLink } from 'react-router-dom'
import './Login.css'
function Login() {

    function rollchoicerequest() {
        window.location = 'http://localhost:3000/rollchoice';
    }
    
    const[email,setemail] = useState('')
    const[password,setpassword] = useState('')

    const login_info = {
        profile:{
            email:email,
            password:password
        }
    }

    function submit_login_form(event){
        event.preventDefault();
        axios.post('/api/login',login_info)
            .then((response) =>{
                console.log(response);
                if(response.data.result==true){
                    localStorage.setItem('name',response.data.name)
                    alert("Login Successfull")
                    rollchoicerequest()
                }
            }).catch((error)=>{
                console.log(error);
            })
    
    }
    return (
        <div>
            
            {
                <>
        <div className="outer-box">
            <div className="box">
                <form method="POST" className="content">
                    <h1 id="say-hello">Login</h1>
                    <div className="email">
                        <p>Email</p>
                        <input className="fld" placeholder="Enter your email address" id="email" name="email" type="email" value={email} onChange={(e)=>setemail(e.target.value)}/>
                    </div>
                    <div className="password">
                       <p>Password</p>
                        <input className="fld" placeholder="Enter your password" id="password" name="password" type="password" value={password} onChange={(e)=>setpassword(e.target.value)}/>
                    </div>
                   
                    <button className="button" type="submit" onClick={submit_login_form}>Login</button>
                    <div className="redirect">
                    <NavLink to="/signup">Not a member? Register</NavLink>
                    </div>
                </form>
            </div>
            </div>
        </>
            }


        </div>
    )
}

export default Login
