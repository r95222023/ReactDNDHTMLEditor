import { combineReducers } from 'redux'
import configDialog from './configDialog'
import content from './content'

const myApp = combineReducers({
  configDialog,
  content
});

export default myApp
