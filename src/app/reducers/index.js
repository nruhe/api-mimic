import { combineReducers } from 'redux'
import { defaultSettings } from '../defaults'

const settings = (state = defaultSettings(), action) => {
  switch (action.type) {
    case 'PATCH':
      return Object.assign({}, state, action.settings)
    default:
      return state
  }
}

const reducers = combineReducers({
  settings
})

export default reducers
