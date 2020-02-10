import React, { Component } from 'react'
import { BrowserRouter as Router, Switch ,Route, Link } from "react-router-dom";
import '../Beautification/Beautification.css';

class EmailVerification extends Component {


  render(){
    return(
      <div>
    <div className="signEmail">
    <div className="container">  
    
    <div className="row"> {/*first row*/} 
    <div className="col-4"> 
    </div> 
    <div className="col-4"> 
    <h6>Verify Your Email Address</h6>
    </div>
    <div className="col-4"> 
    </div>
    </div>
    <div className="row">
    <div className="col-3"> 
    </div>
    <div className="col-6"> 
   <h5> Enter 5 digit OTP sent on your email address</h5>
   </div>
   <div className="col-3"> 
    </div>
    <div className="signbox">
    <div className="row">
    <div className="col-2">
    <div className="box"></div>
    </div>
    <div className="col-2">
    <div className="box"></div>  
    </div> 
    <div className="col-2">
    <div className="box"></div>
    </div>
    <div className="col-2">
    <div className="box"></div>
    </div>
    <div className="col-2">
    <div className="box"></div>
    </div>
     </div>
     </div>
   </div>
   <div className="row row-m-t">
  </div>
    
   <div className="row">
   <div className="col-4"> 
    </div> 
    <div className="col-5">  
     <button type="submit" className="btn btn-primary">Start Blogging</button>
     </div>
     <div className="col-3"> 
    </div> 
     </div>
     </div>
   </div>
    
   


      </div>
    );
  }
}

export default EmailVerification;
