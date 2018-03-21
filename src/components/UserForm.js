/* START SOLUTION */
import React, { Component } from 'react';
import { FormGroup, Button, FormControl, ControlLabel, HelpBlock, Panel } from 'react-bootstrap';
import User from '../models/User'
import _ from 'lodash';

function FieldGroup({ id, label, help, ...props }) {
    return (
        <FormGroup controlId={id}>
            <ControlLabel>{label}</ControlLabel>
            <FormControl {...props} />
            {help && <HelpBlock>{help}</HelpBlock>}
        </FormGroup>
    );
}

class UserForm extends Component {

    //method that runs when the form is submitted
    handleFormSubmit = event => {
        event.preventDefault();

        let form = event.target;
        let userInfo = this.prepareFormData(form);

        this.props.dispatchMethod(userInfo);

        form.reset();

    }

    prepareFormData(formData) {
        //new UserModel object that we populate with the form data to make the api request
        let userInfo = new User();

        //looping over all the fields from the form and working with each one 
        //the variable input represents the form field we are currently working with
        for (const input of formData) {

            if (!_.has(userInfo, input.name)) {
                continue;
            }

            //lets skip this iteration of the loop if they field was left blank
            if (!input.value) {
                delete (userInfo[input.name])
                continue;
            }

            userInfo[input.name] = input.value

        }

        return userInfo;

    }

    render() {

        return (
            <div>
                <Panel bsStyle="primary" header={this.props.header}>

                    <form onSubmit={this.handleFormSubmit}>
                        <FieldGroup
                            className="form-field"
                            id="formControlsFirstName"
                            type="string"
                            label="First Name"
                            placeholder="First Name"
                            name="firstName"
                            defaultValue={this.props.user.firstName}
                            required="true"
                        />
                        <FieldGroup
                            className="form-field"
                            id="formControlsLastName"
                            type="string"
                            label="Last Name"
                            placeholder="Last Name"
                            name="lastName"
                            defaultValue={this.props.user.lastName}
                            required="true"
                        />

                        <FieldGroup
                            className="form-field"
                            id="formControlsEmail"
                            type="string"
                            label="Email"
                            placeholder="email"
                            name="email"
                            defaultValue={this.props.user.email}
                            required="true"
                        />

                        <FieldGroup
                            className="form-field"
                            id="formControlsUserName"
                            type="string"
                            label="Username"
                            placeholder="username"
                            name="username"
                            defaultValue={this.props.user.username}
                            required="true"
                        />

                        <FieldGroup
                            className="form-field"
                            id="formControlsPassword"
                            type="password"
                            label="Password"
                            placeholder="Password"
                            name="password"
                        />

                        <Button className="btn btn-default" type="submit">Submit</Button>

                    </form>
                </Panel>
            </div>

        );
    }
}


export default UserForm;

/* ELSE
import React, { Component } from 'react';
import { FormGroup, Button, FormControl, ControlLabel, HelpBlock, Panel } from 'react-bootstrap';
//model that represents data that is needed to create a user
import User from '../models/User'

function FieldGroup({ id, label, help, ...props }) {
  return (
    <FormGroup controlId={id}>
      <ControlLabel>{label}</ControlLabel>
      <FormControl {...props} />
      {help && <HelpBlock>{help}</HelpBlock>}
    </FormGroup>
  );
}
class UserForm extends Component {
    //method that runs when the form is submitted
    handleFormSubmit = formSubmitEvent => {
        //Now that we have moved our Async calls to our action/User.js we need to update this method to function properly
        //
        //This method should pass the form data (formSubmitEvent.target) to "prepareFormData()" to get a User model populated
        //from the form data. This is the data that needs to be sent with the Asyc call
        
    }
    prepareFormData(formData) {
        //new UserModel object that we populate with the form data to make the api request
        let userInfo = new User();
        //looping over all the fields from the form and working with each one 
        //the variable input represents the form field we are currently working with
        for (const input of formData) {
            if (!_.has(userInfo, input.name)) {
                continue;
            }
            //lets skip this iteration of the loop if they field was left blank
            if (!input.value) {
                delete (userInfo[input.name])
                continue;
            }
            userInfo[input.name] = input.value
        }
        return userInfo;
    }
    render() {
        
        return (
            <div>
                <Panel bsStyle="primary" header={this.props.header}>
                    <form onSubmit={this.handleFormSubmit}>
                        <FieldGroup
                            className="form-field"
                            id="formControlsFirstName"
                            type="string"
                            label="First Name"
                            placeholder="First Name"
                            name="firstName"
                            defaultValue={this.props.user.firstName}
                            required="true"
                        />
                        <FieldGroup
                            className="form-field"
                            id="formControlsLastName"
                            type="string"
                            label="Last Name"
                            placeholder="Last Name"
                            name="lastName"
                            defaultValue={this.props.user.lastName}
                            required="true"
                        />
                        <FieldGroup
                            className="form-field"
                            id="formControlsEmail"
                            type="string"
                            label="Email"
                            placeholder="email"
                            name="email"
                            defaultValue={this.props.user.email}
                            required="true"
                        />
                        <FieldGroup
                            className="form-field"
                            id="formControlsUserName"
                            type="string"
                            label="Username"
                            placeholder="username"
                            name="username"
                            defaultValue={this.props.user.username}
                            required="true"
                        />
                        <FieldGroup
                            className="form-field"
                            id="formControlsPassword"
                            type="password"
                            label="Password"
                            placeholder="Password"
                            name="password"
                        />
                        <Button className="btn btn-default" type="submit">Submit</Button>
                    </form>
                </Panel>
            </div>
        );
    }
}
export default UserForm;
END SOLUTION */