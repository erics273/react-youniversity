import React, { Component } from 'react';
import  UserForm from "./UserForm";
import User from "../models/User";

class Register extends Component {

    render() {
    
        return (
            <UserForm user={new User()} header="Create an account" dispatchMethod={this.props.register} />
        );
      }
}


export default Register;