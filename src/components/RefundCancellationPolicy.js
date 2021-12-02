import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'

const RefundCancellationPolicy = () => {
    return (
        <div>
            <Helmet>
                <title>Eazy Service - Refund & Cancellation Policy</title>
            </Helmet>

            <section className="with-bg solid-section">
                <div className="fix-image-wrap" data-image-src="/assets/images/service/tools.jpg" data-parallax="scroll"></div>
                <div className="theme-back"></div>
                <div className="container page-info">
                    <div className="section-alt-head container-md">
                        <h1 className="section-title text-upper text-lg" data-inview-showup="showup-translate-right">
                            Refund &amp; Cancellation Policy
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
                            <li>Refund &amp; Cancellation Policy</li>
                        </ul>
                    </div>
                </div>
            </section>
            <section className="content-section">
                <div className="container">
                    <div className="content-text clearfix" data-inview-showup="showup-translate-up">
                        <p>
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

export default RefundCancellationPolicy
