import React, { Component } from 'react';
import  UserForm from "./UserForm";

class EditUser extends Component {

  render() {
    
    return (
        <UserForm user={this.props.authorized_user} updateForm={true} header="Update User Details" dispatchMethod={this.props.update} />
    );
  }
}


export default EditUser;