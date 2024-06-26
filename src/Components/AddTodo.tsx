import React, { FormEvent, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../Redux/Hooks'
import { addTodo } from '../Redux/TodoSlice';
import { notifyErr, notifySuccess, notifyErrAllTodos } from '../Helpers/notifies';
import { DeleteAllModal } from './Index';
import { RootState } from '../Redux/Store';
interface OnChangeType {
  target: {
    value: string
  }
}
function AddTodo() {
  const { todos } = useAppSelector((state: RootState) => state.todos)
  const [content, setContent] = useState<string>("")
  const [deleteAllModal, setDeleteAllModal] = useState<boolean>(false)
  const dispatch = useAppDispatch();
  const handleChange = (e: OnChangeType) => {
    setContent(e.target.value)
  }
  const handleOnClick = () => {
    if (content.trim().length === 0) {
      notifyErr();
      return
    }
    const id: string = `${Math.floor(Math.random() * 999999)}`;
    dispatch(addTodo({
      id: id,
      text: content
    }))
    setContent("")
    notifySuccess();
  }
  const handleCheckDeleteAllTodos = () => {
    if (todos.length === 0) {
      notifyErrAllTodos();
      return
    }
    setDeleteAllModal(true)
  }

  return (
    <>
      <form onSubmit={(e: FormEvent) => { e.preventDefault() }} className='w-full'>
        <div className="mb-2 w-full">
          <label htmlFor="todoText" className="block mb-2 text-xl font-bold text-gray-900 dark:text-white">Add Todo:</label>
          <input type="text" id="todoText" name='todoText' className="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 outline-none font-medium" placeholder='Enter your new todo...'
            onChange={(e) => handleChange(e)} value={content} autoFocus={true}
          />
        </div>
        <div className='flex justify-end items-center w-full'>
          <button type="submit" id='addTodo' name='addTodo' className="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
            onClick={() => handleOnClick()}>Add Todo</button>
          <button type="button" id='deleteTodos' name='deleteTodos' className="text-white bg-gradient-to-br from-red-400 to-orange-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-200 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
            onClick={() => handleCheckDeleteAllTodos()}>Delete All</button>
        </div>
      </form>
      {
        deleteAllModal ?
          <DeleteAllModal setDeleteAllModal={setDeleteAllModal} /> : null
      }
    </>
  )
}

export default AddTodo