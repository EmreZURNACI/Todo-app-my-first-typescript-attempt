import React, { useState } from 'react'
import edit from '../assets/Image/edit.png'
import { CustomImage } from './Index'
import { useAppDispatch } from '../Redux/Hooks'
import { editTodo } from '../Redux/TodoSlice'
import { notifyEdited, notifyErr } from '../Helpers/notifies'
interface propsType {
    id: string,
    setEditModal: Function
}
interface handleChangeProps {
    target: {
        value: string
    }
}
function EditModal({ id, setEditModal }: propsType) {
    const [text, setText] = useState<string>("")
    const dispatch = useAppDispatch();
    const handleEdit = () => {
        if (text.trim().length === 0) {
            notifyErr();
            return
        }
        dispatch(editTodo({
            id: id,
            text: text
        }))
        setEditModal(false)
        setText("")
        notifyEdited();
    }
    const handleCancel = () => {
        setEditModal(false)
    }
    const handleChange = (e: handleChangeProps) => {
        setText(e.target.value)
    }
    return (
        <div className='absolute top-0 bottom-0 left-0 bg-black bg-opacity-50 w-full z-10 flex items-center justify-center'>
            <div className="w-[calc(30%)] h-[calc(50%)] rounded-xl bg-white flex flex-col items-center justify-center gap-y-2">
                <div className='w-[calc(75%)] h-[calc(50%)] flex items-center justify-center'>
                    <CustomImage source={edit} desc={"edit"} />
                </div>
                <div className=' h-[calc(25%)] w-[calc(100%)] flex  items-center justify-center'>
                    <input type='text' id='editTodo' name='editTodo' value={text} onChange={(e) => handleChange(e)} placeholder='Enter your new editable todo...' className="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-[calc(70%)] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-orange-500 dark:focus:border-orange-500 outline-none font-medium" />
                </div>
                <div className='gap-x-2 h-[calc(25%)] w-[calc(100%)] flex  items-center justify-center'>
                    <button type="button" className="px-6 py-2 text-lg font-medium text-white bg-yellow-700 hover:bg-yellow-800 focus:ring-4 focus:outline-none focus:ring-yellow-300 rounded-lg text-center dark:bg-yellow-600 dark:hover:bg-yellow-700 dark:focus:ring-yellow-800"
                        onClick={() => handleEdit()}
                    >Submit</button>
                    <button type="button" className="px-6 py-2 text-lg font-medium text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 rounded-lg text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
                        onClick={() => handleCancel()}
                    >Cancel</button>
                </div>
            </div>
        </div>
    )
}

export default EditModal