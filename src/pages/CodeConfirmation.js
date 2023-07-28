import React from 'react';
import { Link } from 'react-router-dom';
import "../style/phoneconfirmation.css";
import codebackbtnimg from "../images/arrow.png";
import codenextimg from "../images/nextArrowIcon.svg";
 

function CodeConfirmation() {
  return (
    <div className='phoneconfirmationcontainer'>
    <Link to="/get_username" className='backbtn'>
        <img src={codebackbtnimg} alt=" "/>
    </Link>
        <div className='text-center'>
            <h1 style={{width: "100%" , maxWidth: "200px", marginBottom: "1em" }}>Enter the code that we just text you</h1>
            <input type="text" style={{ width:"100%", border: "none", textAlign:"center",outline:"none"}} />
            <p className='mt-2'>Didn't receive it? <span>tap to resend.</span></p>
        </div>
        <Link to="/allow_notification" className="primarybtn d-flex align-items-center">
            Next <img src={codenextimg} className="ml-1" alt=""/>
        </Link>
    </div>
  )
}

export default CodeConfirmation;