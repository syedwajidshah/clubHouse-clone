import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import "../style/roominfocard.css";
import  data from "./data/roomCard.json"
import user1 from "../images/user-img.jpg";
import user2 from "../images/user-img2.jpg";
import {BsChatDots,BsChatDotsFill, BsFillPersonFill } from "react-icons/bs";
import { icons } from 'react-icons';

function RoomindoCard(props) {
  return (
    <>
    <div>
      {data.map((item) => (
        <div>
            <div>
                <div className='roomcardcontainer'>
                    <h6>{item.title}</h6>
                    <h2>{item.Sub_title}</h2>
                    <div className="room_style">
                      <div>
                        <img src={user1} alt=''></img>
                        <img src={user2} alt=''></img>
                      </div>
                      <div>
                        {item.members.map((person) =>(
                          <p>
                            {person.fist_name}
                            {person.last_name} <BsChatDots/>
                          </p>
                        ))}
                        <p className='d-flex align-items-center'>
                        <span className="mr-2">1.8</span>
                        <BsFillPersonFill/>
                        <span className='mx-2'></span>{" "}
                        <span className='mr-2'>5</span> <BsChatDotsFill/>

                        </p>
                      </div>
                    </div>
                </div>
            </div>
        </div>
      ))}
    </div>
    </>
  )
}

export default RoomindoCard