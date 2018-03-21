/* START SOLUTION */
import { connect } from 'react-redux'
import { update } from '../actions/User'

import EditUser from '../components/EditUser'

const mapStateToProps = state => {
  return {
    authorized_user: state.auth.authorized_user
  }
}

const mapDispatchToProps = dispatch => {
  return {
    update: (success) => {
      dispatch(update(success));
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditUser)

/* ELSE

//This container should map the required items from state and
//imported actions to the EditUser component. The EditUser component is
//responsible for editing the authenticated users. Consider what actions
//you may need to run to edit a new user.

import { connect } from 'react-redux'

import EditUser from '../components/EditUser'

const mapStateToProps = state => {
  return {}
}

const mapDispatchToProps = dispatch => {
  return {}
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditUser)

END SOLUTION */