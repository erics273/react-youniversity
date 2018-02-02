import React, { Component } from 'react';

import { Alert } from 'react-bootstrap';

class StatusMessage extends Component {

    render() {
        let statusMessage = "";
        if(this.props.errorMessage || this.props.successMessage){
            statusMessage = (
                <Alert bsStyle={ this.props.errorMessage ? 'danger' : 'success' }>
                    <strong>{this.props.errorMessage ? 'Holy guacamole' : 'Heck Yeah'}! </strong> 
                    {this.props.errorMessage || this.props.successMessage}
                </Alert>
            )
        }

        return (statusMessage);
    }
}

export default StatusMessage;
