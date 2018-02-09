/* START SOLUTION */
import { connect } from 'react-redux'
import { register } from '../actions/User'

import Register from '../components/Register'

const mapStateToProps = state => {
  return {}
}

const mapDispatchToProps = dispatch => {
  return {
    register: (user) => {
      register(user)
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Register)

/* ELSE

//This container should map the required items from state and
//imported actions to the Register component. The Register component is
//responsible for registering new users. Consider what actions
//you may need to run to register a new user.

END SOLUTION */