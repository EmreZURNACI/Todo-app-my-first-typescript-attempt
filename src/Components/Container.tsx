import React from 'react'
import { AddTodo, TodoList } from "./Index"
function Container() {
  return (
    <div className='flex flex-col justify-center items-center w-[calc(60%)] mx-auto'>
      <AddTodo />
      <TodoList />
    </div>
  )
}

export default Container