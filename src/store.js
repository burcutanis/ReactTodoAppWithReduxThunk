import { configureStore } from '@reduxjs/toolkit'
import todosReducer from './stores/slice'


export default configureStore({
    reducer: {
        xtodo: todosReducer
    },
})

