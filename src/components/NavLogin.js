/* START SOLUTION */
import React, { Component } from 'react'
import { Navbar, FormGroup, FormControl, Button } from 'react-bootstrap';
import { Link, browserHistory } from 'react-router';

import { User } from '../models/User'
import { isAuthorized } from "../services/AuthService";

class NavLogin extends Component {

    loginUser = event => {
        event.preventDefault();
        let form = event.target

        let user = new User();
        user.username = form.username.value;
        user.password = form.password.value

        this.props.login(user)

        setTimeout(() => {
            browserHistory.push("/edituser")
        }, 1000)

    }



    logoutUser = event => {
        event.preventDefault()
        this.props.logout()
        
        setTimeout(() => {
            browserHistory.push("/")
        }, 1000)
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

/* ELSE

import React, { Component } from 'react'
import { Navbar, FormGroup, FormControl, Button } from 'react-bootstrap';
import { Link, browserHistory } from 'react-router';

import { User } from '../models/User'

class NavLogin extends Component {

    loginUser = event => {

        //This method should make populate our User model from the form data.
        //
        //Use the action(s) provided by the container that 
        //rendered this component to submit the data
        //for authentication. 
        //

    }

    logoutUser = event => {

        //Use the action(s) provided by the container that 
        //rendered this component to kill the users session
        // 
        //You should be redirected to the "/"" route on successful logout
    }

    render() {



        //If there is an authorized user we should return this JSX instead
        //of the form below.

        //return (
        //  <Navbar.Text pullRight>
        //      Signed in as: <Link to="/edituser">{user.firstName} {user.lastName}</Link> (<Navbar.Link onClick={this.logoutUser} href="#">Logout</Navbar.Link>)
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