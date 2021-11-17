import { API_URL } from '../config'
import { Link } from 'react-router-dom'
import { useState } from 'react'

const ForgotPassword = ({ props }) => {
    const [uniqueID, setUniqueID] = useState('')
    const [OTP, setOTP] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const [enableUniqueIDField, setEnableUniqueIDField] = useState(true)
    const [showRegistrationFields, setShowRegistrationFields] = useState(false)
    const [showSendOTPBtn, setShowSendOTPBtn] = useState(true)
    const [showSubmitBtn, setShowSubmitBtn] = useState(false)

    // send OTP
    const sendOTP = (e) => {
        e.preventDefault()

        let formData = new FormData()
        formData.append('user_id', uniqueID)

        let options = {
            method: 'POST',
            body: formData
        }

        fetch(API_URL +"sendOtp.php", options)
            .then(res => res.json())
            .then(data => {
                let { error, message } = data

                alert(message)

                if (! error) {
                    setEnableUniqueIDField(false)
                    setShowRegistrationFields(true)
                    setShowSendOTPBtn(false)
                    setShowSubmitBtn(true)
                }
            })
    }

    // forgot password
    const forgotPassword = (e) => {
        e.preventDefault()

        let formData = new FormData()
        formData.append('user_id', uniqueID)
        formData.append('otp', OTP)
        formData.append('new_password', password)
        formData.append('confirm_password', confirmPassword)

        let options = {
            method: 'POST',
            body: formData
        }

        fetch(API_URL +"reset_password.php", options)
            .then(res => res.json())
            .then(data => {
                let { error, message } = data

                alert(message)

                if (! error) {
                    props.history.push('/sign-in')
                }
            })
    }

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
                                                    <input type="text" className="field-control" name="user_id" placeholder="Your User ID" value={ uniqueID } onChange={ (e) => setUniqueID(e.target.value) } value={ uniqueID } onChange={ (e) => setUniqueID(e.target.value) } disabled={ (enableUniqueIDField) ? false : true } required="" />
                                                    <span className="field-back"></span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="offs-lg" style={{ display: (showRegistrationFields) ? 'block' : 'none' }}>
                                            <div className="field-group">
                                                <div className="field-wrap">
                                                    <input type="number" className="field-control" name="otp" placeholder="OTP" value={ OTP } onChange={ (e) => setOTP(e.target.value) } required="" />
                                                    <span className="field-back"></span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="offs-lg" style={{ display: (showRegistrationFields) ? 'block' : 'none' }}>
                                            <div className="field-group">
                                                <div className="field-wrap">
                                                    <input type="password" className="field-control" name="password" placeholder="Password" value={ password } onChange={ (e) => setPassword(e.target.value) } required="" />
                                                    <span className="field-back"></span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="offs-lg" style={{ display: (showRegistrationFields) ? 'block' : 'none' }}>
                                            <div className="field-group">
                                                <div className="field-wrap">
                                                    <input type="password" className="field-control" name="confirm_password" placeholder="Confirm Password" value={ confirmPassword } onChange={ (e) => setConfirmPassword(e.target.value) } required="" />
                                                    <span className="field-back"></span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="text-left">
                                            <button className="btn text-upper" type="button" onClick={ sendOTP } style={{ display: (showSendOTPBtn) ? 'block' : 'none' }}>Send OTP</button>
                                            <button className="btn text-upper" type="button" onClick={ forgotPassword } style={{ display: (showSubmitBtn) ? 'block' : 'none' }}>Submit</button>
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
