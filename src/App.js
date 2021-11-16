// import React from 'react'
import './App.css';
import API_URL from './config'
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
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

const App = () => {
  // const [loggedIn, setloggedIn] = useState(false)
  
  // useEffect(() => {
  //   fetch(API_URL +'')
  //     .then(res => res.json())
  //     .then(data => {
  //       data
  //     })
  //     .catch(err => console.log(err))
  // }, [])

  return (
    <Router>
      
      <ScrollTop />
      <Navbar />

      <Switch>
        <Route path='/' exact render={ () => (
          <Home />
        ) } />
        <Route path='/about-us' component={ AboutUs } />
        <Route path='/sign-in' component={ SignIn } />
        <Route path='/forgot-password' component={ ForgotPassword } />
        <Route path='/dashboard' component={ Dashboard } />
        <Route path='/new-request' component={ NewRequest } />
        <Route path='/terms' component={ Terms } />
        <Route path='/privacy' component={ PrivacyPolicy } />
        {/* <Route path='/products' render={ () => (
          <Products categories={ categories } />
        ) } />
        <Route path='category/:category' render={ ({match}) => (
          <SingleCategory category={ categories.find(category => category.name === match.params.category) } />
        ) } />
        <Route path='/services' component={ Services } />
        <Route path='/contact' component={ Contact } />
        <Route path='/about' component={ About } /> */}
        <Route>
          <PageNotFound />
        </Route>
      </Switch>

      <Footer />
    </Router>
  )
}

export default App
