import React from 'react'
import SwipeableBottomSheet from "react-swipeable-bottom-sheet";
import "../style/bottomsheet_style.css"
import StartRoom from "./bottomsheet/StartRoom"
import NewRoom from './bottomsheet/NewRoom';

function BottomSheet(props) {
  return (
    <div>
        <SwipeableBottomSheet 
        open={props.sheetVisible}
        onchange = {() =>{
            props.setSheetVisible(!props.sheetVisible)
            props.setItemsVisible(true)

        }}
        fullScreen ={ props.sheetTitle == "Room Detail" ? true: false}
        >
        <div className='bottomsheetcontainer' style={{backgroundColor: props.sheetTitle == "profile" ? 'transparent': ""}}>
            
            {props.sheetTitle == 'new room' ? (
              <NewRoom
              cardDetail = {props.cardDetail}
             setSheetVisible = {(item) => {
                props.setSheetVisible(item);
                props.setItemsVisible(true)
             }}
             />
            ) : props.sheetTitle=="start room" ? (
              <StartRoom
             setSheetCreateRoom = {props.setSheetCreateRoom}
             setSheetVisible = {(item) => {
                props.setSheetVisible(item);
                props.setItemsVisible(true)
             }}
             />
            ):(
              ""
            )
            }
            
        </div>
        </SwipeableBottomSheet>
    </div>
  )
}

export default BottomSheet