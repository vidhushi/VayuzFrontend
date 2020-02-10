import React, { Component } from 'react'
import { Redirect, Link } from 'react-router-dom'
import '../Beautification/Beautification.css';


class Welcome extends Component {

  constructor(props){
    super(props);
    this.state = {
      user:{}
    }
  }

  componentDidMount (){  
    const user =  this.props.location.state.user;
    this.setState({
      user:{...user} 
    })
  }

  

  render(){

    if( Object.keys(this.state.user).length>0){
      const user = this.state.user
      const interest = user.Interest.map((interest,index)=><span key={index}>{interest}</span>)
      return(
        <div className="signEmail">
        <div className="container">  
        <div className="row"> {/*first row*/} 
       <div className="col-4"> 
       </div> 
       <div className="col-4"> 
       <h5>Welcome {user.FullName} </h5>
        </div>
       <div className="col-4"> 
      </div>
      </div>

      <div className="row"> {/*first row*/} 
       <div className="col-4"> 
       </div> 
      {/* <div className="col-4"> 
       <h6>Your location is {user.Location}</h6>
        </div>*/}
       <div className="col-4"> 
      </div>
      </div>

      <div className="row"> {/*first row*/} 
       <div className="col-4"> 
       </div> 
       <div className="col-4"> 
       <h6>Your Interest are:</h6>
        </div>
       <div className="col-4"> 
      </div>
      </div>

      <div className="row"> {/*first row*/} 
       <div className="col-4"> 
       </div> 
       <div className="col-4"> 
       <h6>{interest}</h6>
        </div>
       <div className="col-4"> 
      </div>
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
    );
    }else{
      return (<div>Loading...</div>)
    }
  }
}

export default Welcome;