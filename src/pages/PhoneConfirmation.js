import React, { useState } from "react";
import PhoneInput from "react-phone-number-input";
import "../style/phoneconfirmation.css";
import { Link } from "react-router-dom";
import backbtnimg from "../images/arrow.png";
import Nextbtnimg from "../images/nextArrowIcon.svg";


function PhoneConfirmation() {  

  const [value,setValue] = useState();
  return (
    <div className='phoneconfirmationcontainer'>
    <Link to="/" className="backbtn">
    <img src={backbtnimg} alt=""/>
    
    </Link>
    <h1>Enter your Phone</h1>
    <PhoneInput international defaultCountry="US" value={value} onChange={setValue}/>
    <p>By entering your number, you're agreeing to our {" "}
    <span> Term of Service and privacy policy.</span> Thanks!</p>
    <Link to="/code_confirm" className="primarybtn d-flex align-items-center">
      Next <img src={Nextbtnimg} className="ml-1" alt=""/>
    </Link> 
    </div>
  )
}

export default PhoneConfirmation;