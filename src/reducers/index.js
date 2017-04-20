import { combineReducers } from 'redux'
import configDialog from './configDialog'
import content from './content'
import menus from './menus'

const myApp = combineReducers({
  configDialog,
  content,
  menus
});

export default myApp
