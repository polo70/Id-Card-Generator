import React, { createContext, useReducer,useState, useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navigation from './components/Navigation'
import Contact from './components/Contact'
import Home from './components/Home'
import Login from './components/Login'
import Signup from './components/Signup'
// import Logout from './components/Logout'
import Rollchoice from './components/Rollchoice'
import Downloadcard from './components/Downloadcard'
import CardForm from './components/CardForm'
import ModifyForm from './components/ModifyForm'
import './App.css'
import ErrorPage from './components/ErrorPage';


const Routing = () => {

  
  // useEffect(() => {
  //   localStorage.setItem("name", "");

  // }, [])
  return (
    <Router>
      <Navigation />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/contact">
          <Contact />
        </Route>
        <Route exact path="/login" >
          <Login transform="unset" />
        </Route>
        <Route exact path="/signup" >
          <Signup />
        </Route>
        {/* <Route exact path="/logout">
          <Logout />
        </Route> */}
        <Route exact path="/rollchoice">
          <Rollchoice />
        </Route>
        <Route exact path="/downloadcard">
          <Downloadcard />
        </Route>
        <Route exact path="/cardform">
          <CardForm />
        </Route>
        <Route exact path="/modifyform">
          <ModifyForm />
        </Route>
        <Route>
          <ErrorPage />
        </Route>
      </Switch>
    </Router>
  )
}

function App() {

  
  return (

    <>
      
        <Routing />
      
    </>
  )
}

export default App
