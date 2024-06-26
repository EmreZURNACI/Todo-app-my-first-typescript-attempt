import toast from 'react-hot-toast';

export const notifyErr = (): string =>
    toast.error('Text entry cannot be empty!');
export const notifyErrAllTodos = (): string =>
    toast.error('There are no todo to delete anyway.');
export const notifySuccess = (): string =>
    toast.success('Todo added successfully.');
export const notifyAllTodosSuccess = (): string =>
    toast.success('All todos deleted successfully.');
export const notifyEdited = (): string =>
    toast.success('Todo edited successfully.');
export const notifyDeleted = (): string =>
    toast.success('Todo deleted successfully.');
