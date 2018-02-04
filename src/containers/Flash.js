import { connect } from 'react-redux'
import Flash from "../components/Flash";
import { hideFlash } from '../actions/Ui'

const mapStateToProps = state => {
  return {    
    flashMessage: state.ui.flashMessage,
    flashType: state.ui.flashType,
    showFlash: state.ui.showFlash
  }
}

const mapDispatchToProps = dispatch => {
  return {
    hideFlash: () => {
      dispatch(hideFlash())
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Flash)