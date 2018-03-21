/* START SOLUTION */
import React, { Component } from 'react'
import { Navbar, FormGroup, FormControl, Button } from 'react-bootstrap';
import { Link, browserHistory } from 'react-router';

import User from '../models/User'
import { login, logout } from "../services/AuthService";

class NavLogin extends Component {

    loginUser = event => {
        event.preventDefault();

        let user = new User();
        user.username = event.target.username.value;
        user.password = event.target.password.value;

        login(user).then((result) => {
            this.props.login(true);
            browserHistory.push("/edituser");
        }).catch((error) => {
            this.props.login(false);
        })

        event.target.reset();

    }



    logoutUser = event => {
        event.preventDefault()
        
        logout().then((result) => {
            browserHistory.push("/");
            this.props.logout(true);
        }).catch((error) => {
            this.props.logout(false);
        })
    }

    render() {



        if (this.props.authorized_user) {

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

/* ELSE

import React, { Component } from 'react'
import { Navbar, FormGroup, FormControl, Button } from 'react-bootstrap';
import { Link, browserHistory } from 'react-router';

import { User } from '../models/User'

class NavLogin extends Component {

    loginUser = event => {

        //This method should make create a new instance of our User model.
        //
        //Populate the instance of the User model with the username and password from the form
        //
        //Import the Methods needed from the AuthService to attempt a user login.
        //Dispatch the appropriate action mapped to this component from it's container on successful and failed login attempt 
        //
        //Redirect the user to "/edituser" using "browswerHistory" imported from react-router on success
        //

    }

    logoutUser = event => {

        //Import the Methods needed from the AuthService to log out a user.
        //redirect the user to "/" using "browswerHistory" imported from react-router on success
        //Dispatch the appropriate action mapped to this component from it's container on successful and failed logut attempt

    }

    render() {



        //If there is an authorized user in state we should return this foolowing JSX instead
        //of the login form below.

        //return (
        //  <Navbar.Text pullRight>
        //      Signed in as: <Link to="/edituser">DISPLAY_USERS_FIRST_AND_LAST_NAME_FROM_STATE</Link> (<Navbar.Link onClick={this.logoutUser} href="#">Logout</Navbar.Link>)
        //  </Navbar.Text>
        //)

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

END SOLUTION */