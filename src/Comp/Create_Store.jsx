import React, { useState } from "react";
import background from "../assest/Sign-background.svg";
import CardBg from "./CardBg";
import Form from "react-bootstrap/Form";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import { BiArrowBack } from "react-icons/bi";
import { Link } from "react-router-dom";
import 'animate.css';
const Create_Store = () => {
  const [value, setValue] = useState();
  const [otp, setotp] = useState(false);
  return (
    <div
      className="container-fluid p-0 m-0 bg-image"
      style={{
        backgroundImage: `url(${background})`,
        backgroundPosition: "bottom",
        height: "100vh",
      }}
    >
      <div class="logo-header text-center">LOGO</div>
      <div style={{ width: "1400px", margin: "0 auto", padding: "2% 0%" }}>
        <CardBg pad="32">
          <div className="row h-100">
            <div className="col-5 py-5 d-flex align-items-center">
              <div>
                <div className="left-form">
                  <h6><b className='color-5961F8'>01\</b> <span className='color-5C6D8E'>04</span></h6>
                  <div class="logo-header h4 pt-4">Name your Store</div>
                  <p className="color-4B4E70 w-75 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lacus nulla eget adipiscing faucibus platea. Eu ultrices ipsum</p>
                  <Form.Group className="mb-3 create-store mt-4" controlId="exampleForm.ControlInput1">
                    <Form.Label></Form.Label>
                    <Form.Control className='m-0' type="text" aria-describedby="otpHelpBlock" placeHolder="Ex. Ginny Cake Shop" />
                  </Form.Group>
                  <Form.Text onClick={() => setotp(!otp)} id="otpHelpBlock" className="w-100">
                    <span className='color-5C6D8E text-end'> Not sure about the name, </span> <b className='color-5961F8'>Want us to suggest? </b>
                  </Form.Text>
                  {
                    otp ? (
                      <>
                        <Form.Group className="mb-3 create-store mt-4" controlId="exampleForm.ControlInput1">
                          <Form.Label></Form.Label>
                          <Form.Control className='m-0' type="text" aria-describedby="otpHelpBlock" placeHolder="Ex. Ginny Cake Shop" />
                        </Form.Group>
                        <Form.Text onClick={() => setotp(!otp)} id="otpHelpBlock" className="w-100">
                          <span className='color-5C6D8E text-end'> Not sure about the name, </span> <b className='color-5961F8'>Want us to suggest? </b>
                        </Form.Text>
                      </> 
                    )
                    : null
                  }
                </div>
                <div className="navigate-button d-flex justify-content-between">
                  <div className="back-btn"><BiArrowBack /></div>
                  <div>
                    <button className='w-100 px-4 mt-0 get-opt-btn' >
                      <span className='text-center '><Link className="" to="/Create_Store_two">Continue</Link></span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-7">
              <div className="image-upl-outer">
                <div className={(otp ? 'animate__animated animate__fadeIn  img-section' : "img-section ")}>
                  <img className="w-100 py-2 rounded  h-50" src={background} />
                </div>
                <div className={(otp ? 'd-none image-upl-inner' : "image-upl-inner ")}>
                  <div className="image-upl-text text-center">
                    <div className="h5 logo-header">Upload Image</div>
                    <div className="color-4B4E70">or Drag and Drop</div>
                  </div>
                </div>
                <div className={(otp ? 'd-none my-3' : "row my-3 ")}>
                  <div className="col-4"><img className="w-100 rounded" src={background} alt="" srcset="" /></div>
                  <div className="col-4"><img className="w-100 rounded" src={background} alt="" srcset="" /></div>
                  <div className="col-4"><img className="w-100 rounded" src={background} alt="" srcset="" /></div>
                </div>
              </div>
            </div>
          </div>
        </CardBg>
      </div>
    </div>
  );
};

export default Create_Store;


