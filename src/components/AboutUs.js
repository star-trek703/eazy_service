import { useEffect } from 'react'
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'

const AboutUs = ({ navbarStatus, setNavbarStatus }) => {
    useEffect(() => {
        setNavbarStatus(false)
        console.log(navbarStatus)
    }, [])

    return (
        <div>
            <Helmet>
                <title>Eazy Service - About</title>
            </Helmet>

            <section className="with-bg solid-section">
                <div className="fix-image-wrap" data-image-src="/assets/images/service/harddrive.jpg" data-parallax="scroll"></div>
                <div className="theme-back"></div>
                <div className="container page-info">
                    <div className="section-alt-head container-md">
                        <h1 className="section-title text-upper text-lg" data-inview-showup="showup-translate-right">
                            About Us
                        </h1>
                    </div>
                </div>
                <div className="section-footer">
                    <div className="container" data-inview-showup="showup-translate-down">
                        <ul className="page-path">
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li className="path-separator">
                                <i className="fas fa-chevron-right" aria-hidden="true"></i>
                            </li>
                            <li>About Us</li>
                        </ul>
                    </div>
                </div>
            </section>
            <section className="muted-bg solid-section" data-inview-showup="showup-translate-up">
                <div className="container">
                    <div className="row cols-xl rows-lg">
                        <div className="md-col-12 text-center md-text-left">
                            <h2 className="text-upper text-semibold">
                                About Us
                            </h2>
                            <p>
                                Eazy Service is  formed with a vision to minimize the G-A-P between customers &amp; Authorized Service Centers. We are into providing pick up and drop services to our clients on their fingertip. We will engage in delivering and submitting devices on behalf of our customers to particular Authorized Service Centers for repairs or servicing. Eazy Service ensures that devices are delivered safely and on time. Our main aim is to Save Customer’s valuable Time &amp; Efforts.
                            </p>
                            <p>
                            We Provide two types of Services - Instant Pick & Delivery and Eazy Pick & Delivery Membership Plan. Both the services mainly aim at saving Customers valuable time & efforts at a very affordable cost.
                            </p>
                            <p>
                                Our hassle-free &amp; reliable device pickup service is widely available across Electronic Retail Stores. We ensure to give our customers the most relaxing experience by just seating at home because we believe customers’ time and efforts are most valuable.
                            </p>
                            <h2 className="text-upper text-semibold mt-5">
                                Our Process
                            </h2>
                            <div className="md-col-6 md-fix-container mx-auto">
                                <img className="image" src="/assets/images/service/about.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default AboutUs
