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