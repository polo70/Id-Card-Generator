import './Home.css'
import React, { useState, useEffect, useRef } from 'react'
import { NavLink } from 'react-router-dom'

const Home = () => {
  return (
    <>
      <body>
        <div className="home">

          <div className="image">
            <img className="homeImg" src="https://www.margsoft.com/img/e_admin/graphic/employee-IDcard.png" alt="" />
          </div>
          <div class="details">
            <h1 className="intro">Create your ID card instantly</h1>
            <p className="desc">Get your id card with a unique QR code and download easily</p>
            <div class="homeButtons">
              <NavLink className="homeBtn" to="/signup">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                Get Started
              </NavLink>
            </div>
          </div>
        </div>

      </body>
    </>
  )
}
export default Home