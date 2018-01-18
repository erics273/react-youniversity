import React, { Component } from 'react';
import { Navbar } from 'react-bootstrap';
import { Link } from 'react-router';

import NavLoginContainer from '../containers/NavLogin'


class Navigation extends Component {

    userDetails = <NavLoginContainer />;

    render() {
        return (
            <Navbar inverse fixedTop collapseOnSelect>
                <Navbar.Header>
                <Navbar.Brand>
                    <Link to="/">YOUniversity</Link>
                </Navbar.Brand>
                <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    {this.userDetails}
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default Navigation;
