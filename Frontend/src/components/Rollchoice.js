import React from 'react'
import { NavLink } from 'react-router-dom'
import './Rollchoice.css'

function Rollchoice() {
    return (
        <>
            
                <div className="rollchoice">
                    <div class="rollDetails">
                        <h1 className="rollIntro">Select Your Task</h1>
                        <div class="rollButtons">
                            <NavLink className="rollBtn" to="/cardform">
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                Create New ID card
                            </NavLink>
                        </div>
                        <div class="rollButtons">
                            <NavLink className="rollBtn" to="/modifyform">
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                Edit your ID Card
                            </NavLink>
                        </div>
                    </div>
                </div>

        
        </>
    )
}

export default Rollchoice
