/* START SOLUTION */
import { connect } from 'react-redux'
import { login, logout } from '../actions/Auth'

import NavLogin from '../components/NavLogin'

const mapStateToProps = state => {

  return {
    authorized_user: state.auth.authorized_user
  }
}

const mapDispatchToProps = dispatch => {
  return {
    login: (success) => {
      dispatch(login(success));
    },
    logout: (success) => {
      dispatch(logout(success))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavLogin)

/* ELSE

//This container should map the required items from state and
//imported actions to the NavLogin component. The NavLogin component is
//for displaying user information if there is an authorized user or showing the login form if 
//not authorized user exists
//
//Consider what actions you may need to dispatch to login/logout a user and make sure they are included
//in mapDispatchToProps
//
//Consider what you may need from state.auth to display authorized users details and map that in "mapStateToProps".
//
//Make sure you import all the actions you need from the Auth.js actions file.

import { connect } from 'react-redux'

import NavLogin from '../components/NavLogin'

const mapStateToProps = state => {
  return {}
}

const mapDispatchToProps = dispatch => {
  return {}
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavLogin)

END SOLUTION */