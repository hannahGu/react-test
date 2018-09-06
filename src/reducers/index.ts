import { combineReducers } from 'redux'
import visibilityFilter from './visibilityFilter'
import todos from './todos'
import about from './about';
export default combineReducers({
  visibilityFilter,
  todos,
  about
})