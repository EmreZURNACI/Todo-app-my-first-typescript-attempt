import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface Todo {
    id: string,
    text: string
}
export interface Todos {
    todos: Array<Todo>
}

const initialState: Todos = {
    todos: []
}

export const todosSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addTodo: (state: Todos, action: PayloadAction<Todo>) => {
            state.todos = [...state.todos, action.payload]
        },
        deleteTodo: (state: Todos, action: PayloadAction<string>) => {
            const filteredTodo = state.todos.filter((todo) => {
                return todo.id !== action.payload
            })
            state.todos = filteredTodo
        },
        editTodo: (state: Todos, action: PayloadAction<Todo>) => {
            state.todos.forEach((todo) => {
                if (todo.id === action.payload.id) {
                    todo.text = action.payload.text
                }
            })
        },
        deleteAllTodos: (state: Todos) => {
            state.todos = []
        }
    },
})

export const { addTodo, deleteTodo, editTodo, deleteAllTodos } = todosSlice.actions

export default todosSlice.reducer