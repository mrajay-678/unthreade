import React, { useState } from "react";
import background from "../assest/Sign-background.svg";
import CardBg from "./CardBg";
import Form from "react-bootstrap/Form";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import { AiFillGoogleCircle } from "react-icons/ai";
import { Link } from "react-router-dom";
const SignUp = () => {
  const [value, setValue] = useState();
  const [otp, setotp] = useState(false);
  return (
    <div
      className="container-fluid d-flex justify-content-center align-items-center p-0 m-0 bg-image"
      style={{
        backgroundImage: `url(${background})`,
        backgroundPosition: "bottom",
        height: "100vh",
      }}
    >
      <div style={{ width: "570px", margin: "0 auto", padding: "2% 0%" }}>
        <CardBg pad="32">
          <div className="sign-up-form-outer-div pt-2">
            <div className="sign-up-form-inner-div">
              <div className="sign-up-form-header text-center h2">
                Create store in 10mins
              </div>
              <div className="sign-up-form-text text-center">
                <span className="color-5C6D8E"> Already have a account? </span>{" "}
                <b className="color-5961F8">
                  <Link className="" to="/SignIn">
                    Sign in
                  </Link>
                </b>{" "}
              </div>
              <div className="sign-up-form-form-div pt-3">
                <div className="row">
                  <div className="col-6">
                    <Form.Group
                      className="mb-3 mt-4"
                      controlId="exampleForm.ControlInput1"
                    >
                      <Form.Label>First Name</Form.Label>
                      <Form.Control
                        className="m-0"
                        type="text"
                        aria-describedby="otpHelpBlock"
                        placeholder="Enter 4 Digit OTP"
                      />
                    </Form.Group>
                  </div>
                  <div className="col-6">
                    <Form.Group
                      className="mb-3 mt-4"
                      controlId="exampleForm.ControlInput1"
                    >
                      <Form.Label>Last Name</Form.Label>
                      <Form.Control
                        className="m-0"
                        type="text"
                        aria-describedby="otpHelpBlock"
                        placeholder="Enter 4 Digit OTP"
                      />
                    </Form.Group>
                  </div>
                </div>
                <Form.Label htmlFor="inputPassword5">
                  Enter Mobile No.
                </Form.Label>
                <PhoneInput
                  placeholder="Enter phone number"
                  value={value}
                  onChange={setValue}
                />
              </div>
                  <Form.Group
                    className="mb-3 mt-4"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label>Enter OTP</Form.Label>
                    <Form.Control
                      className="m-0"
                      type="number"
                      aria-describedby="otpHelpBlock"
                      placeholder="Enter 4 Digit OTP"
                    />
                  </Form.Group>
                  <Form.Text id="otpHelpBlock">
                    <span className="color-5C6D8E">
                      Haven't received code?
                    </span>
                    <b className="color-5961F8">Resend 0:59 sec </b>
                  </Form.Text>
            </div>
          </div>
          <button className="w-100 get-opt-btn" onClick={() => setotp(!otp)}>
            <span className="text-center">
            <Link className="" to="/Create_Store">Create your Store</Link>
            </span>
          </button>
          <p className="text-center my-2 m-auto w-75 mb-4">
          By creating an account means you agree to the Terms & Conditions and our Privacy Policy
          </p>
        </CardBg>
      </div>
    </div>
  );
};

export default SignUp;
