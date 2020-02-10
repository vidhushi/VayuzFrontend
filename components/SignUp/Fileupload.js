import React, { Component } from 'react';
import axios from 'axios';


export class Fileupload extends Component {
     
    constructor(props){
        super(props);

        this.onFileChange = this.onFileChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            profileImg: ''
        }
    }

onFileChange(e){
    this.setState({ profileImg: e.target.files[0] })
}

onSubmit(e) {
    e.preventDefault()
    const formData = new FormData()
    formData.append('profileImg', this.state.profileImg)
    axios.post("http://localhost:3000/api/upload",{
    }).then(res => {
        console.log(res)
        console.log("image added")
    })
}

render() {
        return (
            <div className="container">
                <div className="row">
                    <form>
                        <h3>Upload Profile Picture</h3>
                        <div className="form-group">
                            <input type="file" onChange={this.onFileChange}/>
                        </div>
                        <div className="form-group">
                            <button className="btn btn-primary" onSubmit={this.onSubmit} type="submit">Upload</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}