//some imports
import React from "react";
import { useDispatch } from "react-redux";
import { toggleComplete, deleteTodo, updateTodo } from "../store/todoSlice";
import { useState } from "react";

//We create our react function
const TodoItem = ({ id, title, completed }) => {
    //This state will get hold of whatever the user enters in the input to update the name of the todo
    const [updateInput, setUpdateInput] = useState("");
    //And we will need dispatch in our actions
    const dispatch = useDispatch();

    //If the user clicks on the 'complete' button, we will change the todo value of 'completed' to its opposite
    const handleCompleteClick = () => {
        dispatch(toggleComplete({id: id, completed: !completed }))
    }

    //If the user clicks on the 'delete' button we get hold of its id and pass the right reducer
    const handleDeleteClick = () => {
        dispatch(deleteTodo({ id: id }));
    }

    //And this is the reducer to update the name of the todo
    const submitUpdate = (event) => {
        //We need preventDefault
        event.preventDefault();
        //We get hold of the id of the todo and change its name to the user input
        dispatch(updateTodo({id: id, title: updateInput}));
        //and we delete the value of the input afterwards
        setUpdateInput("");
    }



    return (
        //There are some bootstrap classes over here for the layout of the todos list
        <li id="todos-list" className={`list-group-item ${completed && 'list-group-item-danger'} d-flex justify-content-between`}>

            {/* There are also some ids to control the responsiveness on small screens */}
            {/* and two icons from fontawesome */}
            <div id="todo-item">
                <button onClick={handleDeleteClick} className="btn btn-danger"><i class="fa-solid fa-trash"></i></button>
                    <input 
                        type="checkbox" 
                        className="ms-3 me-3" 
                        checked={completed}
                        onChange={handleCompleteClick}
                        ></input>
                    <label className="">{title}</label>
            </div>

            <div>
                <form onSubmit={submitUpdate} className="form-inline d-flex flex-nowrap">              
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Update..."
                            onChange={(event) => setUpdateInput(event.target.value)}
                            value={updateInput}>
                        </input>

                        <button type="submit" className="btn btn-dark"><i class="fa-solid fa-pen"></i></button>
                </form>
            </div>             
        </li>
    );
};

export default TodoItem;