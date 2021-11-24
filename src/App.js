// import React from 'react'
import './App.css';
import { API_URL } from './config'
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import Navbar from './components/Navbar';
import Home from './components/Home';
import Footer from './components/Footer';
import PageNotFound from './components/errors/PageNotFound';
import AboutUs from './components/AboutUs';
import SignIn from './components/SignIn';
import Dashboard from './components/Dashboard';
import NewRequest from './components/NewRequest';
import Terms from './components/Terms';
import PrivacyPolicy from './components/PrivacyPolicy';
import ScrollTop from './components/ScrollTop';
import ForgotPassword from './components/ForgotPassword';
import SingleRequest from './components/SingleRequest';
import EditRequest from './components/EditRequest';
import Services from './components/Services';
import Purchase from './components/Purchase';

const App = () => {
  var logged_in = localStorage.getItem('logged_in')

  const [isLoggedIn, setIsLoggedIn] = useState(logged_in)
  const [userID, setUserID] = useState('')
  
  const [navbarStatus, setNavbarStatus] = useState(true)
  
  useEffect(() => {
    let token = localStorage.getItem('token')

    let formData = new FormData()
    formData.append('token', token)

    let options = {
      method: 'POST',
      body: formData
    }

    fetch(API_URL +"isLoggedIn.php", options)
      .then(res => res.json())
      .then(data => {
        let { error, logged_in } = data

        if (! error) {
          setIsLoggedIn(logged_in)
          setUserID(data.user_id)
        }
        else{
          setIsLoggedIn(logged_in)
          setUserID('')

          localStorage.setItem('logged_in', false)
          localStorage.setItem('token', '')
        }
      })
  }, [])

  return (
    <Router>
      
      <ScrollTop />
      <Navbar navbarStatus={ navbarStatus } isLoggedIn={ isLoggedIn } setIsLoggedIn={ setIsLoggedIn } />

      <Switch>
        <Route path='/' exact render={ () => (
          <Home setNavbarStatus={ setNavbarStatus } />
        ) } />

        <Route path='/services' render={ (props) => 
          <Services props={ props } setNavbarStatus={ setNavbarStatus } />
        } />
        
        <Route path='/purchase' render={ (props) => 
          <Purchase props={ props } setNavbarStatus={ setNavbarStatus } />
        } />
        
        <Route path='/about-us' render={ () => 
          <AboutUs setNavbarStatus={ setNavbarStatus } />
        } />
        
        <Route path='/sign-in' render={ (props) => 
          (! isLoggedIn) ? 
          <SignIn props={ props } setIsLoggedIn={ setIsLoggedIn } /> : 
          <Redirect to='/dashboard' />
        } />
        
        <Route path='/forgot-password' render={ (props) => 
          (! isLoggedIn) ? 
          <ForgotPassword props={ props } /> : 
          <Redirect to='/dashboard' />
        } />
        
        <Route path='/dashboard' render={ (props) => 
          (isLoggedIn) ? 
          <Dashboard props={ props } /> : 
          <Redirect to='/sign-in' />
        } />
        
        <Route path='/dashboard' render={ (props) => 
          (isLoggedIn) ? 
          <Dashboard props={ props } /> : 
          <Redirect to='/sign-in' />
        } />

        <Route path='/new-request' render={ (props) => 
          (isLoggedIn) ? 
          <NewRequest props={ props } userID={ userID } /> : 
          <Redirect to='/sign-in' />
        } />

        <Route path='/request/:id' render={ (props) => 
          (isLoggedIn) ? 
          <SingleRequest props={ props } /> : 
          <Redirect to='/sign-in' />
        } />

        <Route path='/update-request/:id' render={ (props) => 
          (isLoggedIn) ? 
          <EditRequest props={ props } /> : 
          <Redirect to='/sign-in' />
        } />

        <Route path='/terms' component={ Terms } />
        <Route path='/privacy' component={ PrivacyPolicy } />

        <Route>
          <PageNotFound />
        </Route>
      </Switch>

      <Footer />
    </Router>
  )
}

export default App
