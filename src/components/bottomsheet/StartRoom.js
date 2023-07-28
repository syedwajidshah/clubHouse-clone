import React, { useState } from "react";
import { FcGlobe } from "react-icons/fc";
import arrow from "../../images/arrow.png"

function StartRoom(props) {
  const [room, setRoom] = useState("open");
  return (
    <div>
      <div className="switchline">
        <a href="#" onClick={() => props.setSheetVisible(false)}>
          <img src={arrow}></img>
        </a>
        
      </div>
       <div className="text-right">
        <button className="addTopic_btn">+ add a topic</button>
      </div>
      <div className="selectroom">
        <button
          className={room == "Open" ? "active" : ""}
          onClick={() => setRoom("Open")}
        >
          <div>
            <FcGlobe />
          </div>
          Open
        </button>
        <button
          className={room == "Social" ? "active" : ""}
          onClick={() => setRoom("Social")}
        >
          <div>
            <FcGlobe />
          </div>
          Social
        </button>

        <button
          className={room == "closed" ? "active" : ""}
          onClick={() => setRoom("closed")}
        >
          <div>
            <FcGlobe />
          </div>
          Closed
        </button>
      </div>
      <p>Start the Room{" "}
      <span>
      { room == "Closed" 
      ? 'for people i chose'
      :room == "Social"
      ? "with people i follow"
      : "for everuone" }</span>
      </p>
     <div className="text_center">
      <button className="letsgobtn" onClick={() =>{
         props.setSheetCreateRoom(true);
         props.setSheetVisible(true);
      }}>Let's Go</button>
     </div>
    </div>
  );
}

export default StartRoom;
