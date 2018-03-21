/* START SOLUTION */
import React, { Component } from 'react';
import { FormGroup, Button, FormControl, ControlLabel, HelpBlock, Panel } from 'react-bootstrap';
import { refreshAuth } from "../services/AuthService";
import User from '../models/User'
import DataService from "../services/DataService";
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
        let client = new DataService("user");
        let userInfo = this.prepareFormData(form);

        if(this.props.updateForm){
            client.put(userInfo).then(result => {
                refreshAuth().then(success => {
                    this.props.dispatchMethod(true);
                })
            }).catch(error => {
                this.props.dispatchMethod(false);
            })
        }else{
            client.post(userInfo).then(result => {
                this.props.dispatchMethod(true);
            }).catch(error => {
                this.props.dispatchMethod(false);
            })
        }

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
        //This method should pass the form data (formSubmitEvent.target) to "prepareFormData()" to get a User model populated
        //from the form data and use the DataService to update the user in the API.
        //
        //Import and instantiate the provided DataService (also imported and used in the AuthService) to make the API calls required
        //to edit a user. The endpoint is "user" when instantiating the DataService. Alternatively, you can make a UserService that
        //uses the data service to wrap this functionality. This would look a lot like the AuthService but handle functionality related
        //to registering and updating users
        //
        //if "this.props.updateForm" is true we should update the user info in the API (PUT Request) otherwise we should 
        //create a user (POST Request) in the API
        //
        //NOTE: On successful update or creation of a user we should call "this.props.dispatchMethod(true)". This is the dispatch
        //      method passed in as a prop from the parent component. On failure call "this.props.dispatchMethod(false)". This will ensure
        //      state gets updated.
        //
        //On update success we should call the "refreshAuth()" method from our AuthService to make sure the updated user info makes it into
        //local storage.
        
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