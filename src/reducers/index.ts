import { combineReducers } from 'redux'
import visibilityFilter from './visibilityFilter'
import todos from './todos'
import count1 from './count';
export default combineReducers({
  visibilityFilter,
  todos,
  count1
})