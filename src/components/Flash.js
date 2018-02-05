import React, { Component } from 'react';

import { Alert, Glyphicon, Fade } from 'react-bootstrap';

class Flash extends Component {

    render() {
        let flashMessage = ""; 

            flashMessage = (
                <Fade in={this.props.showFlash}>
                    <Alert bsStyle={this.props.flashType == "error" ? "danger" : "info"} onDismiss={this.props.hideFlash}>
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
