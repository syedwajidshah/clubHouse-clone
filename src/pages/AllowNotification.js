import React from 'react'
import "../style/phoneconfirmation.css";
import handimg from "../images/handIcon.svg";

import { Link } from 'react-router-dom';
function AllowNotification() {
  return (
    <div className='phoneconfirmationcontainer'>
        <div className='text-center'>
            <h1 className='mb-4'>Last important step!</h1>
            <h1 className='mb-3'>Enable notification to know when people are talking</h1>
            <div className='notificationcontainer'>
                <div className='p-3'>
                    <h3>"Clubhouse" Would like to send you Notifications</h3>
                    <p>Notification may include alerts, sound and icon badges</p>
                </div>
                <div className='action_btn'>
                    <Link to="/home" >Don't Allow</Link>
                    <Link to="/home" >Allow</Link>
                    <img src={handimg} alt="" className='hand_icon'/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AllowNotification