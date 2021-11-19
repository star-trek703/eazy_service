import { API_URL } from '../config'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import PageNotFound from './errors/PageNotFound'
import { Helmet } from 'react-helmet'

const SingleRequest = ({ props }) => {
    const [error, setError] = useState(false)
    const [requestID, setRequestID] = useState('')
    const [requestNo, setRequestNo] = useState('')
    const [name, setName] = useState('')
    const [mobile, setMobile] = useState('')
    const [email, setEmail] = useState('')
    const [pickupAddress, setPickupAddress] = useState('')
    const [pincode, setPincode] = useState('')
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [slotDateFormatted, setSlotDateFormatted] = useState('')
    const [slotDate, setSlotDate] = useState('')
    const [slotTime, setSlotTime] = useState('')
    const [statusID, setStatusID] = useState('')
    const [status, setStatus] = useState('')
    const [requestStatuses, setRequestStatuses] = useState([])
    const [createdOn, setCreatedOn] = useState('')

    
    useEffect(() => {
        // get single request
        const getSingleRequest = () => {
            let request_id = atob(props.match.params.id)

            let formData = new FormData()
            formData.append('id', request_id)
        
            let options = {
              method: 'POST',
              body: formData
            }
        
            fetch(API_URL +"getRequest.php", options)
                .then(res => res.json())
                .then(data => {
                    let { error, message } = data
                        
                    if(error) {
                        setError(true)
                        alert(message)
                    } else{
                        let { ID, req_no, name, mobile, email, pickup, pincode, title, description, slot_date_formatted, 
                            slot_date, slot_time, status_id, status, request_statuses, createdOn } = data
                        console.log(request_statuses)
                        setError(false)
                        setRequestID(ID)
                        setRequestNo(req_no)
                        setName(name)
                        setMobile(mobile)
                        setEmail(email)
                        setPickupAddress(pickup)
                        setPincode(pincode)
                        setTitle(title)
                        setDescription(description)
                        setSlotDateFormatted(slot_date_formatted)
                        setSlotDate(slot_date)
                        setSlotTime(slot_time)
                        setStatusID(status_id)
                        setStatus(status)
                        setRequestStatuses(request_statuses)
                        setCreatedOn(createdOn)
                    }
                })
        }

        getSingleRequest()
    
        }, [])

    return (!error) ? (
        <div>
            <Helmet>
                <title>{ title } - Eazy Service</title>
            </Helmet>

            <section className="with-bg solid-section">
                <div className="fix-image-wrap" data-image-src="/assets/images/service/tools.jpg" data-parallax="scroll"></div>
                <div className="theme-back"></div>
                <div className="container page-info">
                    <div className="section-alt-head container-md">
                        <h1 className="section-title text-upper text-lg" data-inview-showup="showup-translate-right">
                            Request
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
                            <li>Request</li>
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
            <section className="offs-xxl">
                <div className="container">
                    <div className="user-tickets">
                        <div className="user-ticket active" data-inview-showup="showup-translate-up">
                            <div className="item-header text-upper">
                                <div className="user-ticket-show-more">
                                    <div className="user-ticket-show-more-icon">
                                        <i className="fas fa-angle-double-down"></i>
                                    </div>
                                </div>
                                <div className="user-ticket-number" style={{ width: '100px' }}>
                                    #{ requestNo }
                                </div>
                                <div className="user-ticket-device">
                                    { title }
                                </div>
                                <div className="user-ticket-date">
                                    { createdOn }
                                </div>
                                <div className="pending user-ticket-status" style={{ width: '180px' }}>
                                    { status }
                                </div>
                            </div>
                            <div className="item-content">
                                <div className="user-ticket-info rows-sm cols-md row">
                                    <div className="sm-col-5">
                                        <div className="user-ticket-info-line">
                                            <div className="user-ticket-info-title text-uppe">
                                                <strong>Name:</strong>&nbsp;{ name }
                                            </div>
                                        </div>
                                        <div className="user-ticket-info-line">
                                            <div className="user-ticket-info-title text-upper">
                                                <strong>Mobile No:</strong>&nbsp;{ mobile }
                                            </div>
                                        </div>
                                        <div className="user-ticket-info-line">
                                            <div className="user-ticket-info-title text-upper">
                                                <strong>Pickup Address:</strong>&nbsp;{ pickupAddress }
                                            </div>
                                        </div>
                                        <div className="user-ticket-info-line">
                                            <div className="user-ticket-info-title text-upper">
                                                <strong>Pickup Date:</strong>&nbsp;{ slotDate }
                                            </div>
                                        </div>
                                        <div className="user-ticket-info-line">
                                            <div className="user-ticket-info-title text-upper">
                                                <strong>Time Slot:</strong>&nbsp;{ slotTime }
                                            </div>
                                        </div>
                                    </div>
                                    <div className="sm-col-7">
                                        <div className="user-ticket-info-line text-upper">
                                            <div className="user-ticket-info-title">
                                                <strong>Issues:</strong>&nbsp;
                                            </div>
                                            <div className="user-ticket-info-text">
                                                <div className="user-ticket-field-like">
                                                    { description }
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="user-ticket-steps-wrap" style={{ padding: '30px 20px 65px' }}>
                                    <h5 className="text-upper">Service Status</h5>
                                    <div className="user-ticket-steps">
                                        { requestStatuses.map((requestStatus, index) => 
                                            <div key={ requestStatus.ID } className={ `${ (parseInt(requestStatus.ID) <= statusID) ? 'active' : '' } user-ticket-step` }>
                                                <div className="user-ticket-step-number" style={{ fontSize: '30px' }}>{ (index + 1) }.</div> <br />
                                                <div className="user-ticket-step-title" style={{ fontSize: '18px' }}>{ requestStatus.status }</div> <br />
                                                <div className="user-ticket-step-date" style={{ paddingLeft: '0px' }}></div>
                                            </div>
                                        ) }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className="block-cart collapse" data-block="cart" data-show-block-classname="animation-scale-top-right" data-hide-block-classname="animation-unscale-top-right">
                <div className="cart-inner">
                    <Link to="#" className="close-link" data-close-block="true">
                        <i className="fas fa-times" aria-hidden="true"></i>
                    </Link>
                    <h4 className="text-upper text-center">
                        Your cart
                    </h4>
                    <div className="items">
                        <div className="items collapse" data-block="cart" data-show-block-classname="animation-scale-top-right" data-hide-block-classname="animation-unscale-top-right">
                            <div className="shop-side-item cart-item">
                                <Link to="#" className="remove">
                                    <i className="fas fa-times"></i>
                                </Link>
                                <div className="item-side-image">
                                    <Link to="shop-item.html" className="item-image responsive-1by1">
                                        <img src="/assets/images/shop/usb-hub.jpg" alt="" />
                                    </Link>
                                </div>
                                <div className="item-side">
                                    <div className="item-title">
                                        <Link className="item-label-sm item-label-sale item-label" to="#">
                                            sale
                                        </Link>
                                        <Link to="shop-item.html" className="content-link text-upper">
                                            USB 3.0 HUB
                                        </Link>
                                    </div>
                                    <div className="item-quantity">
                                        Quantity - 1
                                    </div>
                                    <div className="item-prices">
                                        <div className="item-price">
                                            $67.05
                                        </div>
                                        <div className="item-old-price">
                                            $102.5
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="shop-side-item cart-item">
                                <Link to="#" className="remove">
                                    <i className="fas fa-times"></i>
                                </Link>
                                <div className="item-side-image">
                                    <Link to="shop-item.html" className="item-image responsive-1by1">
                                        <img src="/assets/images/shop/cable-organizer.jpg" alt="" />
                                    </Link>
                                </div>
                                <div className="item-side">
                                    <div className="item-title">
                                        <Link className="item-label-sm item-label-new item-label" to="#">
                                            new
                                        </Link>
                                        <Link to="shop-item.html" className="content-link text-upper">
                                            Cable Organizer
                                        </Link>
                                    </div>
                                    <div className="item-quantity">
                                        Quantity - 1
                                    </div>
                                    <div className="item-prices">
                                        <div className="item-price">
                                            $15.25
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="shop-side-item cart-item">
                                <Link to="#" className="remove">
                                    <i className="fas fa-times"></i>
                                </Link>
                                <div className="item-side-image">
                                    <Link to="shop-item.html" className="item-image responsive-1by1">
                                        <img src="/assets/images/shop/tablet.jpg" alt="" />
                                    </Link>
                                </div>
                                <div className="item-side">
                                    <div className="item-title">
                                        <Link to="shop-item.html" className="content-link text-upper">
                                            10" Octa Core Tablet
                                        </Link>
                                    </div>
                                    <div className="item-quantity">
                                        Quantity - 1
                                    </div>
                                    <div className="item-prices">
                                        <div className="item-price">
                                            $145.99
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="line-sides main-bg shift-lg"></div>
                    <div className="row out-md">
                        <div className="col-6 cart-price-title">
                            Subtotal:
                        </div>
                        <div className="col-6 text-right cart-price">
                            $105.20
                        </div>
                    </div>
                    <div className="line-sides main-bg offs-lg"></div>
                    <div className="clearfix">
                        <Link to="cart.html" className="btn text-upper btn-md btns-bordered pull-left">
                            view cart
                        </Link>
                        <Link to="checkout.html" className="btn text-upper btn-md pull-right">
                            checkout
                        </Link>
                    </div>
                </div>
            </div>
            <Link to="#" className="scroll-top disabled">
                <i className="fas fa-angle-up" aria-hidden="true"></i>
            </Link>
            <div className="singlepage-block collapse alt-bg" data-block="search" data-show-block-classname="animation-scale-top-right" data-hide-block-classname="animation-unscale-top-right">
                <Link to="#" className="close-link" data-close-block="true">
                    <i className="fas fa-times" aria-hidden="true"></i>
                </Link>
                <div className="pos-v-center col-12">
                    <div className="container">
                        <form action="#">
                            <div className="row cols-md rows-md">
                                <div className="lg-col-9 md-col-8 sm-col-12">
                                    <div className="field-group">
                                        <div className="field-wrap">
                                            <input className="field-control" name="search" placeholder="Search Tags" required="" />
                                            <span className="field-back"></span>
                                        </div>
                                    </div>
                                </div>
                                <div className="lg-col-3 md-col-4 sm-col-6">
                                    <button className="btn btns-white-bordered text-upper" type="submit">search</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div className="loader-block">
                <div className="loader-back alt-bg"></div>
                <div className="loader-image">
                    <img className="image" src="/assets/images/parts/loader.gif" alt="" />
                </div>
            </div>
        </div>
    ) : <PageNotFound />
}

export default SingleRequest
