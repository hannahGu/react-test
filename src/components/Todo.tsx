import * as React from 'react';

export interface TodoProps{
    onClick:()=>void;
    completed:Boolean;
    text:String;
}

export const Todo = ({ onClick, completed, text }:TodoProps) => (
    <li
      onClick={onClick}
      style={{
        textDecoration: completed ? 'line-through' : 'none'
      }}
    >
      {text}
    </li>
  )

export default Todo
