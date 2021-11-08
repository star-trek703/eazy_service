import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'

const NewRequest = () => {
    return (
        <div>
            <Helmet>
                <title></title>
            </Helmet>
            
            <section className="with-bg solid-section">
                <div className="fix-image-wrap" data-image-src="/assets/images/service/tools.jpg" data-parallax="scroll"></div>
                <div className="theme-back"></div>
                <div className="container page-info">
                    <div className="section-alt-head container-md">
                        <h1 className="section-title text-upper text-lg" data-inview-showup="showup-translate-right">
                            New Request
                        </h1>
                    </div>
                </div>
                <div className="section-footer">
                    <div className="container" data-inview-showup="showup-translate-down">
                        <ul className="page-path">
                            <li>
                                <Link to="/">
                                    Home
                                </Link>
                            </li>
                            <li className="path-separator">
                                <i className="fas fa-chevron-right" aria-hidden="true"></i>
                            </li>
                            <li>New Request</li>
                        </ul>
                    </div>
                </div>
            </section>
            <section>
                <div className="container">
                    <nav className="user-dashboard-menu">
                        <ul>
                            <li className="menu-item">
                                <Link to="/dashboard">
                                    Dashboard
                                </Link>
                            </li>
                            <li className="menu-btn menu-stick-right">
                                <Link className="btn btns-bordered-alt text-upper" to="/new-request">
                                    New Request
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </section>
            <section className="shift-xl content-section">
                <div className="container">
                    <div className="section-head text-center container-md">
                        <h2 className="section-title text-upper text-lg" data-inview-showup="showup-translate-right">
                            New Request
                        </h2>
                        <p data-inview-showup="showup-translate-left">
                            Fill out the application now and save time.
                        </p>
                    </div>
                    <div className="medium-container">
                        <form className="new-ticket">
                            <div className="offs-lg" data-inview-showup="showup-translate-bottom">
                                <div className="field-group">
                                    <div className="field-wrap">
                                        <input className="field-control" name="title" placeholder="Issue Subject" required="" />
                                        <span className="field-back"></span>
                                    </div>
                                </div>
                                <div className="field-group">
                                    <div className="field-wrap">
                                        <input className="field-control" name="name" placeholder="Enter Name" required="" value="test customer" />
                                        <span className="field-back"></span>
                                    </div>
                                </div>
                                <div className="field-group">
                                    <div className="field-wrap">
                                        <input className="field-control" name="mobile" placeholder="Mobile No." required="" value="9082491543" />
                                        <span className="field-back"></span>
                                    </div>
                                </div>
                                <div className="field-group">
                                    <div className="field-wrap">
                                        <input className="field-control" name="email" placeholder="Email Address" required="" value="n@g.in" />
                                        <span className="field-back"></span>
                                    </div>
                                </div>
                                <div className="field-group">
                                    <div className="field-wrap">
                                        <input className="field-control" name="pickup_address" placeholder="Pickup Address" required="" value="test address " />
                                        <span className="field-back"></span>
                                    </div>
                                </div>
                                <div className="field-group chosen-field">
                                    <div className="field-wrap">
                                        <select className="field-control" name="pincode" placeholder="Pincode" required="">
                                            <option value="">Select Pincode</option>
                                            <option value="1">421201</option>
                                            <option value="2">421202</option>
                                            <option value="3">421203</option>
                                            <option value="4">421204</option>
                                            <option value="5">421301</option>
                                            <option value="6">421306</option>
                                        </select>
                                        <span className="select-arrow">
                                            <i className="fas fa-chevron-down"></i>
                                        </span>
                                        <span className="field-back"></span>
                                    </div>
                                </div>
                                <div className="field-group">
                                    <label>
                                        <b>Pickup Date</b>
                                    </label>
                                    <div className="field-wrap">
                                        <input type="date" className="field-control" name="date" placeholder="Select date" min="2021-11-08" required="" />
                                        <span className="field-back"></span>
                                    </div>
                                </div>
                                <div className="field-group chosen-field">
                                    <div className="field-wrap">
                                        <select className="field-control" name="time_slot" placeholder="Time Slot" required="">
                                            <option value="">Select Time Slot</option>
                                            <option value="09AM - 11AM" style={{ display: 'none' }}>09AM - 11AM</option>
                                            <option value="11AM - 01PM" style={{ display: 'none' }}>11AM - 01PM</option>
                                            <option value="01PM - 03PM" style={{ display: 'none' }}>01PM - 03PM</option>
                                            <option value="03PM - 05PM" style={{ display: 'none' }}>03PM - 05PM</option>
                                            <option value="05PM - 07PM" style={{ display: 'none' }}>05PM - 07PM</option>
                                        </select>
                                        <span className="select-arrow">
                                            <i className="fas fa-chevron-down"></i>
                                        </span>
                                        <span className="field-back"></span>
                                    </div>
                                </div>
                                <div className="field-group">
                                    <div className="field-wrap">
                                        <textarea className="field-control" name="description" placeholder="Describe issues" required=""></textarea>
                                        <span className="field-back"></span>
                                    </div>
                                </div>
                            </div>
                            <div className="row cols-lg">
                                <div className="col-6 sm-col-3 sm-col-offs-3" data-inview-showup="showup-translate-right">
                                    <button className="btn col-12 text-upper" type="submit">Submit</button>
                                </div>
                                <div className="col-6 sm-col-3" data-inview-showup="showup-translate-left">
                                    <button className="btn col-12 btns-bordered text-upper" type="reset">Reset</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default NewRequest
