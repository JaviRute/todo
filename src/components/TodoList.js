//some imports
import React from "react";
import TodoItem from './TodoItem';
import { useSelector } from "react-redux";

//we create our React function

const TodoList = () => {
    
    //We get hold of the todos from the state with useSelector
    const todos = useSelector((state) => state.todos);

    //We return a list item (inside a bootstrap card footer) with all todos listed
    return (
        <div className="card-footer">
            <ul className="container">
                {/* Here we map through the state and create all of the todos */}
                {todos.map((todo) => (
                    <TodoItem id={todo.id} title={todo.title} completed={todo.completed} />
                    ))}
            </ul>
        </div>
    )
}

export default TodoList; 