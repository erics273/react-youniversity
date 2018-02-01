import React, { Component } from 'react';
import { FormGroup, Button, FormControl, ControlLabel, HelpBlock, Panel, Alert } from 'react-bootstrap';

//model that represents data that is needed to create a user
import {User} from '../models/User'

import StatusMessageContainer from "../containers/StatusMessage";

function FieldGroup({ id, label, help, ...props }) {
  return (
    <FormGroup controlId={id}>
      <ControlLabel>{label}</ControlLabel>
      <FormControl {...props} />
      {help && <HelpBlock>{help}</HelpBlock>}
    </FormGroup>
  );
}

class EditUser extends Component {

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
                delete(formData[input.name])
                continue;
            }

            formData[input.name] = input.value
            
                
        }

        //make the api call
        this.props.updateUser(formData)

    }

  render() {

    let statusMessage = "";
    if(this.props.updatedUser){
        statusMessage =  (
            <Alert bsStyle="success">
                User Updated Successfully
            </Alert>
        )
    }
    
    return (
        <div className="container">
            <StatusMessageContainer />
            <Panel header="YOUniversity Update User">

                <form onSubmit={this.handleFormSubmit}>
                <input type="hidden" name="username" defaultValue={this.props.authorized_user.username} />
                <FieldGroup
                    className="form-field"
                    id="formControlsFirstName"
                    type="string"
                    label="First Name"
                    placeholder="First Name"
                    name="firstName"
                    defaultValue={this.props.authorized_user.firstName}
                />
                <FieldGroup
                    className="form-field"
                    id="formControlsLastName"
                    type="string"
                    label="Last Name"
                    placeholder="Last Name"
                    name="lastName"
                    defaultValue={this.props.authorized_user.lastName}
                />

                <FieldGroup
                    className="form-field"
                    id="formControlsUserName"
                    type="string"
                    label="Username"
                    placeholder="username"
                    name="username"
                    defaultValue={this.props.authorized_user.username}
                />

                <FieldGroup
                    className="form-field"
                    id="formControlsPassword"
                    type="password"
                    label="Password"
                    placeholder="Password"
                    name="password"
                />

                <Button  className="btn btn-default"type="submit">Update Profile</Button>

                </form>
            </Panel>
        </div>

    );
  }
}


export default EditUser;