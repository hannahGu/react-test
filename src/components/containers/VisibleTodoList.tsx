import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { toggleTodo,VisibilityFilters } from '../../actions/todos'
import TodoList from '../TodoList'

const getVisibleTodos = (todos:any, filter:String) => {
    switch (filter) {
      case VisibilityFilters.SHOW_ALL:
        return todos
      case VisibilityFilters.SHOW_COMPLETED:
        return todos.filter((t:any) => t.completed)
      case VisibilityFilters.SHOW_ACTIVE:
        return todos.filter((t:any) => !t.completed)
      default:
        throw new Error('Unknown filter: ' + filter)
    }
  }

const mapStateToProps = (state:any) => ({
  todos: getVisibleTodos(state.todos,state.visibilityFilter)
})

const mapDispatchToProps = (dispatch:Dispatch) => ({
    toggleTodo: (id:string) => dispatch(toggleTodo(id))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)
