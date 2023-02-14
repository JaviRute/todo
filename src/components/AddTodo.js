//We make some imports
import React, { useState } from "react";
import { useDispatch } from 'react-redux';
import { addTodo } from "../store/todoSlice";

const AddTodo = () => {
    //Some state to get hold of the value of the user input
    const [value, setValue] = useState("");

    //We will need dispatch on our action
    const dispatch = useDispatch();
    //When the user submits the form we will save this value
    const onSubmit = (event) => {
        event.preventDefault();
        dispatch(
            //We will pass the value entered by the user to create a new Todo
            addTodo({
                title: value,
            })
        );
        //and we set the value of the input to an empty string
        setValue("");
    };

    return (
        //Some bootstrap classes were used here to improve the looks of the form
        <div>
            <form onSubmit={onSubmit} className="input-group p-3 ">
                <div className="form-floating">
                    <input
                        type="text"
                        id="todo-input"
                        className="form-control"
                        placeholder="Add todo..."
                        value={value}
                        onChange={(event) => setValue(event.target.value)}>
                    </input>
                    <label for="todo-input">Add todo...</label>
                </div>
                <button  type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    );
};
//and we import our react function
export default AddTodo;