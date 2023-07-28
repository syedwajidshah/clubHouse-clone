import React from 'react'
import "../style/explore_style.css"
import { Link } from 'react-router-dom'
import arrowimg from "../images/arrow.png"
function Subheader(props) {
  return (
    <div className='head'>
     <Link to="/home"><img src={arrowimg} alt="arrow"></img></Link>

     <h3>{props.pageTitle}</h3>
    </div>
  )
}

export default Subheader