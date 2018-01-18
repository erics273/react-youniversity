import { connect } from 'react-redux'
import { updateUser } from '../actions/User'

import EditUser from '../components/EditUser'

const mapStateToProps = state => {
  return {
    updatedUser: state.user.updatedUser,
    currentUser: state.user.currentUser
  }
}

const mapDispatchToProps = dispatch => {
  return {
    updateUser: (user) => {
      dispatch(updateUser(user))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditUser)