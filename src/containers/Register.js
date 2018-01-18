import { connect } from 'react-redux'
import { register } from '../actions/User'

import Register from '../components/Register'

const mapStateToProps = state => {
  return {
    registeredUser: state.user.registeredUser
  }
}

const mapDispatchToProps = dispatch => {
  return {
    register: (user) => {
      dispatch(register(user))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Register)