import { Link } from "react-router-dom"

const Navbar = () => {
    return (
        <div>
            <header className="header">
                <input id="header-default" type="radio" className="collapse" name="siteheader" checked="" />
                <input id="header-shown" type="radio" className="collapse" name="siteheader" />
                <input id="header-hidden" type="radio" className="collapse" name="siteheader" checked="" />
                
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
                                    <Link to="/about-us">About us</Link>
                                </li>
                                <li>
                                    <Link to="/sign-in">Sign In</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        </div>
    )
}

export default Navbar
