import React from 'react'
import { useAppSelector } from '../Redux/Hooks'
import { RootState } from '../Redux/Store'
import { Todo } from '../Redux/TodoSlice'
import { CustomTodo } from './Index'
function TodoList() {
  const { todos } = useAppSelector((state: RootState) => state.todos)
  if (todos.length === 0) {
    return (
      <div className='w-full flex justify-center items-center'>
        <p className='text-3xl font-bold text-red-700'>There is no todo to be made.</p>
      </div>
    )
  }
  else {
    return (
      <div className='w-full flex flex-col justify-center'>
        {
          todos &&
          Array.from(todos).map((todo: Todo, index: number) => (
            <CustomTodo key={todo.id} text={todo.text} index={index} id={todo.id} />
          ))
        }
      </div>
    )
  }
}

export default TodoList