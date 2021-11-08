import { Link } from 'react-router-dom'

const Terms = () => {
    return (
        <div>
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
                            <h4>For Eazy Service Policy (General) -</h4>
                            <ol className="list-unstyled">
                                <li>This Service is applicable for new devices, only for those phones which billing date is within 30 days</li>
                                <li>Service is applicable only for one device, also it will be non-transferable and non-refundable</li>
                                <li>Service is applicable only for selected pin codes</li>
                                <li>Service validity is for 3 years from date of service purchased (15 service requests)</li>
                                <li>If the device is lost /theft /damaged by Eazy Service, will be compensated accordingly depending on device current market value</li>
                            </ol>

                            <h4>Pickup &amp; Drop</h4>
                            <ol className="list-unstyled">
                                <li>Service request should be done only through website</li>
                                <li>Customer can only login with  unique ID provided by us</li>
                                <li>OTP will be shared through SMS &amp; email only on Mobile No. &amp; Email registered with us</li>
                                <li>Device delivery will be done within 3hours (working) from service center conformation</li>
                                <li>Eazy service will not involve in any Communication between service center &amp; Device owner (Customer)</li>
                                <li>In Eazy Service Pick and  Drop process, our executive will have BUBBLE BAG and PLAIN COURIER BAG (TEAR TO OPEN) for pack the damage mobile device, it will help to deliver the DAMAGE MOBILE DEVICE in brand authorized service center.</li>
                                <li>The PLAIN COURIER BAG in which the DAMAGE MOBILE DEVICE will packed in front of CUSTOMER will open in front of BRAND AUTHORIZED SERVICE Center EXECUTIVE.</li>
                                <li>Customer must submit Device Invoice If the device is within warranty period</li>
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
                                <li>If any additional cost is suggested by the service center it will be communicated to customer. Customer should pay directly to Service Center if any charges incurred.</li>
                                <li>Payment Receipt provided by Service Center will be shared to customer on delivery by Eazy Service Executive</li>
                                <li>All the documents received by service center will be submitted to customer while delivering device</li>
                            </ol>
                        </p>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Terms
