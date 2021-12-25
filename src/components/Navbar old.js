import { useEffect, useState } from 'react'
import { API_URL } from '../config'
import { Link } from "react-router-dom"

const Navbar = ({ navbarStatus, setNavbarStatus, isLoggedIn, setIsLoggedIn }) => {
    useEffect(() => {
        // console.log(navbarStatus)
        // setNavbarStatus(false)
    }, [])

    // logout
    const logout = (e) => {
        e.preventDefault()

        let token = localStorage.getItem('token')

        let formData = new FormData()
        formData.append('token', token)

        let options = {
            method: 'POST',
            body: formData
        }

        fetch(API_URL +"logout.php", options)
            .then(res => res.json())
            .then(data => {
                let { error, message } = data

                if (error) {
                    alert(message)
                } else {
                    setIsLoggedIn(false)

                    localStorage.setItem('logged_in', false)
                    localStorage.setItem('token', '')
                }
            })
    }
    
    return (
        <header className="header">
            <input id="header-default" type="radio" className="collapse" name="siteheader" checked="" />
            <input id="header-shown" type="radio" className="collapse" name="siteheader" checked={ (!navbarStatus) } />
            <input id="header-hidden" type="radio" className="collapse" name="siteheader" />
            
            <nav className="stick-menu menu-wrap simple line">
                <div className="menu-container menu-row">
                    <div className="logo">
                        <Link to="/">
                            <img src="/assets/logo.png" alt="ProFix" />
                        </Link>
                    </div>
                    <div className="header-toggler pull-right xs-shown">
                        <label className="header-shown-sign" htmlFor="header-hidden">
                            <i className="fas fa-times" aria-hidden="true"></i>
                        </label>
                        <label className="header-hidden-sign" htmlFor="header-shown">
                            <i className="fas fa-bars" aria-hidden="true"></i>
                        </label>
                    </div>
                    <div className="clearfix xs-shown"></div>
                    <div className="menu">
                        <ul className="menu-items menu-no-sides">
                            <li>
                                <Link to="/">Home</Link>
                            </li>

                            <li>
                                <Link to="/services">Services</Link>
                            </li>
                            
                            <li>
                                <Link to="/about-us">About us</Link>
                            </li>
                            
                            { (! isLoggedIn) ? 
                            <li>
                                <Link to="/sign-in">Sign In</Link>
                            </li> : '' }
                            
                            { (isLoggedIn) ? 
                            <li>
                                <Link to="/dashboard">Dashboard</Link>
                            </li> : '' }

                            { (isLoggedIn) ? 
                            <li>
                                <Link to="#" onClick={ logout }>Logout</Link>
                            </li> : '' }
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Navbar
