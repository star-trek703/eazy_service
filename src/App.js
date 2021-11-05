// import React from 'react'
import './App.css';
// import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Navbar from './components/Navbar';
import Home from './components/Home';
import Footer from './components/Footer';
import PageNotFound from './components/errors/PageNotFound';
import AboutUs from './components/AboutUs';

const App = () => {
  return (
    <Router>
      <Navbar />

      <Switch>
        <Route path='/' exact render={ () => (
          <Home />
        ) } />
        <Route path='/about-us' component={ AboutUs } />
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
