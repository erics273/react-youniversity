import React, { Component } from 'react';
import { FormGroup, Button, FormControl, ControlLabel, HelpBlock, Panel } from 'react-bootstrap';

//model that represents data that is needed to create a user
import {User} from '../models/User'

function FieldGroup({ id, label, help, ...props }) {
  return (
    <FormGroup controlId={id}>
      <ControlLabel>{label}</ControlLabel>
      <FormControl {...props} />
      {help && <HelpBlock>{help}</HelpBlock>}
    </FormGroup>
  );
}

class Register extends Component {

    //method that runs when the form is submitted
    handleFormSubmit = formSubmitEvent => {
        formSubmitEvent.preventDefault();
        
        //new UserModel object that we populate with the form data to make the api request
        let formData = new User();

        //looping over all the fields from the form and working with each one 
        //the variable input represents the form field we are currently working with
        for (const input of formSubmitEvent.target) {

            //lets skip this iteration of the loop if they field was left blank
            if(!input.value){
                continue;
            }

            formData[input.name] = input.value
                
        }

        //make the api call
        this.props.register(formData)

    }

  render() {

    if(this.props.registeredUser){
        let newUser = this.props.registeredUser;
        return (
            <div className="container">
                <Panel header="Welcome to YOUniversity!">
                    <h4>Welcome {newUser.firstName}! You registered successfully!</h4>
                    <p>Please login with your email and password to get started</p>
                </Panel>
            </div>
        )
    }
    
    return (
        <div className="container">
            <Panel header="YOUniversity User Registration">

                <form onSubmit={this.handleFormSubmit}>

                <FieldGroup
                    className="form-field"
                    id="formControlsFirstName"
                    type="string"
                    label="First Name"
                    placeholder="First Name"
                    name="firstName"
                />
                <FieldGroup
                    className="form-field"
                    id="formControlsLastName"
                    type="string"
                    label="Last Name"
                    placeholder="Last Name"
                    name="lastName"
                />

                <FieldGroup
                    className="form-field"
                    id="formControlsEmail"
                    type="email"
                    label="Email address"
                    placeholder="Enter email"
                    name="username"
                />
                <FieldGroup
                    className="form-field"
                    id="formControlsPassword"
                    type="password"
                    label="Password"
                    placeholder="Password"
                    name="password"
                />

                <Button  className="btn btn-default"type="submit">Create Profile</Button>

                </form>
            </Panel>
        </div>

    );
  }
}


export default Register;