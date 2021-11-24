import React, { useState } from 'react'
import axios from 'axios'
import { NavLink, useHistory } from 'react-router-dom'
import './Signup.css'
function Signup() {

    function rollchoicerequest() {
       window.location = 'http://localhost:3000/rollchoice';
      }

    const[myname,setmyname] = useState("")
    const[email,setemail]= useState("")
    const[password,setpassword]= useState("")
    const[cdpassword,setcdpassword]=useState("")

    function checkpwd(){
        return password===cdpassword
    }

    const user_info = {
        profile:{
            name:myname,
            email:email,
            password:password
        }
    }

    function handleClick(event){
    event.preventDefault();
    if (checkpwd()){
    axios.post('/api/signup',user_info )
    .then((response) => {
        if(response.data.result==true){
            localStorage.setItem('name',myname)
            console.log(response)
            alert("Signed Successfull");
            rollchoicerequest();
        }
        else{
            alert("Account already exist")
        }         
    }).catch((error) => {
        console.log(error)
    })
}
    else{
        alert("Password are not same")
    }
}

    return (
        <>
        <div className="outer-box">
            <div className="box">
                <form method="POST" className="content">
                    <h1 id="say-hello">Sign Up</h1>
                    <div className="name">
                        <p>Name</p>
                        <input className="fld" placeholder="Enter your name" type="text" id="name" name="name" value={myname} onChange={(event) => setmyname(event.target.value)}/>
                    </div>

                    <div className="email">
                        <p>Email</p>
                        <input className="fld" placeholder="Enter your email address" id="email" name="email" type="email" value={email} onChange={(event) => setemail(event.target.value)}/>
                    </div>
                    <div className="password">
                       <p>Password</p>
                        <input className="fld" placeholder="Enter your password" id="password" name="password" type="password" value={password} onChange={(event) => setpassword(event.target.value)}/>
                    </div>
                    <div className="cpassword">
                      <p>Confirm Password</p>
                        <input className="fld" placeholder="Confirm your password" id="cdpassword" name="cdpassword" type="password"value={cdpassword} onChange={(event) => setcdpassword(event.target.value)}/>
                    </div>
                    <button className="button" type="submit" onClick={handleClick} >Signup</button>
                    <div className="redirect">
                    <NavLink to="/login">Already registered? Login</NavLink>
                    </div>
                </form>
            </div>
            </div>
        </>
    )
}

export default Signup
