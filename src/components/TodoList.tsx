import * as React from 'react';
import {Todo,TodoProps} from './Todo';
interface TodoListProps{
    toggleTodo:(id:string)=>void;
    todos:any;
}

const TodoList = ({ todos, toggleTodo }:TodoListProps) => (
    <ul>
      {todos.map((todo:any) =>
        <Todo
          key={todo.id}
          {...todo}
          onClick={() => toggleTodo(todo.id)}
        />
      )}
    </ul>
  )

export default TodoList
