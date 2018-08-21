import * as React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { addTodo } from '../../actions/todos'

const mapDispatchToProps = (dispatch:Dispatch) => ({
  addTodo: (t:String) => dispatch(addTodo(t))
})

const AddTodo = ({addTodo}:any) => {
    console.log('60',addTodo);
    return (
      <div>
        <form onSubmit={(e:any)=>{
          addTodo(e.target.children[0]['value']);
          e.target.children[0]['value'] = '';
        }}>
          <input />
          <button type="submit">
            Add Todoxs9
          </button>
        </form>
      </div>
    )
  }
  
export default connect(null,mapDispatchToProps)(AddTodo)
