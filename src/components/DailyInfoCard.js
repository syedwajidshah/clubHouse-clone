import React from 'react'
import "../style/dailyinfocard.css";
import data from "../components/data/dailyCard.json";

function DailyInfoCard() {
  return (
    
    <div className='dailycard'>
     {data.map((item) => (
        <div>
        <span className=''>{item.time}</span>
        <div>
        <span>{item.title}</span>
       <p>{item.description}</p> 
        </div>
        </div>
     ))}

    </div>
    
  )
}

export default DailyInfoCard