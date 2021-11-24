import { API_URL, APP_URL } from '../config'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { Helmet } from 'react-helmet'

const Dashboard = ({ props }) => {
    const [name, setName] = useState('')
    const [brand, setBrand] = useState('')
    const [model, setModel] = useState('')
    const [color, setColor] = useState('')
    const [IMEI, setIMEI] = useState('')
    const [invoicePath, setInvoicePath] = useState('')
    const [purchaseDate, setPurchaseDate] = useState('')
    const [expiryDate, setExpiryDate] = useState('')
    const [requests, setRequests] = useState([])
    
    useEffect(() => {
        // get dashboard
        const getDashboard = () => {
            let token = localStorage.getItem('token')

            let formData = new FormData()
            formData.append('token', token)
        
            let options = {
              method: 'POST',
              body: formData
            }
        
            fetch(API_URL +"getDashboard.php", options)
                .then(res => res.json())
                .then(data => {
                    let { name, brand, model, color, imei, invoice_path, 
                        purchase_date, expiry_date, requests } = data
            
                    setName(name)
                    setBrand(brand)
                    setModel(model)
                    setColor(color)
                    setIMEI(imei)
                    setInvoicePath(invoice_path)
                    setPurchaseDate(purchase_date)
                    setExpiryDate(expiry_date)
                    setRequests(requests)
                })
        }

        getDashboard()
    
        }, [])

    
    // delete request
    const handleDeleteRequest = (e, requestID) => {
        e.preventDefault()

        let formData = new FormData()
        formData.append('id', requestID)
    
        let options = {
            method: 'POST',
            body: formData
        }
        
        fetch(API_URL +"deleteRequest.php", options)
            .then(res => res.json())
            .then(data => {
                let { error, message } = data
                
                alert(message)
                if(!error) {
                    setRequests(requests.filter(request => request.ID != requestID))
                }
            })
    }

    return (
        <div>
            <Helmet>
                <title>Eazy Service - Dashboard</title>
            </Helmet>

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
                                        { name }
                                    </h6>
                                    <div className="user-dashboard-user-subtitle">
                                        Brand: { brand } <br />
                                        Model: { model } <br />
                                        Color: { color } <br />
                                        IMEI: { IMEI } 
                                    </div>
                                </div>
                            </div>
                            <div className="md-col-3">
                                <div className="user-dashboard-user-content">
                                    <h6 className="user-dashboard-user-title text-upper">
                                        Purchase Date
                                    </h6>
                                    <div className="user-dashboard-user-subtitle">
                                        { purchaseDate }
                                    </div>
                                </div>
                            </div>
                            <div className="md-col-3">
                                <div className="user-dashboard-user-content">
                                    <h6 className="user-dashboard-user-title text-upper">
                                        Expiry Date
                                    </h6>
                                    <div className="user-dashboard-user-subtitle">
                                        { expiryDate }
                                    </div>
                                </div>
                            </div>
                            <div className="md-col-3 text-center">
                                <div className="user-dashboard-info-line">
                                    <div className="user-order-info-value">
                                        <a className="btn btn-primary" target="_blank" href={ APP_URL +'/'+ invoicePath }>
                                            Download Invoice
                                        </a>
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

                        {
                            (requests.length > 0) ? requests.map(request => 
                                <div key={ request.ID } className="user-dashboard-item text-upper">
                                    <div className="user-dashboard-item-number" style={{ width: '100px' }}>#{ request.req_no }</div>
                                    <div className="user-dashboard-item-title">
                                        <Link to={ `/request/${ btoa(request.ID) }` }>
                                            { request.title }
                                        </Link>
                                    </div>
                                    <div className="user-dashboard-item-date">
                                        { request.createdOn }
                                    </div>
                                    <div className="user-dashboard-item-status" style={{ width: '300px' }}>
                                        { request.status }
                                    </div>
                                    <div className="user-dashboard-item-status" style={{ width: '200px' }}>
                                        { (request.status_id == 1) ? 
                                            <div>
                                                <Link to="/dashboard" onClick={ (e) => handleDeleteRequest(e, request.ID) } style={{ marginRight: '7px' }}>
                                                    <i className="fa fa-trash"></i>
                                                </Link>
                                                <Link to={ `/update-request/${ btoa(request.ID) }` }>
                                                    <i className="fa fa-pencil-alt"></i>
                                                </Link>
                                            </div>
                                        : '' }
                                    </div>
                                </div>
                            ) : 
                            <div style={{ textAlign: 'center' }}>No requests</div>
                        }

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
