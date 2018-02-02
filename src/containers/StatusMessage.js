import { connect } from 'react-redux'
import StatusMessage from "../components/StatusMessage";

const mapStateToProps = state => {
  return {    
    successMessage: state.auth.successMessage || state.user.successMessage,
    errorMessage: state.auth.errorMessage || state.user.errorMessage
  }
}

const mapDispatchToProps = dispatch => {
  return {}
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StatusMessage)