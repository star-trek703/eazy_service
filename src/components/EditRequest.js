import { API_URL } from '../config'
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'

const EditRequest = ({ props }) => {
    const [minDate, setMinDate] = useState('')
    const [currHour, setCurrHour] = useState('')
    
    const [pinCodes, setPinCodes] = useState([])
    const [timeSlots, setTimeSlots] = useState([])

    const [requestID, setRequestID] = useState('')
    
    const [title, setTitle] = useState('')
    const [name, setName] = useState('')
    const [mobile, setMobile] = useState('')
    const [email, setEmail] = useState('')
    const [pickupAddress, setPickupAddress] = useState('')
    const [pinCode, setPinCode] = useState('')
    const [pickupDate, setPickupDate] = useState('')
    const [timeSlot, setTimeSlot] = useState('')
    const [description, setDescription] = useState('')
    
    useEffect(() => {
        // min date
        let dt = new Date()
        let min_date = dt.getFullYear() +"-"+ (dt.getMonth() + 1).toString().padStart(2, 0) +"-"+ (dt.getDate()).toString().padStart(2, 0)
        setMinDate(min_date)

        // current hour
        let curr_hour = dt.getHours()
        setCurrHour(curr_hour)

        // get pin codes
        const getPinCodes = () => {
            fetch(API_URL +"getPinCodes.php")
                .then(res => res.json())
                .then(data => {
                    let { error } = data

                    if(error) {
                        console.error('No PIN codes found');
                    } else {
                        setPinCodes(data.pincodes)
                    }
                })
        }
        
        // get time slots
        const getTimeSlots = () => {
            fetch(API_URL +"getTimeSlots.php")
                .then(res => res.json())
                .then(data => {
                    let { error } = data

                    if(error) {
                        console.error('No time slots found');
                    } else {
                        setTimeSlots(data.timeslots)
                    }
                })
        }

        // get request
        const getRequestDetails = () => {
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
                    let { error, ID, name, mobile, email, pickup, pincode, slot_date, slot_time, title, description } = data
                        
                    if(!error) {
                        setRequestID(ID)
                        setName(name)
                        setMobile(mobile)
                        setEmail(email)
                        setPickupAddress(pickup)
                        setPinCode(pincode)
                        setPickupDate(slot_date)
                        setTimeSlot(slot_time)
                        setTitle(title)
                        setDescription(description)
                    }
                })
        }

        getPinCodes()
        getTimeSlots()
        getRequestDetails()
    
        }, [props.match.params.id])
    
    
    // add new request
    const handleUpdateRequest = (e) => {
        e.preventDefault()

        let formData = new FormData()
        formData.append('name', name)
        formData.append('mobile', mobile)
        formData.append('email', email)
        formData.append('pick_address', pickupAddress)
        formData.append('pincode', pinCode)
        formData.append('title', title)
        formData.append('description', description)
        formData.append('slot_date', pickupDate)
        formData.append('slot_time', timeSlot)
        formData.append('req_id', requestID)
    
        let options = {
            method: 'POST',
            body: formData
        }
    
        fetch(API_URL +"updateRequest.php", options)
            .then(res => res.json())
            .then(data => {
                let { error, message } = data
                
                alert(message)
                if(!error) {
                    props.history.push('/dashboard')
                }
            })
    }

    return (
        <div>
            <Helmet>
                <title>{ title } - Edit | Eazy Service</title>
            </Helmet>

            <section className="with-bg solid-section">
                <div className="fix-image-wrap" data-image-src="/assets/images/service/tools.jpg" data-parallax="scroll"></div>
                <div className="theme-back"></div>
                <div className="container page-info">
                    <div className="section-alt-head container-md">
                        <h1 className="section-title text-upper text-lg" data-inview-showup="showup-translate-right">
                            New Request
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
                            <li>Update Request</li>
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
            <section className="shift-xl content-section">
                <div className="container">
                    <div className="section-head text-center container-md">
                        <h2 className="section-title text-upper text-lg" data-inview-showup="showup-translate-right">
                            Update Request
                        </h2>
                        <p data-inview-showup="showup-translate-left">
                            Fill out the application now and save time.
                        </p>
                    </div>
                    <div className="medium-container">
                        <form className="new-ticket" onSubmit={ handleUpdateRequest }>
                            <div className="offs-lg" data-inview-showup="showup-translate-bottom">
                                <div className="field-group">
                                    <div className="field-wrap">
                                        <input className="field-control" name="title" value={ title } onChange={ (e) => setTitle(e.target.value) } placeholder="Request Title" required="" />
                                        <span className="field-back"></span>
                                    </div>
                                </div>
                                <div className="field-group">
                                    <div className="field-wrap">
                                        <input className="field-control" name="name" value={ name } onChange={ (e) => setName(e.target.value) } placeholder="Enter Name" required="" />
                                        <span className="field-back"></span>
                                    </div>
                                </div>
                                <div className="field-group">
                                    <div className="field-wrap">
                                        <input className="field-control" name="mobile" value={ mobile } onChange={ (e) => setMobile(e.target.value) } placeholder="Mobile No." required="" />
                                        <span className="field-back"></span>
                                    </div>
                                </div>
                                <div className="field-group">
                                    <div className="field-wrap">
                                        <input className="field-control" name="email" value={ email } onChange={ (e) => setEmail(e.target.value) } placeholder="Email Address" required="" />
                                        <span className="field-back"></span>
                                    </div>
                                </div>
                                <div className="field-group">
                                    <div className="field-wrap">
                                        <input className="field-control" name="pickup_address" value={ pickupAddress } onChange={ (e) => setPickupAddress(e.target.value) } placeholder="Pickup Address" required="" />
                                        <span className="field-back"></span>
                                    </div>
                                </div>
                                <div className="field-group chosen-field">
                                    <div className="field-wrap">
                                        <select className="field-control" name="pincode" value={ pinCode } onChange={ (e) => setPinCode(e.target.value) } placeholder="Pincode" required="">
                                            <option name="">Select Pincode</option>
                                            { pinCodes.map(pinCode => (
                                                <option key={ pinCode.ID } value={ pinCode.ID }>{ pinCode.pin_code }</option>
                                            )) }
                                        </select>
                                        <span className="select-arrow">
                                            <i className="fas fa-chevron-down"></i>
                                        </span>
                                        <span className="field-back"></span>
                                    </div>
                                </div>
                                <div className="field-group">
                                    <label>
                                        <b>Pickup Date</b>
                                    </label>
                                    <div className="field-wrap">
                                        <input type="date" className="field-control" name="date" value={ pickupDate } onChange={ (e) => setPickupDate(e.target.value) } placeholder="Select date" min={ minDate } required="" />
                                        <span className="field-back"></span>
                                    </div>
                                </div>
                                <div className="field-group chosen-field">
                                    <div className="field-wrap">
                                        <select className="field-control" name="time_slot" value={ timeSlot } onChange={ (e) => setTimeSlot(e.target.value) } placeholder="Time Slot" required="">
                                            <option name="">Select Time Slot</option>
                                            { timeSlots.map(timeSlot => (
                                                <option key={ timeSlot.ID } value={ timeSlot.time_slot } style={{ display: (pickupDate === minDate && timeSlot.time_from <= currHour) ? 'none' : 'block' }}>{ timeSlot.time_slot }</option>
                                            )) }
                                        </select>
                                        <span className="select-arrow">
                                            <i className="fas fa-chevron-down"></i>
                                        </span>
                                        <span className="field-back"></span>
                                    </div>
                                </div>
                                <div className="field-group">
                                    <div className="field-wrap">
                                        <textarea className="field-control" name="description" value={ description } onChange={ (e) => setDescription(e.target.value) } placeholder="Describe issues" required=""></textarea>
                                        <span className="field-back"></span>
                                    </div>
                                </div>
                            </div>
                            <div className="row cols-lg">
                                <div className="col-6 sm-col-3 sm-col-offs-3" data-inview-showup="showup-translate-right">
                                    <button className="btn col-12 text-upper" type="submit">Update</button>
                                </div>
                                <div className="col-6 sm-col-3" data-inview-showup="showup-translate-left">
                                    <button className="btn col-12 btns-bordered text-upper" type="reset">Reset</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default EditRequest
