import { connect } from 'react-redux'
import { patchSettings } from '../actions'
import SettingsForm from '../components/SettingsForm'

const mapStateToProps = (state) => {
  return {
    data: state.settings
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    update: (event) => {
      dispatch(patchSettings({[event.target.name]: event.target.value}))
    },
    toggle: (event) => {
      dispatch(patchSettings({[event.target.name]: event.target.checked}))
    }
  }
}

const Settings = connect(
  mapStateToProps,
  mapDispatchToProps
)(SettingsForm)

export default Settings
