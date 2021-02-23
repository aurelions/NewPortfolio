import React from 'react';
import axios from 'axios';

class Contact extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            name: '',
            email: '',
            phone: '',
            message: ''

        }
    }

     handleSubmit(e){
        e.preventDefault();
        // console.log(this.state);
        axios({
            method: 'POST',
            url: "http://localhost:3000/send",
            data: this.state
        }).then((response)=>{
            if(response.data.status === 'success'){
                alert("Message Sent.");
                this.resetForm()
            }else if(response.data.status === 'fail'){
                alert("Message failed to send")
            }
        })
    }
    resetForm(e){
        this.setState({name: '', email: '', message: ''})
    }

    render(){

        return(
            <div className="Contact">
                <form id="contact-form" onSubmit={this.handleSubmit.bind(this)} method="POST">
                    <div className="form-group">
                        <label htmlFor='name'>Name</label>
                        <input type="text" className="form-control" value={this.state.name} onChange={this.onNameChange.bind(this)}/>
                    </div>
                     <div className="form-group">
                        <label htmlFor='email-input'>Email</label>
                        <input type="email" className="form-control" aria-describedby="email" value={this.state.email} onChange={this.onEmailChange.bind(this)}/>
                    </div>
                     <div className="form-group">
                        <label htmlFor='phone-input'>Phone</label>
                        <input type="phone" className="form-control" aria-describedby="phone" value={this.state.phone} onChange={this.onPhoneChange.bind(this)}/>
                    </div>
                     <div className="form-group">
                        <label htmlFor='Message'>Message</label>
                        <textarea className="form-control" rows="5" value={this.state.message} onChange={this.onMessageChange.bind(this)}></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
        
            </div>
        )
    }

    onNameChange(e){
        this.setState({name: e.target.value})
    }
    onEmailChange(e){
        this.setState({email: e.target.value})
    }

    onPhoneChange(e){
        this.setState({phone: e.target.value})
    }

    onMessageChange(e){
        this.setState({message: e.target.value})
    }
}

export default Contact;