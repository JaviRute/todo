import React, { useState } from "react";
import { useDispatch } from 'react-redux';
import { addTodo } from "../store/todoSlice";

//This component will add a new todo
const AddTodoForm = () => {
    //Some state to get hold of the value of the input
    const [value, setValue] = useState("");

    // dispatch hook from react-redux to dispatch actions
    const dispatch = useDispatch();

    // submit event handler for the form
    const onSubmit = (event) => {
        event.preventDefault();
        dispatch(
            addTodo({
                title: value,
            })
        );
        setValue("");
    };

    return (
        // render form with input field and submit button
        <form onSubmit={onSubmit} className="form-inline">
            <label className="sr-only">Name</label>
            <input
                type="text"
                className="form-control mb-2 mr-sm-2"
                placeholder="Add todo..."
                value={value}
                onChange={(event) => setValue(event.target.value)}>
            </input>

            <button type="submit" className="btn btn-primary mb-2">Submit</button>
        </form>
    );
};

export default AddTodoForm;