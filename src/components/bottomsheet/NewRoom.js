import React from 'react'
import { useState } from 'react';
import "../../style/newroom.css"
import { AiOutlineFile, AiOutlinePlus } from 'react-icons/ai';
import { BsMicMuteFill, BsMicFill } from 'react-icons/bs';
import arrow from "../../images/arrow.png"
import user_img from "../../images/user-img.jpg"
import handimg from "../../images/hand-peace.png"
import stophand from "../../images/stopHandIcon.png"


function NewRoom(props) {
    const [miceMuteVisible,setMiceMuteVisible] = useState(false);
    const [itemVisible, setItemVisible] = useState(true);
    const card = props.cardDetail;
  return (
    <div>
        <div className='newroomcontainer'>
            <div className='head'>
                <div className='d-flex align-Item-center'>
                    <a href='#' onClick={() => {props.setSheetVisible(false)}}>
                        <img src={arrow} alt="" className='arrow_iconn'
                        ></img>
                    </a>
                    <span>Hallway</span>
                </div>
            <div>
            <AiOutlineFile/>
            <img src={user_img} alt="" className='profile_img'></img>
            </div>
        </div>
        <div className='newroomcarddetail'>
            <div className='d-flex align-items-center justify-content-center'  style ={{padding: "0.5em 1em" }}>
               {card.members.map((item) => (
                <div className='membercontainer'>
                {miceMuteVisible ? (
                    <div className='audio_icon'>
                   <BsMicMuteFill/>
                    </div>
                ): ("")}
                <img src={user_img} alt=""></img>
                <p>
                    <span>*</span>
                    {item.first_name}
                </p>
                </div>
               ))}
            </div>
         </div>
       <div className='Footer'> 
         <button onClick={() =>{
            props.setSheetVisible(false);
         }}>
            <img src={handimg} alt=""></img>Leave
         </button>
           <div>
                 <button>
                <AiOutlinePlus/>
                 </button>
                 <button>
                 <img src={stophand} alt=""></img>
                 </button>
                 <button onClick={() => {
                    setMiceMuteVisible(!miceMuteVisible);
                 }}>
                    {miceMuteVisible ? <BsMicMuteFill/> : <BsMicFill/>}
                 </button>
            </div>
         </div>
      </div>
    </div>
  )
}

export default NewRoom