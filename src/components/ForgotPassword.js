import { Link } from 'react-router-dom'

const ForgotPassword = () => {
    return (
        <div>
            <section className="with-bg solid-section">
                <div className="fix-image-wrap" data-image-src="/assets/images/service/harddrive.jpg" data-parallax="scroll"></div>
                <div className="theme-back"></div>
                <div className="container page-info">
                    <div className="section-alt-head container-md">
                        <h1 className="section-title text-upper text-lg" data-inview-showup="showup-translate-right">
                            Reset Password
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
                            <li>Forgot password</li>
                        </ul>
                    </div>
                </div>
            </section>
            <section className="content-section">
                <div className="container">
                    <div className="section-head text-center container-md">
                        <h2 className="section-title text-upper text-lg" data-inview-showup="showup-translate-right">
                            Forgot Password
                        </h2>
                    </div>
                    <form className="sign-in-form">
                        <div className="medium-container">
                            <div className="row rows-lg cols-lg rows-lg">
                                <div className="sm-col-12">
                                    <div className="item-form" data-inview-showup="showup-translate-right">
                                        <div className="offs-lg">
                                            <div className="field-group">
                                                <div className="field-wrap">
                                                    <input type="text" className="field-control" name="user_id" placeholder="Your User ID" required="" />
                                                    <span className="field-back"></span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="offs-lg" style={{ display: 'none' }}>
                                            <div className="field-group">
                                                <div className="field-wrap">
                                                    <input type="number" className="field-control" name="otp" placeholder="OTP" required="" />
                                                    <span className="field-back"></span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="offs-lg" style={{ display: 'none' }}>
                                            <div className="field-group">
                                                <div className="field-wrap">
                                                    <input type="password" className="field-control" name="password" placeholder="Password" required="" />
                                                    <span className="field-back"></span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="offs-lg" style={{ display: 'none' }}>
                                            <div className="field-group">
                                                <div className="field-wrap">
                                                    <input type="password" className="field-control" name="confirm_password" placeholder="Confirm Password" required="" />
                                                    <span className="field-back"></span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="text-left">
                                            <button className="btn text-upper" type="button" style={{ display: 'block' }}>Send OTP</button>
                                            <button className="btn text-upper" type="button" style={{ display: 'none' }}>Submit</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </section>
        </div>
    )
}

export default ForgotPassword
