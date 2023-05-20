import React, { useState } from 'react'
import login_img from '../assest/login_img.svg'
import CardBg from './CardBg'
import Form from 'react-bootstrap/Form';
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import { AiFillGoogleCircle } from "react-icons/ai";
import { Link } from "react-router-dom";
const SignIn = () => {
  const [value, setValue] = useState()
  const [otp, setotp] = useState(false)
  return (
    <>
      <section className='sign-up-outer-main-sec row'>
        <div className='left-sec col-7'>
          <div className='logo-header'>LOGO</div>
          <div className='disp-text col-7'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lacus nulla eget adipiscing faucibus platea. Eu ultrices ipsum</div>
          <img src={login_img} className='w-100' />
        </div>
        <div className='col-5'>
          <CardBg pad="32">
            <div className='sign-up-form-outer-div pt-2'>
              <div className='sign-up-form-inner-div'>
                <div className='sign-up-form-header text-center h2'>Get Started !</div>
                <div className='sign-up-form-text text-center'><span className='color-5C6D8E'> New to Company?</span> <b className='color-5961F8'><Link className='' to="/SignUp">Sign up</Link></b> </div>
                <div className='sign-up-form-form-div pt-3'>
                  <Form.Label htmlFor="inputPassword5">Enter Mobile No.</Form.Label>
                  <PhoneInput
                    placeholder="Enter phone number"
                    value={value}
                    onChange={setValue} />
                </div>
                {otp ? (
                          <>
                            <Form.Group className="mb-3 mt-4" controlId="exampleForm.ControlInput1">
                              <Form.Label>Enter OTP</Form.Label>
                              <Form.Control className='m-0' type="number"  aria-describedby="otpHelpBlock" placeholder="Enter 4 Digit OTP" />
                            </Form.Group>
                            <Form.Text id="otpHelpBlock">
                            <span className='color-5C6D8E'> Haven't received code?</span> <b className='color-5961F8'>Resend 0:59 sec </b>
                            </Form.Text>
                          </>
                        ) : null
                }
                  </div>
              </div>
              <button className='w-100 get-opt-btn' onClick={() => setotp(!otp)}>
                <span className='text-center'>Get OTP</span>
              </button>
              <p className='text-center my-2 mb-4'>Or sign in with</p>
              <div className='other-signin-outer row'>
                <div className='col-5 google'><AiFillGoogleCircle /> <span>Google</span></div>
                <div className='col-5 google'><AiFillGoogleCircle /> <span>FaceBook</span></div>
                <div></div>
              </div>
          </CardBg>
        </div>
      </section>
    </>
  )
}

export default SignIn
