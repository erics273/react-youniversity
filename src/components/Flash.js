import React, { Component } from 'react';

import { Alert } from 'react-bootstrap';

class Flash extends Component {

    render() {
        let flashMessage = "";
        if(this.props.showFlash){
            flashMessage = (
                <Alert bsStyle={this.props.flashType === "error" ? 'danger' : 'success' } onDismiss={this.props.hideFlash}>
                    <strong>{this.props.flashType === "error" ? 'Holy guacamole' : 'Heck Yeah'}! </strong> 
                    {this.props.flashMessage}
                </Alert>
            )
        }

        return (flashMessage);
    }
}

export default Flash;
