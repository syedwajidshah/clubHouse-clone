import React from "react";
import { useState } from "react";
import DailyInfoCard from "../components/DailyInfoCard";
import Header from "../components/Header";
import RoomindoCard from "../components/RoomindoCard";
import "../style/home.css";
import data from "../components/data/roomCard.json"
import { AiOutlinePlus } from "react-icons/ai";
import { BsGrid3X3Gap } from "react-icons/bs";
import BottomSheet from "../components/BottomSheet";
import looder from "../images/loader.gif"
import newRoomData from "../components/data/newRoomData.json";


function Home() {

const [itemsVisible,setItemsVisible] = useState(true);
const [sheetVisible,setSheetVisible] = useState(false);
const [sheetCreateRoom,setSheetCreateRoom] = useState(false);
const [looderVisiblity,setLooderVisiblity] = useState(false);
const [cardId,setCardId] = useState(1);
  return (
    <div>
    {looderVisiblity ? (
      <div
        style={{
          position:"fixed",
          top:"0",
          bottom: "0",
          left: "0",
          right: "0",
          display:"flex",
          alignItems: "center",
          justifyContent:"center",
        }}>
        <img src={looder}></img>
      </div>
    ): ''
    }
      <Header />
      <div className="home_container">
        <DailyInfoCard />
        <RoomindoCard />
      </div>
      <div className="action_btn">
        <button onClick={() => setSheetVisible(true)}>
          <AiOutlinePlus className="mr-2" /> Start Now
        </button>
        <button>
          <BsGrid3X3Gap/>
        </button>
      </div>
      <BottomSheet 
        sheetTitle = "start room"
        setSheetVisible={(item) => setSheetVisible(item)}
        sheetVisible = {sheetVisible}
        cardDetail = {data.find((item) => item.id == cardId)}
        setItemsVisible = {(item) => setItemsVisible(item)}
        setSheetCreateRoom ={(item) =>{
          setLooderVisiblity(true);
          setTimeout(()=>{
            setSheetCreateRoom(item);
            setLooderVisiblity(false)
          },1000);
        }}
      />
      <BottomSheet
      sheetTitle = "new room" 
      setSheetVisible = {(item) => setSheetCreateRoom(item)}
      sheetVisible ={sheetCreateRoom}
      cardDetail ={newRoomData}
      setItemsVisible ={(item) => setItemsVisible(item)}
      />
    </div>
  );
}

export default Home;
