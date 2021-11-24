import React, { useState } from 'react'
import axios from 'axios'
import { NavLink, useHistory } from 'react-router-dom'

// import './ModifyForm.css'

function ModifyForm() {
    
    function downloadcardrequest() {
        window.location = 'http://localhost:3000/downloadcard';
    }
    
    const[company_name,setcompany_name]=useState("")
    const[name,setname]=useState("")
    const[contact_no,setcontact_no]= useState("")
    const[birth_date,setbirth_date]=useState("")
    const[designation,setdesignation]=useState('')

    const modify_info = {
        info:{
            company_name:company_name,
            name:name,
            contact_no:contact_no,
            birth_date:birth_date,
            designation:designation
        }
    }

    function edit_user_info(event){
        event.preventDefault();
        axios.post('/api/edit_details',modify_info)
            .then((response) =>{
                if(response.data.result===true){
                    console.log(response);
                    alert("Data saved Successfully")
                    downloadcardrequest();
                }
            }).catch((error)=>{
                console.log(error);

            })
    
    }


    return (
        <>
            <div className="cardform-outer-box">
                <div className="cardform-box">
                    <form method="POST" className="cardContent">
                        <h2 id="say-hello">Fill Details</h2>
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
                                <p className="cardform-label">Contact No *</p>
                                <input className="cardFld" placeholder="Change your contact no." id="no" name="contact" type="number" value={contact_no} onChange={(event) => setcontact_no(event.target.value)} required/>
                            </div>
                            <div className="id">
                                <p className="cardform-label">DOB *</p>
                                <input className="cardFld" placeholder="Change your birth date" id="dob" name="dob" type="date" value={birth_date} onChange={(event) => setbirth_date(event.target.value)} required/>
                            </div>
                        </div>
                        <div className="two-group">
                            <div className="contact-no">
                                <p className="cardform-label">Designation *</p>
                                <input className="cardFld" placeholder="Change your designation" id="no" name="contact" type="text" value={designation} onChange={(event) => setdesignation(event.target.value)} required/>
                        </div>
                        </div>
                        <div className="card-btn">
                        <NavLink to="/downloadcard">
                        <button className="cardform-button" type="submit" onClick={edit_user_info}>Submit</button>
                        </NavLink>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default ModifyForm
