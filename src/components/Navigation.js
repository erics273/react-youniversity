import React, { Component } from 'react';
import { Navbar } from 'react-bootstrap';
import { Link } from 'react-router';

import NavLoginContainer from '../containers/NavLogin'


class Navigation extends Component {

    render() {
        return (
            <Navbar inverse fixedTop collapseOnSelect>
                <Navbar.Header>
                <Navbar.Brand>
                    <Link to="/"><span style={{color:"red"}}>YOU</span>NIVERSTY</Link>
                </Navbar.Brand>
                <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <NavLoginContainer />
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default Navigation;
