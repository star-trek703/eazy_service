import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'

const Terms = () => {
    return (
        <div>
            <Helmet>
                <title>Eazy Service - Terms & Conditions</title>
            </Helmet>

            <section className="with-bg solid-section">
                <div className="fix-image-wrap" data-image-src="/assets/images/service/tools.jpg" data-parallax="scroll"></div>
                <div className="theme-back"></div>
                <div className="container page-info">
                    <div className="section-alt-head container-md">
                        <h1 className="section-title text-upper text-lg" data-inview-showup="showup-translate-right">
                            Terms &amp; Conditions
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
                            <li>Terms &amp; Conditions</li>
                        </ul>
                    </div>
                </div>
            </section>
            <section className="content-section">
                <div className="container">
                    <div className="content-text clearfix" data-inview-showup="showup-translate-up">
                        <p>
                            <h3>Overview</h3>
                            <p>
                                This website is operated by Eazy Service. Throughout the site, the terms “we”, “us” and “our” refer to Eazy Service. Eazy Service offers this website, including all information, tools, and services available from this site to you, the user, conditioned upon your acceptance of all terms, conditions, policies, and notices stated here.
                            </p>
                            <p>
                                By visiting our site and/ or purchasing something from us, you engage in our “Service” and agree to be bound by the following terms and conditions (“Terms of Service”, “Terms”), including those additional terms and conditions and policies referenced herein and/or available by hyperlink. These Terms of Service apply to all users of the site, including without limitation users who are browsers, vendors, customers, merchants, and/ or contributors of content.
                            </p>
                            <p>
                                You can review the most current version of the Terms of Service at any time on this page. We reserve the right to update, change or replace any part of these Terms of Service by posting updates and/or changes to our website. It is your responsibility to check this page periodically for changes. Your continued use of or access to the website following the posting of any changes constitutes acceptance of those changes.
                            </p>

                            <h4>General Terms</h4>
                            <ol className="list-unstyled">
                                <li>Eazy Service Pickup & Delivery Services are only applicable for selected Smartphone Brands such as -</li>
                                <ol className="list-unstyled">
                                    <li>Samsung</li>
                                    <li>Oneplus</li>
                                    <li>Xiaomi MI</li>
                                    <li>Honor</li>
                                    <li>Lenovo</li>
                                    <li>Realme</li>
                                    <li>Asus</li>
                                    <li>Motorola</li>
                                    <li>Nokia</li>
                                </ol>
                                <li>Eazy Service is completely into Pickup & Delivery of devices from Customer Place to Authorised Service Center and vice versa</li>
                                <li>Eazy Service will provide two types of services viz. <strong>Instant Pickup and Delivery & Eazy Pickup and Delivery Membership</strong></li>
                                <li>These both Service will be sold only through Website & Retail Shops (Tied up with Eazy Service)</li>

                                <li>Service is applicable only for selected pin codes (421201, 421202, 421203, 421204, 421301, 421306)</li>
                                <li>If the device is lost /theft /damaged by Eazy Service, will be compensated accordingly on the device current market value</li>
                                <li>Forget Password OTP will be shared through SMS only on Mobile No. registered with Eazy Service</li>
                                <li>Eazy Service will not be responsible for any changes in the Terms & Conditions of the Authorised Service Center. Eazy Service & Authorised Service Center are both separate entities</li>
                            </ol>

                            <h4>For Eazy Service Policy (General) -</h4>
                            <ol className="list-unstyled">
                                <li>This Service is applicable for new devices, only for those phones which billing date is within 30 days</li>
                                <li>Service is applicable only for one device, also it will be non-transferable and non-refundable</li>
                                <li>Service is applicable only for selected pin codes</li>
                                <li>Service validity is for 3 years from date of service purchased (15 service requests)</li>
                                <li>If the device is lost /theft /damaged by Eazy Service, will be compensated accordingly depending on device current market value</li>
                            </ol>

                            <h4>Pickup &amp; Drop</h4>
                            <h6>For Instant Pickup & Delivery</h6>
                            <ol className="list-unstyled">
                                <li>Instant  Pickup & Delivery service is only for one-time pickup & delivery process</li>
                                <li>Customers can only initiate the Pickup request only through the website</li>
                                <li>Pickup requests will be sent only after successful payment confirmation </li>
                                <li>Once the request is initiated & accepted by Eazy Service Customer cannot change/alter the details</li>
                                <li>Once the customer requested Pickup, Device will be picked within 3 business hours from the customer’s doorstep as per the time scheduled also delivery will be done within 3 business hours once the device delivery is initiated by the Authorised Service Center</li>
                                <li>Eazy service will not involve in any Direct Communication between the Authorised service center & Device owner (Customer)</li>
                                <li>Eazy service is not involved in any commission with Authorised service centers</li>
                                <li>During the Eazy Service Pick and Drop process, our executive will have Bubble Courier Bags (Tear to open) for packing the device, it will help to deliver the Device to the Authorized service center safely</li>
                                <li>The Device will be packed in front of the Customer and will be directly opened at Authorized Service Center by our Executive</li>
                                <li>Eazy Service will keep customers notified with SMS & Email on every Eazy Process Steps</li>
                                <li>Customer must submit Device Invoice (hard/soft copy) to the Executive If the device is within the warranty period</li>
                            </ol>
                            
                            <h6>For Eazy Pickup & Delivery Membership</h6>
                            <ol className="list-unstyled">
                                <li>Eazy Pickup & Delivery Membership is valid for 4 years, starting from the date of Membership Purchased (15 Requests)</li>
                                <li>In this Membership, Customer can cover their 2 Smartphone Devices for Pickup & Drop Service</li>
                                <li>Once the Devices are added to Membership Plan, cannot be changed/ altered</li>
                                <li>Customers can buy this Membership Plan through the Eazy Service Website or through Retailers (Tied up with Eazy Service)  </li>
                                <li>Two separate User IDs (as per devices opt) will be created by Eazy Service </li>
                                <li>Customers can only initiate the Pickup request only through the website</li>
                                <li>Once the request is initiated & accepted by Eazy Service Customer cannot change/alter the details</li>
                                <li>Once the customer requested Pickup, Device will be picked within 3 business hours from the customer’s doorstep as per the time scheduled also delivery will be done within 3 business hours once the device delivery is initiated by the Authorised Service Center</li>
                                <li>Eazy service will not involve in any Direct Communication between the Authorised service center & Device owner (Customer)</li>
                                <li>Eazy service is not involved in any commission with Authorised service centers</li>
                                <li>During the Eazy Service Pick and Drop process, our executive will have Bubble Courier Bags (Tear to open) for packing the device, it will help to deliver the Device to the Authorized service center safely</li>
                                <li>The Device will be packed in front of the Customer and will be directly opened at Authorized Service Center by our Executive</li>
                                <li>Customers can track the Device Status from Eazy Service Dashboard provided on the Website</li>
                                <li>Customer must submit Device Invoice (hard/soft copy) to the Executive If the device is within the warranty period</li>
                            </ol>

                            <h4>Device Accountability</h4>
                            <ol className="list-unstyled">
                                <li>We are not liable for any loss / damage to device through service center</li>
                                <li>While taking device from customer Eazy service executive will capture photos of the device &amp; will share to the customer. Same will be done while taking back device from Service Center.</li>
                                <li>Sim card, Memory card, Back Cover or any other accessories  should remove before submitting the device to our executive</li>
                                <li>The Repair Quotation/Repair Invoice should be in the name of device owner</li>
                                <li>Tax benefits/liabilities of the repair amount stuck with brand authorized service center and the device owner</li>
                                <li>Eazy Service do not have any rights check/modify the operation of the service center.</li>
                                <li>After repair of the device the warranty part should stuck with Device or Service Center policy.</li>
                                <li>Eazy Service is not liable for any type of misappropriate behavior with Device which was submitted in Brand Authorized Service Center during the period of Repair.</li>
                            </ol>
                            
                            <h4>Payment</h4>
                            <ol className="list-unstyled">
                                <li>Payment of Eazy Instant Pickup & Delivery Service will be done through the Eazy Service Website only</li>
                                <li>Payment of Eazy Pickup & Delivery Membership Plan will be done through Eazy Service Website or at Retail Store along with the device purchased</li>
                                <li>Tax Invoice for both the services will be provided by Eazy Service through Email</li>
                                <li>During the Repairs If any additional cost is suggested by the service center, it will be directly communicated to the customer by the Authorised Service Center.</li>
                                <li>Customers should pay directly to the Service Center if any charges incurred</li>
                                <li>If Payment Receipt provided by Service Center will be shared to the customer on delivery by Eazy Service Executive</li>
                                <li>All the documents received by the service center will be submitted to the customer while delivering the device</li>
                            </ol>

                            <h4>Refund / Cancellations</h4>
                            <ol className="list-unstyled">
                                <li>Once the Service is purchased, cannot be canceled at any point of the service period</li>
                                <li>Eazy Service will not issue refunds for services purchased through the website or a retail partner</li>
                            </ol>

                            <h4>Contact Information</h4>
                            <ol className="list-unstyled">
                                <li>Questions about the Terms of Service should be sent to us at <a href="mailto:support@eazyservice.co.in">support@eazyservice.co.in</a></li>
                                <li>Call us on - 8452819424 / 8425879810</li>
                            </ol>
                        </p>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Terms
