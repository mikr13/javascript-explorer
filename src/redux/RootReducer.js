import { combineReducers } from "redux"
import ui from "./UiReducer"
import array from './ds/ArrayReducer'
import object from './ds/ObjectReducer'
import string from './ds/StringReducer'

const rootReducer = combineReducers({
  ui,
  array,
  object,
  string
})

export default rootReducer
