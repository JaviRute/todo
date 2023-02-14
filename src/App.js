//Some imports, including several react elements
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';
import './App.css';

function App() {
  //We return the bootstrap container (which will be a card) with a <h1>, the form to create new todos, and the todo-list 
  return (
    <div className='container pt-3'>
      <div className="card">
        <h1 className='card-header p3'>Javierski's Todo List</h1>
        <AddTodo />
        <TodoList />
      </div>
    </div>
  );
}

export default App;
