import React, { Component } from 'react';
import { Navbar } from 'react-bootstrap';
import { Link } from 'react-router';

class Navigation extends Component {

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
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default Navigation;
