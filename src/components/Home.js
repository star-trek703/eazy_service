import { Helmet } from 'react-helmet'
import { Carousel } from 'react-responsive-carousel'
import './carousel.css'
import { Link } from 'react-router-dom'
import { useEffect } from 'react'

const Home = ({ navbarStatus, setNavbarStatus }) => {
    useEffect(() => {
        if(!navbarStatus) {
            setNavbarStatus(false)
            console.log('dsds')
        }
    }, [])

    return (
        <div>
            <Helmet>
                <title>Eazy Service - Pick up and drop facility for smartphones at your fingertip</title>
            </Helmet>

            <section>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <div id="home-page-slider">
                        <Carousel showArrows={ true } showThumbs={ false } showStatus={ false } swipeable={ true } emulateTouch={ true } autoPlay={ true }>
                            <div>
                                <img src="/assets/images/slider/new/Homepage Design 1.jpg" alt="" />
                            </div>
                            <div>
                                <img src="/assets/images/slider/new/Homepage Design 2.jpg" alt="" />
                            </div>
                            <div>
                                <img src="/assets/images/slider/new/Homepage Design 3.jpg" alt="" />
                            </div>
                            <div>
                                <img src="/assets/images/slider/new/Homepage Design 4.jpg" alt="" />
                            </div>
                        </Carousel>
                    </div>
                </div>
            </section>
            <div className="clearfix muted-bg">
                <section className="content-section">
                    <div className="container">
                        <div className="section-head text-center container-md">
                            <h2 className="section-title text-upper text-lg" data-inview-showup="showup-translate-right">
                                Benefits For Customer
                            </h2>
                        </div>
                        <div className="row cols-md rows-lg text-center">
                            <div className="md-col-6">
                                <div className="row cols-md rows-lg">
                                    <div className="sm-col-6">
                                        <div className="feature feature-side text-left" data-inview-showup="showup-translate-up">
                                            <div className="feature-icon">
                                                <i className="fas fa-money-bill-alt" aria-hidden="true"></i>
                                            </div>
                                            <div className="feature-title text-upper">Value for Money</div>
                                        </div>
                                    </div>
                                    <div className="sm-col-6">
                                        <div className="feature feature-side text-left" data-inview-showup="showup-translate-up">
                                            <div className="feature-icon">
                                                <i className="fas fa-balance-scale" aria-hidden="true"></i>
                                            </div>
                                            <div className="feature-title text-upper">
                                                Save Time &amp; Efforts
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="md-col-6">
                                <div className="row cols-md rows-lg">
                                    <div className="sm-col-6">
                                        <div className="feature feature-side text-left" data-inview-showup="showup-translate-up">
                                            <div className="feature-icon">
                                                <i className="fas fa-warehouse" aria-hidden="true"></i>
                                            </div>
                                            <div className="feature-title text-upper">
                                                No Need to Visit Service Centers
                                            </div>
                                        </div>
                                    </div>
                                    <div className="sm-col-6">
                                        <div className="feature feature-side text-left" data-inview-showup="showup-translate-up">
                                            <div className="feature-icon">
                                                <i className="fas fa-truck-pickup" aria-hidden="true"></i>
                                            </div>
                                            <div className="feature-title text-upper">
                                                Easy pickup &amp; delivery process
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="md-col-6">
                                <div className="row cols-md rows-lg">
                                    <div className="sm-col-6">
                                        <div className="feature feature-side text-left" data-inview-showup="showup-translate-up">
                                            <div className="feature-icon">
                                                <i className="fas fa-shield-alt" aria-hidden="true"></i>
                                            </div>
                                            <div className="feature-title text-upper">
                                                4 years of Service
                                            </div>
                                        </div>
                                    </div>
                                    <div className="sm-col-6">
                                        <div className="feature feature-side text-left" data-inview-showup="showup-translate-up">
                                            <div className="feature-icon">
                                                <i className="fas fa-check" aria-hidden="true"></i>
                                            </div>
                                            <div className="feature-title text-upper">
                                                Tied up with Authorised Service Centers
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="md-col-6">
                                <div className="row cols-md rows-lg">
                                    <div className="sm-col-6">
                                        <div className="feature feature-side text-left" data-inview-showup="showup-translate-up">
                                            <div className="feature-icon">
                                                <i className="fas fa-lock" aria-hidden="true"></i>
                                            </div>
                                            <div className="feature-title text-upper">
                                                Transparent, Secure &amp; reliable
                                            </div>
                                        </div>
                                    </div>
                                    <div className="sm-col-6">
                                        <div className="feature feature-side text-left" data-inview-showup="showup-translate-up">
                                            <div className="feature-icon">
                                                <i className="fas fa-peace" aria-hidden="true"></i>
                                            </div>
                                            <div className="feature-title text-upper">
                                                Complete Peace of Mind
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <section className="with-bg solid-section">
                <div className="fix-image-wrap" data-image-src="/assets/images/service/motherboard-2.jpg" data-parallax="scroll"></div>
                <div className="theme-back inner-shadow"></div>
                <div className="container text-center">
                    <div className="service-steps text-upper" data-inview-showup="showup-scale">
                        <div className="step">
                            <span className="step-number">1</span>
                            <span>Request Submitted</span>
                        </div>
                        <div className="step">
                            <span className="step-number">2</span>
                            <span>Device Collected</span>
                        </div>
                        <div className="step">
                            <span className="step-number active">3</span>
                            <span>Sent to Service Center</span>
                        </div>
                        <div className="step">
                            <span className="step-number">4</span>
                            <span>Delivered to customer</span>
                        </div>
                    </div>
                </div>
            </section>
            <section className="content-section">
                <div className="container">
                    <div className="section-head text-center container-md">
                        <h2 className="section-title text-upper text-lg" data-inview-showup="showup-translate-right">
                            What people say
                        </h2>
                        <p data-inview-showup="showup-translate-left">
                            Real customers reviews
                        </p>
                    </div>
                    <div id="testimonials">
                        <Carousel showArrows={ true } showThumbs={ false } showStatus={ false } swipeable={ true } emulateTouch={ true }>
                            <div className="testimonial-item">
                                <div className="simple-testimonial text-center">
                                    <div className="tt-title">Great customer support</div>
                                    <div className="tt-rating">
                                        <i className="tt-star fa fa-star" aria-hidden="true"></i>
                                        <i className="tt-star fa fa-star" aria-hidden="true"></i>
                                        <i className="tt-star fa fa-star" aria-hidden="true"></i>
                                        <i className="tt-star fa fa-star" aria-hidden="true"></i>
                                        <i className="tt-star fa fa-star" aria-hidden="true"></i>
                                    </div>
                                    <div className="tt-content">
                                        <div className="tt-quote">???</div>
                                        Eazy Service policy will help to save our most important time, required to spend at Authorised Service Centers for Repairs at a minimal cost.
                                    </div>
                                    <div className="pexx-tt-user-title">
                                        Vijay Hingale
                                    </div>
                                </div>
                            </div>

                            <div>
                                <div className="simple-testimonial text-center">
                                    <div className="tt-title">Flexible services</div>
                                    <div className="tt-rating">
                                        <i className="tt-star fa fa-star" aria-hidden="true"></i>
                                        <i className="tt-star fa fa-star" aria-hidden="true"></i>
                                        <i className="tt-star fa fa-star" aria-hidden="true"></i>
                                        <i className="tt-star fa fa-star" aria-hidden="true"></i>
                                        <i className="tt-star fa fa-star" aria-hidden="true"></i>
                                    </div>
                                    <div className="tt-content">
                                        <div className="tt-quote">???</div>
                                        As the Authorised Service Center is far from my home, I couldn???t afford to waste my time &amp; efforts in traveling long for smartphone repairs. Eazy Service has made it easier for me.
                                    </div>
                                    <div className="pexx-tt-user-title">
                                        Abhishek Nalawade
                                    </div>
                                </div>
                            </div>

                            <div>
                                <div className="simple-testimonial text-center">
                                    <div className="tt-title">
                                        Excellent team
                                    </div>
                                    <div className="tt-rating">
                                        <i className="tt-star fa fa-star" aria-hidden="true"></i>
                                        <i className="tt-star fa fa-star" aria-hidden="true"></i>
                                        <i className="tt-star fa fa-star" aria-hidden="true"></i>
                                        <i className="tt-star fa fa-star" aria-hidden="true"></i>
                                        <i className="tt-star fa fa-star" aria-hidden="true"></i>
                                    </div>
                                    <div className="tt-content">
                                        <div className="tt-quote">???</div>
                                        Being a job holder its difficult to visit an authorized service center to get my One Plus repaired, Eazy Service takes the whole responsibility of pick up and delivering my device from my home to the service center
                                    </div>
                                    <div className="pexx-tt-user-title">
                                        Rahul Gupta
                                    </div>
                                </div>
                            </div>

                            <div>
                                <div className="simple-testimonial text-center">
                                    <div className="tt-title">
                                        Flexible services
                                    </div>
                                    <div className="tt-rating">
                                        <i className="tt-star fa fa-star" aria-hidden="true"></i>
                                        <i className="tt-star fa fa-star" aria-hidden="true"></i>
                                        <i className="tt-star fa fa-star" aria-hidden="true"></i>
                                        <i className="tt-star fa fa-star" aria-hidden="true"></i>
                                        <i className="tt-star fa fa-star" aria-hidden="true"></i>
                                    </div>
                                    <div className="tt-content">
                                        <div className="tt-quote">???</div>
                                        Highly recommended for all users who want complete peace of mind in just less than a thousand rupees that too for 4 years.
                                    </div>
                                    <div className="pexx-tt-user-title">
                                        Navin Shah
                                    </div>
                                </div>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </section>
            <section className="content-section">
                <div className="container-fluid">
                    <div className="section-head text-center container-md">
                        <h2 className="section-title text-upper text-lg" data-inview-showup="showup-translate-right">
                            Brands We Accept
                        </h2>
                    </div>
                    <div id="partners-carousel" className="row" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap' }}>
                        <div className="lg-col-1 mx-2">
                            <Link className="grayscale-link" to="#">
                                <div className="grayscale-link">
                                    <img className="image" src="/assets/pngs/global-samsung-logo.png" alt="" />
                                </div>
                                <p className="text-center pt-2">Unique Telecom</p>
                            </Link>
                        </div>
                        <div className="lg-col-1 mx-2">
                            <Link className="grayscale-link" to="#">
                                <div className="grayscale-link">
                                    <img className="image" src="/assets/pngs/OnePlus_logo.png" alt="" />
                                </div>
                                <p className="text-center pt-2">S.S. Services</p>
                            </Link>
                        </div>
                        <div className="lg-col-1 mx-2">
                            <Link className="grayscale-link" to="#">
                                <div className="grayscale-link">
                                    <img className="image" src="/assets/pngs/Xiaomi_logo_(2021-).png" alt="" />
                                </div>
                                <p className="text-center pt-2">Unique Telecom</p>
                            </Link>
                        </div>
                        <div className="lg-col-1 mx-2">
                            <Link className="grayscale-link" to="#">
                                <div className="grayscale-link">
                                    <img className="image" src="/assets/pngs/ASUS_Logo.png" alt="" />
                                </div>
                                <p className="text-center pt-2">TVS Electronics</p>
                            </Link>
                        </div>
                        <div className="lg-col-1 mx-2">
                            <Link className="grayscale-link" to="#">
                                <div className="grayscale-link">
                                    <img className="image" src="/assets/pngs/download.png" alt="" />
                                </div>
                                <p className="text-center pt-2">S.S. Services</p>
                            </Link>
                        </div>
                        <div className="lg-col-1 mx-2">
                            <Link className="grayscale-link" to="#">
                                <div className="grayscale-link">
                                    <img className="image" src="/assets/pngs/Motorola_new_logo.png" alt="" />
                                </div>
                                <p className="text-center pt-2">S.S. Services</p>
                            </Link>
                        </div>
                        <div className="lg-col-1 mx-2">
                            <Link className="grayscale-link" to="#">
                                <div className="grayscale-link">
                                    <img className="image" src="/assets/pngs/Nokia_wordmark.png" alt="" />
                                </div>
                                <p className="text-center pt-2">S.S. Services</p>
                            </Link>
                        </div>
                        <div className="lg-col-1 mx-2">
                            <Link className="grayscale-link" to="#">
                                <div className="grayscale-link">
                                    <img className="image" src="/assets/pngs/Huawei_Honor_Logo.png" alt="" />
                                </div>
                                <p className="text-center pt-2">S.S. Services</p>
                            </Link>
                        </div>
                        <div className="lg-col-1 mx-2">
                            <Link className="grayscale-link" to="#">
                                <div className="grayscale-link">
                                    <img className="image" src="/assets/pngs/Lenovo_logo_2015.png" alt="" />
                                </div>
                                <p className="text-center pt-2">S.S. Services</p>
                            </Link>
                        </div>
                    </div>
                                        
                    <div id="partners-carousel-mobile" className="row" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <Carousel showArrows={ true } showThumbs={ false } showStatus={ false } swipeable={ true } emulateTouch={ true }>
                            <li className="slide selected">
                                <div style={{ marginBottom: '45px' }}>
                                    <Link className="grayscale-link" to="#">
                                        <img className="image" src="/assets/pngs/global-samsung-logo.png" alt="" style={{ height: '60px', objectFit: 'contain' }} />
                                        <p className="text-center pt-2">Unique Telecom</p>
                                    </Link>
                                </div>
                            </li>
                            <li className="slide">
                                <div style={{ marginBottom: '45px' }}>
                                    <Link className="grayscale-link" to="#">
                                        <img className="image" src="/assets/pngs/OnePlus_logo.png" alt="" style={{ height: '60px', objectFit: 'contain' }} />
                                        <p className="text-center pt-2">S.S. Services</p>
                                    </Link>
                                </div>
                            </li>
                            <li className="slide">
                                <div style={{ marginBottom: '45px' }}>
                                    <Link className="grayscale-link" to="#">
                                        <img className="image" src="/assets/pngs/Xiaomi_logo_(2021-).png" alt="" style={{ height: '60px', objectFit: 'contain' }} />
                                        <p className="text-center pt-2">Unique Telecom</p>
                                    </Link>
                                </div>
                            </li>
                            <li className="slide">
                                <div style={{ marginBottom: '45px' }}>
                                    <Link className="grayscale-link" to="#">
                                        <img className="image" src="/assets/pngs/ASUS_Logo.png" alt="" style={{ height: '60px', objectFit: 'contain' }} />
                                        <p className="text-center pt-2">TVS Electronics</p>
                                    </Link>
                                </div>
                            </li>
                            <li className="slide">
                                <div style={{ marginBottom: '45px' }}>
                                    <Link className="grayscale-link" to="#">
                                        <img className="image" src="/assets/pngs/download.png" alt="" style={{ height: '60px', objectFit: 'contain' }} />
                                        <p className="text-center pt-2">S.S. Services</p>
                                    </Link>
                                </div>
                            </li>
                            <li className="slide">
                                <div style={{ marginBottom: '45px' }}>
                                    <Link className="grayscale-link" to="#">
                                        <img className="image" src="/assets/pngs/Motorola_new_logo.png" alt="" style={{ height: '60px', objectFit: 'contain' }} />
                                        <p className="text-center pt-2">S.S. Services</p>
                                    </Link>
                                </div>
                            </li>
                            <li className="slide">
                                <div style={{ marginBottom: '45px' }}>
                                    <Link className="grayscale-link" to="#">
                                        <img className="image" src="/assets/pngs/Nokia_wordmark.png" alt="" style={{ height: '60px', objectFit: 'contain' }} />
                                        <p className="text-center pt-2">S.S. Services</p>
                                    </Link>
                                </div>
                            </li>
                            <li className="slide">
                                <div style={{ marginBottom: '45px' }}>
                                    <Link className="grayscale-link" to="#">
                                        <img className="image" src="/assets/pngs/Huawei_Honor_Logo.png" alt="" style={{ height: '60px', objectFit: 'contain' }} />
                                        <p className="text-center pt-2">S.S. Services</p>
                                    </Link>
                                </div>
                            </li>
                            <li className="slide">
                                <div style={{ marginBottom: '45px' }}>
                                    <Link className="grayscale-link" to="#">
                                        <img className="image" src="/assets/pngs/Lenovo_logo_2015.png" alt="" style={{ height: '60px', objectFit: 'contain' }} />
                                        <p className="text-center pt-2">S.S. Services</p>
                                    </Link>
                                </div>
                            </li>
                        </Carousel>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Home
