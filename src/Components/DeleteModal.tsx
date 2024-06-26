import React from 'react'
import alert from '../assets/Image/danger.png'
import { useAppDispatch } from '../Redux/Hooks';
import { deleteTodo } from '../Redux/TodoSlice';
import { CustomImage } from './Index'
import { notifyDeleted } from '../Helpers/notifies';
interface propsType {
    id: string,
    setDeleteModal: Function
}
function DeleteModal({ id, setDeleteModal }: propsType) {
    const dispatch = useAppDispatch();
    const handleDelete = () => {
        dispatch(deleteTodo(id))
        setDeleteModal(false)
        notifyDeleted();
    }
    const handleRefuse = () => {
        setDeleteModal(false)
    }
    return (
        <div className='absolute top-0 bottom-0 left-0 bg-black bg-opacity-50 w-full z-10 flex items-center justify-center'>
            <div className="w-[calc(30%)] h-[calc(50%)] rounded-xl bg-white flex flex-col items-center justify-center gap-y-2">
                <CustomImage source={alert} desc={"alert"} />
                <div className=' h-[calc(15%)] w-[calc(100%)] flex  items-center justify-center'>
                    <p className='text-red-500 text-xl font-bold'>Are you sure you want to delete this todo?</p>
                </div>
                <div className='gap-x-2 h-[calc(25%)] w-[calc(100%)] flex  items-center justify-center'>
                    <button type="button" className="px-6 py-2 text-lg font-medium text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 rounded-lg text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                        onClick={() => handleDelete()}
                    >Yes</button>
                    <button type="button" className="px-6 py-2 text-lg font-medium text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 rounded-lg text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
                        onClick={() => handleRefuse()}
                    >No</button>
                </div>
            </div>
        </div>
    )
}

export default DeleteModal