import { connect } from 'react-redux'
import StatusMessage from "../components/StatusMessage";

const mapStateToProps = state => {
  return {    
    successMessage: state.default.successMessage,
    errorMessage: state.default.errorMessage
  }
}

const mapDispatchToProps = dispatch => {
  return {}
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StatusMessage)