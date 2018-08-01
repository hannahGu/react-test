import * as React from 'react';
import Footer from '../../components/Footer';
import AddTodo from '../../components/containers/AddTodo';
import VisibleTodoList from '../../components/containers/VisibleTodoList';

const Todos = ()=>(
    <div>
        <AddTodo />
        <VisibleTodoList />
        <Footer />
    </div>    
);

export default Todos ;