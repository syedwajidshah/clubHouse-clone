import React from 'react'
import "../style/profile.css"
import "../style/explore_style.css"
import { Link } from 'react-router-dom'
import arrowimg from "../images/arrow.png"
import { BsAt, BsPlus, BsUpload } from 'react-icons/bs'
import { AiOutlineInstagram, AiOutlineSetting, AiOutlineTwitter } from 'react-icons/ai'
import userimg from "../images/user-img.jpg"
function Profile() {
  return (
    <>
        <div className='profile_container'>
            <div className='header'>
             <div className='profile_head '>
                <Link to="/home">
                    <img src={arrowimg} alt='' className='arrow_icon'></img>
                </Link>
                <div className='actionbtn'>
                  <BsAt/>
                  <BsUpload/>
                  <AiOutlineSetting/>
                </div>
             </div>
            </div>
            <img src={userimg} alt="" className='profile_img'></img>
            <h4>WaJid Shah</h4>
            <p>@wajidshah</p>
            <div className='follow'>
                <p><span>0</span> Followers</p>
                <p><span>51</span> Following</p>
            </div>
            <button>Add Bio</button>
            <div className='mb-4'>
            <button className='mb-0'>
                <AiOutlineTwitter/> Add Twitter
                </button>
                <button className='mb-0'>
                <AiOutlineInstagram/> Add Instagram
                </button>
            </div>
            <div className='nominated'>
             <img src={userimg} alt=''></img>
             <div>
             <p>Joined 25-May-2023</p>
             <p>Nominated By <span>Wajid Shah</span></p>
             </div>
            </div>
            <p>Member of</p>
            <button className='member_add'>
                <BsPlus/>
            </button>
        </div>
    </>
  )
}

export default Profile