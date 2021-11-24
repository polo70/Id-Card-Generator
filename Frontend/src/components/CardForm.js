import React, { useState } from 'react'
import axios from 'axios'
import { NavLink} from 'react-router-dom'

import './CardForm.css'

function CardForm() {

    function downloadrequest() {
        window.location = 'http://localhost:3000/downloadcard';
    }
    
    const[company_name,setcompany_name] = useState("")
    const[name,setname]=useState('')
    const[contact_no,setcontact_no]= useState("")
    const[email,setemail]= useState("")
    const[birth_date,setbirth_date]=useState("")
    const[designation,setdesignation]=useState('')

    const person_info = {
        info:{
            company_name:company_name,
            name:name,
            email:email,
            contact_no:contact_no,
            birth_date:birth_date,
            designation:designation
        }
    }

    function submit_user_info(event){
        event.preventDefault();
        axios.post('/api/create_info',person_info)
            .then((response) =>{
                if(response.data==="user-info-added"){
                    console.log(response);
                    alert("Data saved Successfully")
                    
                }
                
                console.log(response.data)
            }).catch((error)=>{
                console.log(error);

            })
            downloadrequest();
    
    }

    return (
        <>
            <div className="cardform-outer-box">
                <div className="cardform-box">
                    <form method="POST" className="cardContent">
                        <h2 id="say-hello">Fill Details</h2>
                        <h5 id="say-hello">* Indicates mandatory fields</h5>
                        <div className="two-group">
                            <div className="companyName">
                                <p className="cardform-label">Company Name *</p>
                                <input className="cardFld" placeholder="Enter company name" type="text" id="name" name="companyName" value={company_name} onChange={(event) => setcompany_name(event.target.value)} required/>
                            </div>
                            <div className="name">
                                <p className="cardform-label">Name *</p>
                                <input className="cardFld" placeholder="Enter your name" type="text" id="name" name="name" value={name} onChange={(event) => setname(event.target.value)} required/>
                            </div>
                        </div>
                        <div className="two-group">
                            <div className="contact-no">
                                <p className="cardform-label">Contact-no *</p>
                                <input className="cardFld" placeholder="Enter your contact no." id="no" name="contact" type="number" value={contact_no} onChange={(event) => setcontact_no(event.target.value)} required/>
                            </div>
                            <div className="id">
                                <p className="cardform-label">Email*</p>
                                <input className="cardFld" placeholder="Enter your Email ID" id="id" name="id" type="text" value={email} onChange={(event) => setemail(event.target.value)} required/>
                            </div>
                        </div>

                        <div className="two-group">
                            <div className="dob">
                                <p className="cardform-label">Date of Birth</p>
                                <input className="cardFld" id="dob" name="dob" 
                               type="date" value={birth_date} onChange={(event) => setbirth_date(event.target.value)} />
                            </div>
                            <div className="designation">
                                <p className="cardform-label">Designation</p>
                                <input className="cardFld" placeholder="Enter your designation" type="text" id="designation" name="designation" value={designation} onChange={(event) => setdesignation(event.target.value)}/>
                            </div>
                        </div>
                        <div className="card-btn">
                        <NavLink to="/downloadcard">
                        <button className="cardform-button" type="submit" onClick={submit_user_info}>Submit</button>
                        </NavLink>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default CardForm
