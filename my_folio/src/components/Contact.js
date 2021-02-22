import React from 'react';
import Axios from 'axios';

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

    handleSubmit


    render(){

        return(
            <div className="Contact">
                <form id="contact-form" onSubmit={this.hadleSubmit.bind(this)} method="POST">


                
                
                



                
                
                </form>
        
            </div>
        )
    }
}