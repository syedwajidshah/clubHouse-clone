
import React from 'react';
import "../style/welcome.css";
import { Link } from 'react-router-dom';

function Welcome() {
  return (
    
    <div className='welcome_container'><h1>Welcome!</h1>
    
    <div className='welcomeinfo'>
        <p>We're working hard to get clubhouse ready for everyone! While we wrap up the finishing touches we are adding people gradually to make sure noting breaks </p>
        
        <p>Anyone can join with an invite from an existing user or reserve your username and well text you if you have friend on app who can let you in we are so gratfull you are here and can not wait have you join!. </p>

        
        <p>Paul, Rohan & the Clubhouse team</p>
    </div>
    <div className='actionbutton'>
        <Link to='/invite' className="primaryBtn d-flex align-items-center mb-3">Get your  username</Link>
        <Link>Have an invite text? sign in</Link>
    </div>
    </div>
    
    
  )
}

export default Welcome