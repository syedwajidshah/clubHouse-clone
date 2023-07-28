import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import "../style/header.css";
import searchimg from "../images/search.png";
import inviteimg from "../images/invite.png"
import calinderimg from "../images/calendar.png"
import notiimg from "../images/noti.png"
import profileimg from "../images/b1.png"

function Header() {

  return (
    <div className='header_style'>
        <Link to={"/explore"} > <img src={searchimg} alt=''></img></Link>
        <div className='nav_item'>
            <Link to="/friends_invite" > <img src={inviteimg} alt=""></img></Link>
            <Link to="/upcoming" > <img src={calinderimg} alt=""></img></Link>
            <Link to="/activity" > <img src={notiimg} alt=""></img></Link>
            <Link to="/profile" > <img src={profileimg} alt=""></img></Link>
        </div>
    </div>
  )
}

export default Header