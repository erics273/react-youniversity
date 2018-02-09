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
    login: (user) => {
      login(user)
    },
    logout: () => {
      logout()
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
//for displaying user information if there is an authorized user, 
//logging in a user, and logging out a user. 
//
//Consider what actions you may need to run to login/logout a user. 
//
//Consider what you may need from state to display authorized users details.

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