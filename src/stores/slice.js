import { createSlice } from '@reduxjs/toolkit'

export const todosSlice = createSlice({
    name: 'xtodos',
    initialState: {
        currentFilter: "All",
        todos: [{ text: "text11", completed: true },
        { text: "text2", completed: false },
        { text: "text3", completed: false }
        ],
        value: ""
    },
    reducers: {
        addTodo: (state, newText) => {
            state.todos.push({ text: newText.payload, completed: false });
        },
        markTodo: (state, index) => {
            state.todos[index.payload].completed = true;
        },
        toogleTodo: (state, index) => {
            state.todos[index.payload].completed = !state.todos[index.payload].completed;
        },
        removeTodo: (state, index) => {
            state.todos.splice(index, 1);
        },
        setCurrentFilter: (state, filterName) => {
            state.currentFilter = filterName.payload;
        },
        setValue: (state, value) => {
            state.value = value.payload;
        },

    },
})

// Action creators are generated for each case reducer function
export const { addTodo, markTodo, toogleTodo, removeTodo, setCurrentFilter, setValue } = todosSlice.actions

export default todosSlice.reducer