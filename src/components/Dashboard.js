import { Link } from 'react-router-dom'

const Dashboard = () => {
    return (
        <div>
            <section className="with-bg solid-section">
                <div className="fix-image-wrap" data-image-src="/assets/images/service/tools.jpg" data-parallax="scroll"></div>
                <div className="theme-back"></div>
                <div className="container page-info">
                    <div className="section-alt-head container-md">
                        <h1 className="section-title text-upper text-lg" data-inview-showup="showup-translate-right">
                            Dashboard
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
                            <li>Dashboard</li>
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
            <section className="shift-lg offs-lg">
                <div className="container">
                    <div className="user-dashboard-personal-info">
                        <div className="rows-md cols-md row user-dashboard-user">
                            <div className="md-col-3">
                                <div className="user-dashboard-user-content">
                                    <h6 className="user-dashboard-user-title text-upper">
                                        test customer
                                    </h6>
                                    <div className="user-dashboard-user-subtitle">
                                        Brand: N<br />
                                        Model: test model <br />
                                        Color: test  color<br />
                                        IMEI: test imei 
                                    </div>
                                </div>
                            </div>
                            <div className="md-col-3">
                                <div className="user-dashboard-user-content">
                                    <h6 className="user-dashboard-user-title text-upper">
                                        Purchase Date
                                    </h6>
                                    <div className="user-dashboard-user-subtitle">
                                        10-09-2021
                                    </div>
                                </div>
                            </div>
                            <div className="md-col-3">
                                <div className="user-dashboard-user-content">
                                    <h6 className="user-dashboard-user-title text-upper">
                                        Expiry Date
                                    </h6>
                                    <div className="user-dashboard-user-subtitle">
                                        10-09-2025
                                    </div>
                                </div>
                            </div>
                            <div className="md-col-3 text-center">
                                <div className="user-dashboard-info-line">
                                    <div className="user-order-info-value">
                                        <Link className="btn btn-primary" target="_blank" to="/img/invoice/invoice_102929.pdf">
                                            Download Invoice
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="shift-lg offs-lg">
                <div className="container">
                    <div className="user-dashboard-list user-dashboard-tickets-list">
                        <h4 className="reset-offs text-upper">
                            My Requests
                        </h4>
                        <div className="user-dashboard-item text-upper">
                            <div className="user-dashboard-item-number" style={{ width: '100px' }}>#818601</div>
                            <div className="user-dashboard-item-title">
                                <Link to="/request/Mg==">
                                    requeast title
                                </Link>
                            </div>
                            <div className="user-dashboard-item-date">
                                22.09.2021
                            </div>
                            <div className="user-dashboard-item-status" style={{ width: '300px' }}>
                                -
                            </div>
                            <div className="user-dashboard-item-status" style={{ width: '200px' }}>
                                <Link to="/dashboard" style={{ marginRight: '7px' }}>
                                    <i className="fa fa-trash"></i>
                                </Link>
                                <Link to="/update-request/Mg==">
                                    <i className="fa fa-pencil-alt"></i>
                                </Link>
                            </div>
                        </div>
                        <div className="user-dashboard-list-btns">
                            <Link className="btn text-upper" to="/new-request">
                                New request
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Dashboard
