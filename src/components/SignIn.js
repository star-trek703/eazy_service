import { Link } from 'react-router-dom'

const SignIn = () => {
    return (
        <div>
            <section className="with-bg solid-section">
                <div className="fix-image-wrap" data-image-src="/assets/images/service/harddrive.jpg" data-parallax="scroll"></div>
                <div className="theme-back"></div>
                <div className="container page-info">
                    <div className="section-alt-head container-md">
                        <h1 className="section-title text-upper text-lg" data-inview-showup="showup-translate-right">
                            Sign In
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
                            <li>Sign In</li>
                            <li className="menu-item-stick-left">
                                <Link to="#" data-show-block="cart"></Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
            <section className="content-section">
                <div className="container">
                    <div className="section-head text-center container-md">
                        <h2 className="section-title text-upper text-lg" data-inview-showup="showup-translate-right">
                            Sign in
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
                                                    <input className="field-control" name="unique_id" placeholder="User ID" required="" />
                                                    <span className="field-back"></span>
                                                </div>
                                            </div>
                                            <div className="field-group">
                                                <div className="field-wrap">
                                                    <input className="field-control" name="password" type="password" placeholder="Password" required="" />
                                                    <span className="field-back"></span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row cols-md offs-md">
                                            <div className="col-6">
                                                <div className="field-group">
                                                    <label>By sign in you accept all the <Link target="_blank" to="/assets/Terms.pdf">terms &amp; conditions</Link></label>
                                                </div>
                                            </div>
                                            <div className="col-6 text-right shift-xs">
                                                <Link to="/forgot-password">Forgot your password?</Link>
                                            </div>
                                            <div className="col-6 text-right shift-xs">
                                                <button href="#" type="button" data-show-block="cart" style={{ background: 'none', border: 'none', color: 'rgb(41, 171, 226)' }}>
                                                    Forgot User Id?
                                                </button>
                                            </div>
                                        </div>
                                        <div className="text-left">
                                            <button className="btn text-upper" type="submit">Sign In</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </section>
            <div className="block-cart collapse" data-block="cart" data-show-block-classname="animation-scale-top-right" data-hide-block-classname="animation-unscale-top-right" style={{ display: 'none' }}>
                <div className="cart-inner">
                    <Link to="" className="close-link" data-close-block="true">
                        <i className="fas fa-times" aria-hidden="true"></i>
                    </Link>
                    <h4 className="text-upper text-center"></h4>
                    <div className="items">
                        <div className="items collapse" data-block="cart" data-show-block-classname="animation-scale-top-right" data-hide-block-classname="animation-unscale-top-right" style={{ display: 'none' }}>
                            <div className="shop-side-item cart-item">
                                <Link to="#" className="remove">
                                    <i className="fas fa-times"></i>
                                </Link>
                                <div className="item-side">
                                    <h4>Forgot User ID</h4>
                                    <p>
                                        Dear User, We might have sent you an email at the time of your account registration that contains your Unique User ID. Kindly check that email to get your User ID otherwise you can contact us at support@eazyservice.co.in Thank you!
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignIn
