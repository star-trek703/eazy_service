import { useState, useEffect } from 'react'
import { API_URL } from '../config'
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'

const Purchase = ({ props }) => {
    const [planName, setPlanName] = useState('')
    const [planPrice, setPlanPrice] = useState('')
    
    const [showStepOneForm, setShowStepOneForm] = useState(true)
    const [showStepTwoForm, setShowStepTwoForm] = useState(false)
    const [showStepThreeForm, setShowStepThreeForm] = useState(false)

    const [enableStepOneForm, setEnableStepOneForm] = useState(true)
    const [enableStepTwoForm, setEnableStepTwoForm] = useState(false)
    const [enableStepThreeForm, setEnableStepThreeForm] = useState(false)

    const [enableSubmitBtn, setEnableSubmitBtn] = useState(false)
    
    const [minDate, setMinDate] = useState('')
    const [currHour, setCurrHour] = useState('')
    
    const [pinCodes, setPinCodes] = useState([])
    const [timeSlots, setTimeSlots] = useState([])
    const [brands, setBrands] = useState([])

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [mobile, setMobile] = useState('')
    const [pickupAddress, setPickupAddress] = useState('')
    const [pinCode, setPinCode] = useState('')
    const [brand, setBrand] = useState('')
    const [model, setModel] = useState('')
    const [deviceColor, setDeviceColor] = useState('')
    const [IMEI, setIMEI] = useState('')
    const [invoice, setInvoice] = useState('')
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [slotDate, setSlotDate] = useState('')
    const [slotTime, setSlotTime] = useState('')
    const [amount, setAmount] = useState('')

    useEffect(() => {
        let plan_name = localStorage.getItem('plan') ?? ''
        if (plan_name === "") { props.history.push('/services') }
        
        let plan_price = ''
        if (plan_name == '4years') { plan_price = 699 }
        else if (plan_name == 'instant') { plan_price = 249 }

        setPlanName(plan_name)
        setPlanPrice(plan_price)
        
        setShowStepOneForm(true)
        setShowStepTwoForm(false)
        setShowStepThreeForm(false)

        setEnableStepOneForm(true)
        setEnableStepTwoForm(false)
        setEnableStepThreeForm(false)
        
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
        
        // get brands
        const getBrands = () => {
            fetch(API_URL +"getBrands.php")
                .then(res => res.json())
                .then(data => {
                    let { error } = data

                    if(error) {
                        console.error('No brands found');
                    } else {
                        setBrands(data.brands)
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

        getPinCodes()
        getBrands()
        getTimeSlots()
    
        }, [])

    
    useEffect(() => {
        if (name !== "" && email !== "" && mobile !== "" && pickupAddress !== "" && pinCode !== "") {
            setEnableStepTwoForm(true)
        } else {
            setEnableStepTwoForm(false)
        }
        
        if (planName == '4years' && brand !== "" && model !== "" && deviceColor !== "") {
            setEnableStepThreeForm(true)
        }
        else if (planName == 'instant' && brand !== "" && model !== "" && deviceColor !== "" && title !== "" && description !== "") {
            setEnableStepThreeForm(true)
        }
        else {
            setEnableStepThreeForm(false)
        }
        
        if (planName == '4years' && name !== "" && email !== "" && mobile !== "" && pickupAddress !== "" && pinCode !== "" && 
            brand !== "" && model !== "" && deviceColor !== "") {
            setEnableSubmitBtn(true)
        }
        else if (planName == 'instant' && name !== "" && email !== "" && mobile !== "" && pickupAddress !== "" && pinCode !== "" && 
            brand !== "" && model !== "" && deviceColor !== "" && title !== "" && description !== "" && slotDate !== "" && slotTime !== "") {
            setEnableSubmitBtn(true)
        }
        else {
            setEnableSubmitBtn(false)
        }

    }, [name, email, mobile, pickupAddress, pinCode, brand, model, deviceColor, IMEI, invoice, title, description, slotDate, slotTime])

    
    return (
        <div>
            <Helmet>
                <title>Eazy Service - Purchase</title>
            </Helmet>
            
            <section className="with-bg solid-section">
                <div className="fix-image-wrap" data-image-src="/assets/images/service/tools.jpg" data-parallax="scroll"></div>
                <div className="theme-back"></div>
                <div className="container page-info">
                    <div className="section-alt-head container-md">
                        <h1 className="section-title text-upper text-lg" data-inview-showup="showup-translate-right">
                            Purchase
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
                            <li>Purchase</li>
                        </ul>
                    </div>
                </div>
            </section>
            <section className="shift-xl content-section">
                <div className="container">
                    <div className="section-head text-center container-md">
                        <h2 className="section-title text-upper text-lg" data-inview-showup="showup-translate-right">
                            { (planName == '4years') ? 'Eazy Pickup & Delivery Membership' : '' }
                            { (planName == 'instant') ? 'Instant Pickup & Delivery' : '' }
                        </h2>
                        {/* <p data-inview-showup="showup-translate-left">
                            Fill out the application now and save time.
                        </p> */}
                    </div>
                    <div className="medium-container">
                        <ul className="multi-step-steps">
                            <li className={ `${ (showStepOneForm) ? 'active' : '' } ${ (!enableStepOneForm) ? 'op-half' : '' }` }
                             onClick={ () => { if(enableStepOneForm) { setShowStepOneForm(true); setShowStepTwoForm(false); setShowStepThreeForm(false); } } }>
                                1. Basic details
                            </li>
                            <li className={ `${ (showStepTwoForm) ? 'active' : '' } ${ (!enableStepTwoForm) ? 'op-half' : '' }` }
                             onClick={ () => { if(enableStepTwoForm) { setShowStepOneForm(false); setShowStepTwoForm(true); setShowStepThreeForm(false); } } }>
                                2. Mobile details
                            </li>

                            { (planName == 'instant') ? 
                            <li className={ `${ (showStepThreeForm) ? 'active' : '' } ${ (!enableStepThreeForm) ? 'op-half' : '' }` }
                             onClick={ () => { if(enableStepThreeForm) { setShowStepOneForm(false); setShowStepTwoForm(false); setShowStepThreeForm(true); } } }>
                                3. Schedule Pickup
                            </li>
                            : '' }
                        </ul>

                        <form className="new-ticket mt-3" action={ API_URL +'instant_pickup.php' } method="POST" encType="multipart/form-data">
                            <div className="offs-lg" data-inview-showup="showup-translate-bottom" style={{ display: (showStepOneForm) ? 'block' : 'none' }}>
                                <h4>1. Basic details</h4>

                                <div className="field-group">
                                    <div className="field-wrap">
                                        <input className="field-control" type="text" name="name" value={ name } onChange={ (e) => setName(e.target.value) } placeholder="Enter Name" required="" />
                                        <span className="field-back"></span>
                                    </div>
                                </div>

                                <div className="field-group">
                                    <div className="field-wrap">
                                        <input className="field-control" type="number" name="mobile" value={ mobile } onChange={ (e) => setMobile(e.target.value) } placeholder="Mobile No." required="" />
                                        <span className="field-back"></span>
                                    </div>
                                </div>

                                <div className="field-group">
                                    <div className="field-wrap">
                                        <input className="field-control" type="email" name="email" value={ email } onChange={ (e) => setEmail(e.target.value) } placeholder="Email Address" required="" />
                                        <span className="field-back"></span>
                                    </div>
                                </div>

                                <div className="field-group">
                                    <div className="field-wrap">
                                        <input className="field-control" type="text" name="pick_address" value={ pickupAddress } onChange={ (e) => setPickupAddress(e.target.value) } placeholder="Pickup Address" required="" />
                                        <span className="field-back"></span>
                                    </div>
                                </div>

                                <div className="field-group chosen-field">
                                    <div className="field-wrap">
                                        <select className="field-control" name="pincode" value={ pinCode } onChange={ (e) => setPinCode(e.target.value) } placeholder="Pincode" required="">
                                            <option value="">Select Pincode</option>
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

                                <div className="row cols-lg mt-4">
                                    <div className="col-6 sm-col-3 sm-col-offs-4" data-inview-showup="showup-translate-left">
                                        <button className={ `btn col-12 btns-bordered text-upper  ${ (!enableStepTwoForm) ? 'disabled op-half' : '' }` } type="button"
                                         onClick={ () => { if(enableStepTwoForm) { setShowStepOneForm(false); setShowStepTwoForm(true); setShowStepThreeForm(false); } } }>
                                             Next
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <div className="offs-lg" data-inview-showup="showup-translate-bottom" style={{ display: (showStepTwoForm) ? 'block' : 'none' }}>
                                <h4>2. Mobile details</h4>

                                <div className="field-group chosen-field">
                                    <div className="field-wrap">
                                        <select className="field-control" name="brand" value={ brand } onChange={ (e) => setBrand(e.target.value) } placeholder="Brand" required="">
                                            <option value="">Select Brand</option>
                                            { brands.map(brand => (
                                                <option key={ brand.ID } value={ brand.ID }>{ brand.brand }</option>
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
                                        <input className="field-control" type="text" name="model" value={ model } onChange={ (e) => setModel(e.target.value) } placeholder="Enter Model" required="" />
                                        <span className="field-back"></span>
                                    </div>
                                </div>

                                <div className="field-group">
                                    <div className="field-wrap">
                                        <input className="field-control" type="text" name="color" value={ deviceColor } onChange={ (e) => setDeviceColor(e.target.value) } placeholder="Enter Device Color" required="" />
                                        <span className="field-back"></span>
                                    </div>
                                </div>

                                <div className="field-group">
                                    <div className="field-wrap">
                                        <input className="field-control" type="text" name="imei" value={ IMEI } onChange={ (e) => setIMEI(e.target.value) } placeholder="Enter IMEI" />
                                        <span className="field-back"></span>
                                    </div>
                                </div>

                                <div className="field-group">
                                    <label htmlFor="bill_photo" style={{ color: '#777' }}>Mobile Invoice copy</label>
                                    <div className="field-wrap">
                                        <input className="field-control" type="file" name="bill_photo" id="bill_photo" value={ invoice } onChange={ (e) => setInvoice(e.target.value) } placeholder="Upload Invoice" />
                                        <span className="field-back"></span>
                                    </div>
                                    <div className="mt-2"><strong>Note:</strong> Bill Photo Copy is mandatory if the Device is within Warranty Period</div>
                                </div>
                                
                                { (planName == 'instant') ? 
                                <div className="mt-3">
                                    <div className="field-group">
                                        <div className="field-wrap">
                                            <input className="field-control" type="text" name="title" value={ title } onChange={ (e) => setTitle(e.target.value) } placeholder="Enter Title" required="" />
                                            <span className="field-back"></span>
                                        </div>
                                    </div>

                                    <div className="field-group">
                                        <div className="field-wrap">
                                            <textarea className="field-control" type="text" name="description" value={ description } onChange={ (e) => setDescription(e.target.value) } placeholder="Enter Description" required=""></textarea>
                                            <span className="field-back"></span>
                                        </div>
                                    </div>
                                </div>
                                : '' }

                                <div className="row cols-lg mt-4">
                                    <div className="col-6 sm-col-3 sm-col-offs-3" data-inview-showup="showup-translate-right">
                                        <button className="btn col-12 btns-bordered text-upper" type="button"
                                         onClick={ () => { setShowStepOneForm(true); setShowStepTwoForm(false); setShowStepThreeForm(false); } }>
                                            Previous
                                        </button>
                                    </div>
                                    
                                    { (planName == '4years') ? 
                                    <div>
                                        <input type="hidden" name="type" value={ planName } />
                                        <input type="hidden" name="amount" value={ planPrice } />
                                    </div>
                                    : '' }
                                    
                                    { (planName == 'instant') ? 
                                    <div className="col-6 sm-col-3" data-inview-showup="showup-translate-left">
                                        <button className={ `btn col-12 btns-bordered text-upper ${ (!enableStepThreeForm) ? 'disabled op-half' : '' }` } type="button"
                                         onClick={ () => { if(enableStepThreeForm) { setShowStepOneForm(false); setShowStepTwoForm(false); setShowStepThreeForm(true); } } }>
                                            Next
                                        </button>
                                    </div>
                                    
                                    : (enableSubmitBtn)
                                        ? <div className="col-6 sm-col-3" data-inview-showup="showup-translate-left">
                                            <button className="btn col-12 text-upper" type="submit">Submit</button>
                                        </div>
                                        : <div className="col-6 sm-col-3" data-inview-showup="showup-translate-left">
                                            <button className="btn col-12 text-upper disabled op-half" type="submit" disabled={ true }>Submit</button>
                                        </div>
                                    }
                                </div>
                            </div>
                            
                            { (planName == 'instant') ? 
                            <div className="offs-lg" data-inview-showup="showup-translate-bottom" style={{ display: (showStepThreeForm) ? 'block' : 'none' }}>
                                <h4>3. Schedule Pickup</h4>
                                
                                { (planName == 'instant') ? 
                                    <div>
                                        <div className="field-group">
                                            <label>
                                                <b>Pickup Date</b>
                                            </label>
                                            <div className="field-wrap">
                                                <input className="field-control" type="date" name="slot_date" value={ slotDate } onChange={ (e) => setSlotDate(e.target.value) } placeholder="Select date" min={ minDate } required="" />
                                                <span className="field-back"></span>
                                            </div>
                                        </div>

                                        <div className="field-group chosen-field">
                                            <div className="field-wrap">
                                                <select className="field-control" name="slot_time" value={ slotTime } onChange={ (e) => setSlotTime(e.target.value) } placeholder="Time Slot" required="">
                                                    <option value="">Select Time Slot</option>
                                                    { timeSlots.map(timeSlot => (
                                                        <option key={ timeSlot.ID } value={ timeSlot.time_slot } style={{ display: (slotDate === minDate && timeSlot.time_from <= currHour) ? 'none' : 'block' }}>{ timeSlot.time_slot }</option>
                                                    )) }
                                                </select>
                                                <span className="select-arrow">
                                                    <i className="fas fa-chevron-down"></i>
                                                </span>
                                                <span className="field-back"></span>
                                            </div>
                                        </div>
                                    </div>
                                : '' }

                                <div className="row cols-lg mt-4">
                                    <div className="col-6 sm-col-3 sm-col-offs-3" data-inview-showup="showup-translate-right">
                                        <button className="btn col-12 btns-bordered text-upper" type="button"
                                         onClick={ () => { setShowStepOneForm(false); setShowStepTwoForm(true); setShowStepThreeForm(false); } }>
                                            Previous
                                        </button>
                                    </div>
                                    <div className="col-6 sm-col-3" data-inview-showup="showup-translate-right">
                                        <input type="hidden" name="type" value={ planName } />
                                        <input type="hidden" name="amount" value={ planPrice } />
                                        {
                                            (enableSubmitBtn)
                                             ? <button className="btn col-12 text-upper" type="submit">Submit</button>
                                             : <button className="btn col-12 text-upper disabled op-half" type="submit" disabled={ true }>Submit</button>
                                        }
                                    </div>
                                </div>
                            </div>
                            : '' }
                        </form>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Purchase
