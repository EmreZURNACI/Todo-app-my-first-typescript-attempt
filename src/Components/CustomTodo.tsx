import React, { useState } from 'react'
import { MdDelete, MdEditSquare } from "react-icons/md";
import { DeleteModal, EditModal } from './Index'
interface propsTypes {
    index: number,
    text: string,
    id: string
}
function CustomTodo({ index, text, id }: propsTypes) {
    const [isDeleteModal, setDeleteModal] = useState(false)
    const [isEditModal, setEditModal] = useState(false)

    return (
        <div className='flex items-center justify-between pt-2 px-2 border-b border-gray-300 mb-1'>
            <div className='flex items-center'>
                <span className='font-normal text-xl'>{index + 1}.</span>
                <span>&nbsp;</span>
                <p className='text-xl font-medium'>{text}</p>
            </div>
            <div className='flex gap-x-2'>
                <button type='button' onClick={() => setEditModal(true)}><MdEditSquare className='text-3xl font-bold text-yellow-600' /></button>
                <button type='button' onClick={() => setDeleteModal(true)}><MdDelete className='text-3xl font-bold text-red-600' /></button>
            </div>
            {
                isDeleteModal ?
                    <DeleteModal id={id} setDeleteModal={setDeleteModal} /> : null
            }
            {
                isEditModal ?
                    <EditModal id={id} setEditModal={setEditModal} /> : null
            }
        </div>
    )
}

export default CustomTodo