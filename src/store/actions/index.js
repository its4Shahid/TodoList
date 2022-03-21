import { getTodos, deleteTodos, addTodos, updateTodos } from '../../store/services/TodoService';
export const getItems = (items) => {
    return {
        type: 'GET_HANDLER',
        payload: items,
    };
};
export const addItems = (items) => {
    return {
        type: 'ADD_HANDLER',
        payload: items,
    };
};
export const updateItems = (items) => {
    return {
        type: 'UPDATE_HANDLER',
        payload: items,
    };
};
export const deleteItem = (id) => {
    return {
        type: 'DELETE_HANDLER',
        payload: id,
    };
};
export const clearItem = () => {
    return {
        type: 'CLEAR_HANDLER',
        payload: [],
    };
};
const setLoading = (payload) => {
    return {
        type: 'SET_LOADING',
        payload,
    };
};

export const getAllTodos = () => async (dispatch) => {
    try {
        dispatch(setLoading(true));
        const { todos } = await getTodos();
        dispatch(getItems(todos.splice(0, 10)));
    } catch (error) {
        console.log('error', error);
    }
    dispatch(setLoading(false));
};
export const addTodosItem = (title, body, userId, id) => async (dispatch) => {
    try {
        dispatch(setLoading(true));
        const { todos } = await addTodos(title, body, userId, id);
        dispatch(addItems(todos));
    } catch (error) {
        console.log('Error:', error);
    }

    dispatch(setLoading(false));
};
export const updateTodosItem = (title, body, userId, id) => async (dispatch) => {
    try {
        dispatch(setLoading(true));
        const { todos } = await updateTodos(title, body, userId, id);
        dispatch(updateItems(todos));
    } catch (error) {
        console.log('Error:', error);
    }
    dispatch(setLoading(false));
};
export const deleteTodosItem = (id) => async (dispatch) => {
    try {
        dispatch(setLoading(true));
        const { todos } = await deleteTodos(id);
        dispatch(deleteItem(todos));
    } catch (error) {
        console.log('Error:', error);
    }
    dispatch(setLoading(false));
};
export const clearTodos = (empty) => async (dispatch) => {
    try {
        dispatch(setLoading(true));
        dispatch(clearItem(empty));
    } catch (error) {
        console.log('Error:', error);
    }
    dispatch(setLoading(false));
};
