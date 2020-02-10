import React, {Component } from 'react'
import { Redirect, Link } from 'react-router-dom'
import '../Beautification/Beautification.css';
import {Fileupload} from './Fileupload'


class SignUp extends Component {

    constructor(props){
        super(props);
    this.state = {
        Email: null,
        Password: null,
        FullName: null,
        CurrentLocation:null
      }
      this.hchange = this.hchange.bind(this);
      this.signUpClickhandler = this.signUpClickhandler.bind(this);
    }
    hchange (evt)
    {
       this.setState({ [evt.target.name]: evt.target.value });
       
    }
    signUpClickhandler(){
    let data={
      Email:this.state.Email,
      Password:this.state.Password,
      FullName:this.state.FullName,
      CurrentLocation:this.state.CurrentLocation
    } 
    fetch('http://localhost:3000/adduser',{
      method:'POST',
      body:JSON.stringify(data),
      headers:{
      'Content-Type': 'application/json',
      }
    })
    .then( res => res.json())
    .then( data=>{console.log(data);
      console.log(data);
    })
        console.log(this.state.Email);
        console.log(this.state.Password);
        console.log(this.state.FullName);
        console.log(this.state.CurrentLocation);
      }

    render(){

        return(
        <div>
        <div className="signUp">
        <div className="container">  
      

       <div className="row">
       <div class="col-9">    {/*first -colum*/}

       <div className="row">{/*first -1row*/}   
      <div className="col">
      <div className="form-group">
      <div className="form-group col-md-6">
     <input type="email" className="form-control" placeholder="Email" name = "Email" onChange={this.hchange} value={this.state.Email} ></input>
     </div> 
        </div> 
      </div>
      </div>
    <div className="row">
    <div className="col"> 
    <div className="form-group">
      <div className="form-group col-md-6">
      <input type="password" className="form-control" placeholder="password" name = "Password" onChange={this.hchange} value={this.state.Password}></input>
      </div>
      </div>
      </div>
     </div>
     <div className="row">
    <div className="col"> 
    <div className="form-group">
      <div className="form-group col-md-6">
      <input type="text" className="form-control" placeholder="Full Name" name = "FullName" onChange={this.hchange} value={this.state.FullName}></input>
      </div>
      </div>
      </div>
     </div>
     <div className="row">
    <div className="col"> 
    <div className="form-group">
      <div className="form-group col-md-6">
      <input type="text" className="form-control" placeholder="Current location" name = "CurrentLocation" onChange={this.hchange} value={this.state.CurrentLocation}></input>
      </div>
      </div>
      </div>
     </div>
     <div className="form-group form-check">
    <input type="checkbox" className="form-check-input"></input>
    <label className="form-check-label">I agree to all Terms and Conditions</label>
     </div>
     <div className="row"> 
    <div className="col-2"></div>
    <div className="col-7">
    
    <Link to="/EmailVerification">
    <button type="submit" onClick={this.signUpClickhandler} className="btn btn-primary">Sign Up</button>
    </Link>
    
    </div>
    <div className="col-3"> 
    </div>
    </div>
    <h6>Already a member?<Link to="/">Sign In</Link></h6>
      </div>
      <div className="col-3">
    <div className="text-center">
     <Fileupload/>
      {/* <img src="..." className="rounded" ></img> */}
    </div>
    </div>  
    </div> 
    
     </div>
    </div>
    </div>
        );
       }
   
  
    }
    export default SignUp;

    


 