import React, { Component } from 'react'
import { BrowserRouter as Router, Switch ,Route, Link, withRouter} from "react-router-dom";
import '../Beautification/Beautification.css';


class Interest extends Component {

    constructor(props){
      super(props);
      this.state = {
        user:{}
      }
    }

    componentDidMount (){  
      const user =  this.props.location.state.user;
      console.log(this.props.location.state.user);
      this.setState({
        user:{...user} 
      })
    }

    onInterestClickHandler = (e) => {
      const user = {...this.state.user}
      const interest = e.target.innerHTML;
      if(! user.Interest.includes(interest)){
        user.Interest.push(interest);
        this.setState({
          user:user
        })
      }
    }

    onSubmitInterestsHandler = () => {
      let data = {
        ...this.state.user
      }
      fetch(`http://localhost:3000/updateuser?UserId=${this.state.user._id}`,{
        method:'PUT',
        body:JSON.stringify(data),
        headers:{
        'Content-Type': 'application/json',
        }
      })
      .then(res=>res.json())
      .then(data=>{
        console.log(data)
        this.props.history.push({
          pathname: '/Welcome',
          state: { 
            user : this.state.user,
          }
        })
      })
    }

  render(){
    return(
        <div className="signEmail">
        <div className="container">  
        <div className="row"> {/*first row*/} 
       <div className="col-4"> 
       </div> 
       <div className="col-4"> 
       <h6>Hi {this.props.location.state.user.FullName} Select Your Interest</h6>
        </div>
       <div className="col-4"> 
      </div>
      </div>
      <div className="row">
      <div className="col-2">
    <button className="boxInterest" onClick = {this.onInterestClickHandler}>Interest 1</button>
    </div>
    <div className="col-2">
    <button className="boxInterest" onClick = {this.onInterestClickHandler}>Interest 2</button>  
    </div> 
    <div className="col-2">
    <button className="boxInterest" onClick = {this.onInterestClickHandler}>Interest 3</button>
    </div>
    <div className="col-2">
    <button className="boxInterest" onClick = {this.onInterestClickHandler}>Interest 4</button>
    </div>
    <div className="col-2">
    <button className="boxInterest" onClick = {this.onInterestClickHandler}>Interest 5</button>
    </div>    
    </div>

    <div className="row row-m-t">
    </div>

    <div className="row">
   <div className="col-5"> 
    </div> 
    <div className="col-4"> 
   
     <button type="submit"  className="btn btn-primary" onClick ={ this.onSubmitInterestsHandler}>Next</button>
        </div>
     <div className="col-3"> 
    </div> 
     </div>
    </div>
    </div>


    );
  }
}

export default withRouter(Interest);