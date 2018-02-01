import React, { Component } from 'react'
import { Navbar, FormGroup, FormControl, Button, Alert } from 'react-bootstrap';
import { Link, browserHistory } from 'react-router';

import {User} from '../models/User'

class NavLogin extends Component {
    
    loginUser = event => {
        event.preventDefault();
        let form = event.target
  
        let user = new User();
        user.username = form.username.value;
        user.password = form.password.value
  
        this.props.login(user).then(() => browserHistory.push('/edituser'));
        
  
    }

    logoutUser = event => {
        event.preventDefault()
        this.props.logout()
        browserHistory.push('/');
    }
  
    render() {

        
        
        if(this.props.currentUser.id){
            
          let user = this.props.currentUser;
  
          return (
            <Navbar.Text pullRight>
              Signed in as: <Link to="/edituser">{user.firstName} {user.lastName}</Link> (<Navbar.Link onClick={this.logoutUser} href="#">Logout</Navbar.Link>)
            </Navbar.Text>
          )
  
        }
            
    
        let statusMessage = "";
        console.log(this.props)
        if(this.props.loginFailed){
            statusMessage =  (
                <Alert bsStyle="danger">
                    Login Failed
                </Alert>
            )
        }
    

        return (
            <div>
                <form onSubmit={this.loginUser}>
                    {statusMessage}
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