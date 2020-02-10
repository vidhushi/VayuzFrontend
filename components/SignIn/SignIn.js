import React, {Component } from 'react'
import { BrowserRouter as Router, Switch ,Route, Link, withRouter} from "react-router-dom";
import '../Beautification/Beautification.css';


import { exists } from 'fs';
const initialstate = {
    Email : '',
    Password : '',
    Emailerror:"",
    Passworderror:""
}

class SignIn extends Component {
    
    state = initialstate;

    constructor(props){
        super(props);
        this.state = {
          Email: null,
          Password: null,
          FullName:null,
          CurrentLocation:null
        }
        this.hchange = this.hchange.bind(this);
        this.validate = this.validate.bind(this);
        this.forredirect = this.forredirect.bind(this);
     
      }

      hchange (evt)
  {
     this.setState({ [evt.target.name]: evt.target.value });
     
  }
  forredirect ( ){ 
  let data = {
    Email:this.state.Email,
    Password:this.state.Password
  }
  fetch('http://localhost:3000/login',{
      method:'POST',
      body:JSON.stringify(data),
      headers:{
      'Content-Type': 'application/json',
      }
    })
    .then( res => res.json())
    .then( data=>{console.log(data);
      console.log("user login successfully");
      const user = data[0];
      this.props.history.push({
        pathname: '/Interest',
        state: { 
          user :user,
        }
      })
    }) 
  }


      validate = ( ) =>{

        let Emailerror = "";
        let Passworderror = "";
        
        if (!this.state.Password){
          Passworderror = "Password can not be blank";
        
        }
        
        if (!this.state.Email.includes("@")){
          Emailerror = "Invalid Email";
        }
    
        if(!this.state.Email){
          Emailerror = "Email can not be blank";
        }
        
        
        if (Emailerror || Passworderror){
            this.setState({Emailerror, Passworderror});
            return false;
          }
        
          return true;
        
        };

    
    render(){

     return(
     <div>
    <div className="signIn">
    <div className="container">  
    <div className="sign">
    <div className="row">{/*first row*/}   
    <div className="col">
    <div className="form-group">
    <div className="form-group col-md-6">
    <input type="email" className="form-control" placeholder="Email" name = "Email" onChange={this.hchange} value={this.state.Email} ></input>
    <div style = {{fontSize : 12, color: "red"}}>{this.state.Emailerror}</div>
    </div> 
    </div>
    </div>
    </div>
    <div className="row">{/*Second row*/}
    <div className="col">
    <div className="form-group col-md-6">
    <input type="password" className="form-control" placeholder="Pssword" name = "Password" onChange={this.hchange} value={this.state.Password} ></input>
    <div style = {{fontSize : 12, color: "red"}}>{this.state.Passworderror}</div>
    </div>
    </div>
    </div>
    </div>
    <div className="row"> {/* row*/}
    <div className="col-4"></div>
    <div class="col-4">
    
    <button type="submit" onClick={this.forredirect} className="btn btn-primary">Sign in</button>
   
    </div>
    <div class="col-4"> 
    </div>
    </div>
    <div className="row">
    <div class="col-3">
    </div>
    <div class="col-3">
    <h6>New to the site?<Link to="/SignUp">Sign Up</Link></h6>
    </div>
    <div class="col-6">
    </div>
    </div>
    </div>
    </div>
    </div>  
     
     );
    }


}
export default  withRouter(SignIn);