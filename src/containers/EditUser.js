import { connect } from 'react-redux'
import { updateUser } from '../actions/User'

import EditUser from '../components/EditUser'

const mapStateToProps = state => {
  return {
    authorized_user: state.auth.authorized_user
  }
}

const mapDispatchToProps = dispatch => {
  return {
    updateUser: (user) => {
      updateUser(user)
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditUser)