/* START SOLUTION */
import React, { Component } from 'react';

import { Alert, Glyphicon, Fade } from 'react-bootstrap';

class Flash extends Component {

    render() {
        let flashMessage = ""; 

            flashMessage = (
                <Fade in={this.props.showFlash}>
                    <Alert bsStyle={this.props.flashType === "error" ? "danger" : "info"} onDismiss={this.props.hideFlash}>
                        <Glyphicon glyph={this.getGlyphicon(this.props.flashType)} />&nbsp;&nbsp;
                        {this.props.flashType.toUpperCase()} {this.props.flashMessage}
                    </Alert>
                </Fade>
            )

        return (flashMessage);
    }

    getGlyphicon(flashType){
        let glyph;
        switch(flashType){
            case 'error':
                glyph = "alert";
                break;
            case "success":
                glyph = "ok-sign";
                break;
            case "info":
            case "warning":
                glyph = "info-sign";
                break;
            default:
                glyph = "";
        }
        return glyph;
    }
}

export default Flash;
/* ELSE
import React, { Component } from 'react';

import { Alert, Glyphicon, Fade } from 'react-bootstrap';

class Flash extends Component {

    render() {
        //This should render the flash message if one is returned in the result of our action
        //Our UI reducer is responsible for putting this information in state when 
        //an action is dispatched. The data is supplied to this compoent through the container
        //that renders it.
        //
        //Below is some sample react-bootstrap JSX that will render an alert
        //
        //     <Alert bsStyle="danger">
        //          some alert message
        //     </Alert>            
    }

}

export default Flash;
END SOLUTION */