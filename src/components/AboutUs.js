import { Link } from 'react-router-dom'

const AboutUs = () => {
    return (
        <div>
            <section class="with-bg solid-section">
                <div class="fix-image-wrap" data-image-src="/assets/images/service/harddrive.jpg" data-parallax="scroll"></div>
                <div class="theme-back"></div>
                <div class="container page-info">
                    <div class="section-alt-head container-md">
                        <h1 class="section-title text-upper text-lg" data-inview-showup="showup-translate-right">
                            About Us
                        </h1>
                    </div>
                </div>
                <div class="section-footer">
                    <div class="container" data-inview-showup="showup-translate-down">
                        <ul class="page-path">
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li class="path-separator">
                                <i class="fas fa-chevron-right" aria-hidden="true"></i>
                            </li>
                            <li>About Us</li>
                        </ul>
                    </div>
                </div>
            </section>
            <section class="muted-bg solid-section" data-inview-showup="showup-translate-up">
                <div class="container">
                    <div class="row cols-xl rows-lg">
                        <div class="md-col-12 text-center md-text-left">
                            <h2 class="text-upper text-semibold">
                                About Us
                            </h2>
                            <p>
                                Eazy Service is  formed with a vision to minimize the G-A-P between customers &amp; Authorized Service Centers. We are into providing pick up and drop services to our clients on their fingertip. We will engage in delivering and submitting devices on behalf of our customers to particular Authorized Service Centers for repairs or servicing. Eazy Service ensures that devices are delivered safely and on time. Our main aim is to Save Customer’s valuable Time &amp; Efforts.
                            </p>
                            <p>
                                Our hassle-free &amp; reliable device pickup service is widely available across Electronic Retail Stores. We ensure to give our customers the most relaxing experience by just seating at home because we believe customers’ time and efforts are most valuable.
                            </p>
                            <h2 class="text-upper text-semibold mt-5">
                                Our Process
                            </h2>
                            <div class="md-col-6 md-fix-container mx-auto">
                                <img class="image" src="/assets/images/service/about.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default AboutUs
