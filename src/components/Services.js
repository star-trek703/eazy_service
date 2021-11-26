import { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'
import './accordion.css'
import {
    Accordion,
    AccordionItem,
    AccordionItemButton,
    AccordionItemHeading,
    AccordionItemPanel,
} from 'react-accessible-accordion';

const Services = ({ props }) => {
    const [plan, setPlan] = useState('')

    useEffect(() => {
        let plan_name = localStorage.getItem('plan') ?? ''
        setPlan(plan_name)
    }, [])

    const purchasePlan = (plan_name) => {
        setPlan(plan_name)
        localStorage.setItem('plan', plan_name)

        props.history.push('/purchase')
    }

    return (
        <div>
            <Helmet>
                <title>Eazy Service - Services</title>
            </Helmet>

            <section className="with-bg solid-section">
                <div className="fix-image-wrap" data-image-src="/assets/images/service/harddrive.jpg" data-parallax="scroll"></div>
                <div className="theme-back"></div>
                <div className="container page-info">
                    <div className="section-alt-head container-md">
                        <h1 className="section-title text-upper text-lg" data-inview-showup="showup-translate-right">
                            Our Services
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
                            <li>Our Services</li>
                        </ul>
                    </div>
                </div>
            </section>

            <section className="muted-bg solid-section" data-inview-showup="showup-translate-up">
                <div className="container">
                    <div className="row cols-xl rows-lg">
                        <div className="md-col-12 text-center md-text-left">
                            <h2 className="text-upper text-semibold">
                                Our Services
                            </h2>
                            <p>
                                Eazy Services is purely into Pickup &amp; Delivery Services for Electronic Devices such as
                                Smartphones and Laptops. Eazy Service will collect the Device from the Customer Doorstep
                                &amp; will submit it to the Authorised Service Center for Repairs or Servicing. It has been
                                observed that the Device user/ owner has to face many difficulties &amp; spend more time at
                                Authorised Service Centers to get the device repaired, so Eazy Service will help Customers to
                                get it repaired from the Authorised Service Center. We assure that our Customers should
                                have a hassle-free &amp; quick service experience with Eazy Service. We currently offer two types
                                of Smartphone services to customers for their convenience.
                            </p>
                        </div>
                    </div>

                    <div className="section-head text-center container-md mt-5">
                        <h2 className="section-title text-upper text-lg" data-inview-showup="showup-translate-right">
                            Our Membership Plans
                        </h2>
                        {/* <p data-inview-showup="showup-translate-left">Here Is Our Pricing Plan</p> */}
                    </div>
                    <div className="row cols-md rows-md">
                        <div className="md-col-4 md-col-offs-2">
                            <div className="price-block simple" data-inview-showup="showup-translate-up">
                                <div className="price-back"></div>
                                <div className="price-image">
                                    <img className="image" src="./assets/images/icons/mobile-dark.png" alt="" />
                                </div>
                                <div className="price-title">Instant Pickup &amp; Delivery</div>
                                <p className="price-description">
                                    This is a one-time Pickup &amp; Delivery Service at an affordable price. Customers can schedule the device (smartphone) pickup at their convenience in 3 quick steps. No need to login to avail this service, Just schedule the pickup of the device as per convenience. Eazy Service will help customers to get their device repaired from the Authorised Service Center at their fingertip.
                                </p>
                                <div className="price-subtext">at just...</div>
                                <div className="price">&#8377;249</div>
                                <h5 className="text-left">Benefits</h5>
                                <ul className="price-list">
                                    <li>One time Quick Service</li>
                                    <li>No Need to visit Authorised Service Center</li>
                                    <li>Free Diagnosis Charge*</li>
                                    <li>Affordable Price</li>
                                    <li>Enhanced Device Safety &amp; security measures</li>
                                    <li>Notification via SMS &amp; E-mail</li>
                                    <li>Pickup within 3 hours</li>
                                    <li>Get Device repaired sitting at home</li>
                                    <li>Paperless work</li>
                                    <li>Easy Payment method</li>
                                </ul>
                                <button className="btn-md btns-bordered btn text-upper" onClick={ () => purchasePlan('instant') }>Buy Now @ &#8377;249</button>
                            </div>
                        </div>
                        <div className="md-col-4">
                            <div className="price-block simple" data-inview-showup="showup-translate-up">
                                <div className="price-back"></div>
                                <div className="price-image">
                                    <img className="image" src="./assets/images/icons/notebook-dark.png" alt="" />
                                </div>
                                <div className="price-title">Eazy Pickup &amp; Delivery Membership</div>
                                <p className="price-description">
                                    This is a Prime long-term service for 4 years offered by Eazy Service. This service is designed by Eazy Service keeping in mind customer satisfaction &amp; expectations. Membership service offers customers an enhanced dashboard for tracking their service requests at any point of time. Customers can secure 2 devices (smartphones) in this membership plan. Customers will also get Priority pickup &amp; delivery in this plan.
                                </p>
                                <div className="price-subtext">at just...</div>
                                <div className="price">&#8377;649</div>
                                <h5 className="text-left">Benefits</h5>
                                <ul className="price-list">
                                    <li>High Priority Pickup &amp; Delivery</li>
                                    <li>Secure 2 devices</li>
                                    <li>4 years of service</li>
                                    <li>No Need to visit Authorised Service Center</li>
                                    <li>Free Diagnosis Charge*</li>
                                    <li>Value for money</li>
                                    <li>Enhanced Device Safety &amp; security measures</li>
                                    <li>Notification via SMS &amp; E-mail</li>
                                    <li>Pickup within 3 hours</li>
                                    <li>Get Device repaired sitting at home</li>
                                    <li>Paperless work</li>
                                    <li>Service Dashboard</li>
                                    <li>Easy Payment method</li>
                                </ul>
                                <button className="btn-md btns-bordered btn text-upper" onClick={ () => purchasePlan('4years') }>Buy Now @ &#8377;649</button>
                            </div>
                        </div>
                    </div>

                    <div className="row cols-xl rows-lg mt-5">
                        <div className="md-col-12 text-center md-text-left">
                            <h2 className="text-semibold">
                                FAQs
                            </h2>

                            <div>
                                <Accordion preExpanded={['a']}>
                                    <AccordionItem uuid='a' key='a'>
                                        <AccordionItemHeading>
                                            <AccordionItemButton>
                                                Can I opt only for Pickup or only delivery through Eazy Service?
                                            </AccordionItemButton>
                                        </AccordionItemHeading>
                                        <AccordionItemPanel>
                                            No, Eazy Service will provide both Pickup &amp; Delivery Service
                                        </AccordionItemPanel>
                                    </AccordionItem>

                                    <AccordionItem uuid='b' key='b'>
                                        <AccordionItemHeading>
                                            <AccordionItemButton>
                                                What if my area Pincode is not mentioned in the list?
                                            </AccordionItemButton>
                                        </AccordionItemHeading>
                                        <AccordionItemPanel>
                                            Currently, Eazy Service is operating in selected Pincodes only
                                        </AccordionItemPanel>
                                    </AccordionItem>

                                    <AccordionItem uuid='c' key='c'>
                                        <AccordionItemHeading>
                                            <AccordionItemButton>
                                                Can I change my Email ID or Mobile Number in Eazy Membership Plan?
                                            </AccordionItemButton>
                                        </AccordionItemHeading>
                                        <AccordionItemPanel>
                                            Yes, you can change the Mobile Number &amp; Email ID under Eazy Membership Plan. To change so Drop an Email at <a href='mailto:support@eazyservice.co.in'>support@eazyservice.co.in</a>
                                        </AccordionItemPanel>
                                    </AccordionItem>

                                    <AccordionItem uuid='d' key='d'>
                                        <AccordionItemHeading>
                                            <AccordionItemButton>
                                                How can Eazy Service assure that my device is submitted to Authorised Service Centers only?
                                            </AccordionItemButton>
                                        </AccordionItemHeading>
                                        <AccordionItemPanel>
                                            Eazy Service is committed to providing genuine services to our customers. Once the device is submitted to the Authorised Service Center, an official communication via Email, SMS &amp; calls will be done with the customer by Authorised Service Center
                                        </AccordionItemPanel>
                                    </AccordionItem>

                                    <AccordionItem uuid='e' key='e'>
                                        <AccordionItemHeading>
                                            <AccordionItemButton>
                                                How do I book a pickup request?
                                            </AccordionItemButton>
                                        </AccordionItemHeading>
                                        <AccordionItemPanel>
                                            <b>For Instant Pickup &amp; Delivery Service -</b> Through our website by submitting Personal, Device &amp; Pickup location details <br />
                                            <b>For Membership Plan Service -</b> Through our website by login ID provided by Eazy Service
                                        </AccordionItemPanel>
                                    </AccordionItem>

                                    <AccordionItem uuid='f' key='f'>
                                        <AccordionItemHeading>
                                            <AccordionItemButton>
                                                How do I know that my Pickup request is submitted?
                                            </AccordionItemButton>
                                        </AccordionItemHeading>
                                        <AccordionItemPanel>
                                            Once the request is submitted you will receive SMS &amp; Email confirmation from Eazy Service
                                        </AccordionItemPanel>
                                    </AccordionItem>

                                    <AccordionItem uuid='g' key='g'>
                                        <AccordionItemHeading>
                                            <AccordionItemButton>
                                                Are there any additional charges applicable other than Pickup &amp; Delivery?
                                            </AccordionItemButton>
                                        </AccordionItemHeading>
                                        <AccordionItemPanel>
                                            No, Eazy Service will not charge any additional cost for Pickup &amp; Delivery. If Authorised Service Center suggested any repairs or servicing costs that will be paid only by a customer
                                        </AccordionItemPanel>
                                    </AccordionItem>

                                    <AccordionItem uuid='h' key='h'>
                                        <AccordionItemHeading>
                                            <AccordionItemButton>
                                                What about my Smartphone Data Privacy?
                                            </AccordionItemButton>
                                        </AccordionItemHeading>
                                        <AccordionItemPanel>
                                            You are advised to take complete data backup before handing over the Device to our executive or Authorised Service Centre. Also, the SIM card and the Memory card should be removed before handing over to the pick and delivery executive. Eazy Service will not be responsible for any data loss during service or repair
                                        </AccordionItemPanel>
                                    </AccordionItem>

                                    <AccordionItem uuid='i' key='i'>
                                        <AccordionItemHeading>
                                            <AccordionItemButton>
                                                What if my Smartphone Brand is not listed in the list?
                                            </AccordionItemButton>
                                        </AccordionItemHeading>
                                        <AccordionItemPanel>
                                            Currently, we are providing service to 9 Brands that are listed on the Website. We are also working to add a few more Brands in future
                                        </AccordionItemPanel>
                                    </AccordionItem>

                                    <AccordionItem uuid='j' key='j'>
                                        <AccordionItemHeading>
                                            <AccordionItemButton>
                                                In the membership plan, Can I Change my Device later?
                                            </AccordionItemButton>
                                        </AccordionItemHeading>
                                        <AccordionItemPanel>
                                            No, once the device is added you cannot change it later
                                        </AccordionItemPanel>
                                    </AccordionItem>
                                </Accordion>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Services
