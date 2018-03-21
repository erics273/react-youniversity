import React, { Component } from 'react';
import { Navbar, FormGroup, FormControl, Button } from 'react-bootstrap';
import { Link, browserHistory } from 'react-router';

import User from '../models/User';
import { isAuthorized } from "../services/AuthService";

class NavLogin extends Component {

    loginUser(event) {
        event.preventDefault();
        let form = event.target;

        let user = new User();
        user.username = form.username.value;
        user.password = form.password.value;

        this.props.login(user);

    }

    logoutUser = event => {
        event.preventDefault();
        browserHistory.push("/");
        this.props.logout();

    }

    render() {



        if (isAuthorized()) {

            let user = this.props.authorized_user;

            return (
                <Navbar.Text pullRight>
                    Signed in as: <Link to="/edituser">{user.firstName} {user.lastName}</Link> (<Navbar.Link onClick={this.logoutUser} href="#">Logout</Navbar.Link>)
                </Navbar.Text>
            )

        }


        return (
            <div>
                <form onSubmit={this.loginUser}>
                    <Navbar.Form pullRight>
                        <FormGroup>
                            <FormControl name="username" type="text" placeholder="username" />
                        </FormGroup>
                        {' '}
                        <FormGroup>
                            <FormControl name="password" type="password" placeholder="password" />
                        </FormGroup>
                        {' '}
                        <Button type="submit">Login</Button>
                    </Navbar.Form>
                    <Navbar.Text pullRight>
                        <Link to="/register">Create an Account</Link> or Login
                    </Navbar.Text>
                </form>
            </div>
        );
    }
}

export default NavLogin;