/* START SOLUTION */
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

/* ELSE
//This container should map the required items from state and
//imported actions to the Flash component. The Flash component is
//responsible for displaying messages attached to the result of an action.
// Consider what data you may want from state to display the flash message properly.
import { connect } from 'react-redux'
import Flash from "../components/Flash";

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
)(Flash)
END SOLUTION */