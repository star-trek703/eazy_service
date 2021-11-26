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
    const [slotDate, setSlotDate] = useState('')
    const [slotTime, setSlotTime] = useState('')
    const [amount, setAmount] = useState('')

    useEffect(() => {
        let plan_name = localStorage.getItem('plan') ?? ''
        if (plan_name === "") { props.history.push('/services') }
        
        let plan_price = ''
        if (plan_name == '4years') { plan_price = 649 }
        else if (plan_name == 'instant') { plan_price = 249 }

        setPlanName(plan_name)
        setPlanPrice(plan_price)
        
        setShowStepOneForm(true)
        setShowStepTwoForm(false)
        setShowStepThreeForm(false)

        setEnableStepOneForm(true)
        setEnableStepTwoForm(false)
        setEnableStepThreeForm(false)

        let stored_name = localStorage.getItem('name') ?? ''
        let stored_email = localStorage.getItem('email') ?? ''
        let stored_mobile = localStorage.getItem('mobile') ?? ''
        let stored_address = localStorage.getItem('address') ?? ''
        let stored_pincode = localStorage.getItem('pincode') ?? ''
        let stored_brand = localStorage.getItem('brand') ?? ''
        let stored_model = localStorage.getItem('model') ?? ''
        let stored_device_color = localStorage.getItem('device_color') ?? ''
        let stored_imei = localStorage.getItem('imei') ?? ''
        // let stored_invoice = localStorage.getItem('invoice') ?? ''
        let stored_slot_date = localStorage.getItem('slot_date') ?? ''
        let stored_slot_time = localStorage.getItem('slot_time') ?? ''

        setName(stored_name)
        setEmail(stored_email)
        setMobile(stored_mobile)
        setPickupAddress(stored_address)
        setPinCode(stored_pincode)
        setBrand(stored_brand)
        setModel(stored_model)
        setDeviceColor(stored_device_color)
        setIMEI(stored_imei)
        // setInvoice(stored_invoice)
        setSlotDate(stored_slot_date)
        setSlotTime(stored_slot_time)

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
        localStorage.setItem('name', name)
        localStorage.setItem('email', email)
        localStorage.setItem('mobile', mobile)
        localStorage.setItem('address', pickupAddress)
        localStorage.setItem('pincode', pinCode)
        localStorage.setItem('brand', brand)
        localStorage.setItem('model', model)
        localStorage.setItem('device_color', deviceColor)
        localStorage.setItem('imei', IMEI)
        // localStorage.setItem('invoice', invoice)
        localStorage.setItem('slot_date', slotDate)
        localStorage.setItem('slot_time', slotTime)

        if (name !== "" && email !== "" && mobile !== "" && pickupAddress !== "" && pinCode !== "") {
            setEnableStepTwoForm(true)
        } else {
            setEnableStepTwoForm(false)
        }
        
        if (brand !== "" && model !== "" && deviceColor !== "" && IMEI !== "" && invoice !== "") {
            setEnableStepThreeForm(true)
        } else {
            setEnableStepThreeForm(false)
        }
        
        if (name !== "" && email !== "" && mobile !== "" && pickupAddress !== "" && pinCode !== "" && 
            brand !== "" && model !== "" && deviceColor !== "" && IMEI !== "" && invoice !== "") {
            setEnableSubmitBtn(true)
        }
        else {
            setEnableSubmitBtn(false)
        }

    }, [name, email, mobile, pickupAddress, pinCode, brand, model, deviceColor, IMEI, invoice, slotDate, slotTime])

    const handlePlanPurchase = () => {
        let formData = new FormData()
        formData.append('name', name)
        formData.append('email', email)
        formData.append('mobile', mobile)
        formData.append('pick_address', pickupAddress)
        formData.append('brand', brand)
        formData.append('model', model)
        formData.append('color', deviceColor)
        formData.append('slot_date', slotDate)
        formData.append('amount', amount)
        formData.append('pincode', pinCode)
        formData.append('slot_time', slotTime)

        // let options = {
        // method: 'POST',
        // body: formData
        // }

        // fetch(API_URL +"instant_pickup.php", options)
        // .then(res => res.json())
        // .then(data => {
        //     let { error, logged_in } = data

        //     if (! error) {
        //         // setIsLoggedIn(logged_in)
        //         // setUserID(data.user_id)
        //     }
        //     else{
        //         // setIsLoggedIn(logged_in)
        //         // setUserID('')

        //         // localStorage.setItem('logged_in', false)
        //         // localStorage.setItem('token', '')
        //     }
        // })
    }

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
                                Step 1
                            </li>
                            <li className={ `${ (showStepTwoForm) ? 'active' : '' } ${ (!enableStepTwoForm) ? 'op-half' : '' }` }
                             onClick={ () => { if(enableStepTwoForm) { setShowStepOneForm(false); setShowStepTwoForm(true); setShowStepThreeForm(false); } } }>
                                Step 2
                            </li>
                            <li className={ `${ (showStepThreeForm) ? 'active' : '' } ${ (!enableStepThreeForm) ? 'op-half' : '' }` }
                             onClick={ () => { if(enableStepThreeForm) { setShowStepOneForm(false); setShowStepTwoForm(false); setShowStepThreeForm(true); } } }>
                                Step 3
                            </li>
                        </ul>

                        <form className="new-ticket mt-3" action={ API_URL +'instant_pickup.php' } method="POST" encType="multipart/form-data" onSubmit={ handlePlanPurchase }>
                            <div className="offs-lg" data-inview-showup="showup-translate-bottom" style={{ display: (showStepOneForm) ? 'block' : 'none' }}>
                                <h4>Step 1</h4>

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
                                <h4>Step 2</h4>

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
                                        <input className="field-control" type="text" name="imei" value={ IMEI } onChange={ (e) => setIMEI(e.target.value) } placeholder="Enter IMEI" required="" />
                                        <span className="field-back"></span>
                                    </div>
                                </div>

                                <div className="field-group">
                                    <div className="field-wrap">
                                        <input className="field-control" type="file" name="bill_photo" value={ invoice } onChange={ (e) => setInvoice(e.target.value) } placeholder="Upload Invoice" required="" />
                                        <span className="field-back"></span>
                                    </div>
                                </div>

                                <div className="row cols-lg mt-4">
                                    <div className="col-6 sm-col-3 sm-col-offs-3" data-inview-showup="showup-translate-right">
                                        <button className="btn col-12 btns-bordered text-upper" type="button"
                                         onClick={ () => { setShowStepOneForm(true); setShowStepTwoForm(false); setShowStepThreeForm(false); } }>
                                            Previous
                                        </button>
                                    </div>
                                    <div className="col-6 sm-col-3" data-inview-showup="showup-translate-left">
                                        <button className={ `btn col-12 btns-bordered text-upper ${ (!enableStepThreeForm) ? 'disabled op-half' : '' }` } type="button"
                                         onClick={ () => { if(enableStepThreeForm) { setShowStepOneForm(false); setShowStepTwoForm(false); setShowStepThreeForm(true); } } }>
                                            Next
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <div className="offs-lg" data-inview-showup="showup-translate-bottom" style={{ display: (showStepThreeForm) ? 'block' : 'none' }}>
                                <h4>Step 3</h4>
                                
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
                                                        <option key={ timeSlot.ID } value={ timeSlot.time_slot } style={{ display: (slotDate === minDate && timeSlot.time_to < currHour) ? 'none' : 'block' }}>{ timeSlot.time_slot }</option>
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
                        </form>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Purchase
