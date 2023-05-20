import React, { useState } from "react";
import background from "../assest/Sign-background.svg";
import Industry from "../assest/Industry.png";
import CardBg from "./CardBg";
import Form from "react-bootstrap/Form";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import { BiArrowBack } from "react-icons/bi";
import { Link } from "react-router-dom";
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';
import "animate.css";

const Create_Store_two = () => {
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
                  <h6>
                    <b className="color-5961F8">01\</b>{" "}
                    <span className="color-5C6D8E">04</span>
                  </h6>
                  <div class="logo-header h4 pt-4">Select Industry</div>
                  <p className="color-4B4E70 w-75 mb-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Lacus nulla eget adipiscing faucibus platea. Eu ultrices
                    ipsum
                  </p>
                  <FormControl fullWidth>
                    <InputLabel
                      variant="standard"
                      htmlFor="uncontrolled-native"
                    >
                      Services
                    </InputLabel>
                    <NativeSelect
                      defaultValue={30}
                      inputProps={{
                        name: "age",
                        id: "uncontrolled-native",
                      }}
                    >
                      <option value={10}>Ten</option>
                      <option value={20}>Twenty</option>
                      <option value={30}>Thirty</option>
                    </NativeSelect>
                  </FormControl>
                </div>
                <div className="navigate-button d-flex justify-content-between">
                  <div className="back-btn">
                    <BiArrowBack />
                  </div>
                  <div>
                    <button className="w-100 px-4 mt-0 get-opt-btn">
                      <span className="text-center ">Continue</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-7">
              <div className="image-upl-outer">
                <div className="header-store">
                  <div className="h5 logo-header"> Store Name</div>
                  <div className=" links-nav">
                    <div>Home</div>
                    <div>About</div>
                    <div>Career</div>
                    <div>Contact</div>
                  </div>
                </div>
                <div
                  className={
                    otp
                      ? "animate__animated animate__zoomIn img-section"
                      : "img-section "
                  }
                >
                  <img className="w-100 py-2 rounded  h-50" src={Industry} />
                </div>
              </div>
            </div>
          </div>
        </CardBg>
      </div>
    </div>
  );
};

export default Create_Store_two;
