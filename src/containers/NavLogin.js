import { connect } from 'react-redux'
import { login, logout } from '../actions/User'

import NavLogin from '../components/NavLogin'

const mapStateToProps = state => {

  return {
    currentUser: state.user.currentUser,
    loginFailed: state.user.loginFailed
  }
}

const mapDispatchToProps = dispatch => {
  return {
    login: (user) => {
      return dispatch(login(user))
    },
    logout: () => {
      return dispatch(logout())
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavLogin)