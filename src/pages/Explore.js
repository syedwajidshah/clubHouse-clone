import React from 'react'
import "../style/explore_style.css"
import {AiOutlineFire} from "react-icons/ai";
import {AiOutlineDown} from "react-icons/ai"
import data from "../components/data/Explore.json"
import userimg from "../images/user-img.jpg"
import searchimg from "../images/search.png"
import Subheader from './Subheader';
function Explore() {
    const{people,conversation} = data;
  return (
    <div className='explore_container'>
    <div className='header'>
     <Subheader pageTitle = "EXPLORE"/>
        <form style={{backgroundColor:"#f4f4f4",
                   }}>
        <img src={searchimg} width='20px' style={{
            marginRight:"1em"
        }} />
        <input style={{
            backgroundColor: "#f4f4f4",
            borderRadius: "0.8em",
            padding: "0.3em 2em",
            border: "none",
            boxShadow: "none", 
            
        }}
        
        placeholder='Find People and Clubs'
        size="large"
        ></input>
        </form>
    </div>
        <h6>FOLLOW TO PEOPLE</h6>
        <div className='people_container'>
            {
                people.map((item) =>(
                <div>
                    <div className='d-flex align-items-center'>
                        <img src={userimg} alt=""></img>
                        <div className='ml-2'>
                            <h5>{item.title}</h5>
                            <p>{item.description}</p>
                        </div>
                    </div>
                    <button>FOLLOW</button>
                </div>

                ))
            }
            <button className='show_more'>Show More People <AiOutlineDown/> </button>
        </div>
        <h6>FIND CONVERSTION ABOUT ...</h6>
                    <div className='row mx-0'>
                        {
                            conversation.map((item) => (
                                <div className='px-2 col-6 mb-3'>
                                 <div className='conversation_card'>
                                    <h6><AiOutlineFire/>
                                     {item.title}
                                     </h6>
                                     <p>{item.discription}</p>
                                 </div>
                                </div>
                            ))
                        }
                    </div>
    </div>
  )
}

export default Explore