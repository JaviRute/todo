import { createSlice } from '@reduxjs/toolkit';

const todoSlice = createSlice({
    name: "todos",
    initialState: [
        //I entered some todos to show something right from the start
        { id: 1, title: "Content 1", completed: false },
    ],
    //here we have 4 reducers
    reducers: {
        //the first one will create the new todos
        addTodo: (state, action) => {
            const newTodo = {
                //We give these the date as an id, to make sure it is unique
                id: Date.now(),
                //they will receive their title from the payload (a user input)
                title: action.payload.title,
                //they all will start with the field 'completed' as false
                completed: false
            };
            //Once complete, the todo us pushed to our state
            state.push(newTodo);
        },
        //this will toggle the key 'completed' from true to false or viceversa
        toggleComplete: (state, action) => {
            //We want to find the index of the todo first of all
            const index = state.findIndex(
                (todo) => todo.id === action.payload.id
            );
            //then we set the value 'completed' to whatever the payload says (in this case, it will be the opposite of its original value)
            state[index].completed = action.payload.completed;
        },
        //this reducer will delete our todos
        deleteTodo: (state, action) => {
            //it will return the list of todos in our state, except for the one we click on
            return state.filter((todo) => todo.id !== action.payload.id);
        },
        //this will serve us to update the name of the todo
        updateTodo: (state, action) => {
            //we find its index
            const index = state.findIndex(
                (todo) => todo.id === action.payload.id
            );
            //and we change its name to whatever the payload has on it (this will be a user input)
            state[index].title = action.payload.title;
            // delete input box
            
        },
    },
});

//we export all our actions
export const { addTodo, toggleComplete, deleteTodo, updateTodo } = todoSlice.actions;

//and we export our reducer
export default todoSlice.reducer; 