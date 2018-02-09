/* START SOLUTION */
import React, { Component } from 'react';
import { FormGroup, Button, FormControl, ControlLabel, HelpBlock, Panel } from 'react-bootstrap';
import { browserHistory } from 'react-router';

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

        setTimeout(() => {
            browserHistory.push("/edituser")
        }, 1000)

    }

  render() {
    
    return (
        <div>
            <Panel bsStyle="primary" header="Update User">

                <form onSubmit={this.handleFormSubmit}>
                <input type="hidden" name="id" defaultValue={this.props.authorized_user.id} />
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
                    id="formControlsEmail"
                    type="string"
                    label="Email"
                    placeholder="email"
                    name="email"
                    defaultValue={this.props.authorized_user.email}
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

/* ELSE

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

class EditUser extends Component {

    //method that runs when the form is submitted
    handleFormSubmit = formSubmitEvent => {
        //This method should populate a User model from the form data.
        //
        //Use the action(s) provided by the container that 
        //rendered this component to submit the data
        //for and update the user. 
        // 
        //You should be able to see the users name change in the header
        //after you edit the data in the form.
    }

  render() {
    
    return (
        <div>
            <Panel bsStyle="primary" header="Update User">

                <form onSubmit={this.handleFormSubmit}>
                <input type="hidden" name="id" defaultValue={this.props.authorized_user.id} />
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
                    id="formControlsEmail"
                    type="string"
                    label="Email"
                    placeholder="email"
                    name="email"
                    defaultValue={this.props.authorized_user.email}
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

END SOLUTION */
