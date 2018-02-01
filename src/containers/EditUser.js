import { connect } from 'react-redux'
import { updateUser } from '../actions/User'

import EditUser from '../components/EditUser'

const mapStateToProps = state => {
  return {
    updatedUser: state.user.updatedUser,
    authorized_user: state.user.authorized_user
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