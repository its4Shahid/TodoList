import { getTodos, deleteTodos, addTodos, updateTodos } from '../services/todoService';

export const SET_HANDLER_REQUEST = 'GET_HANDLER';
export const SET_HANDLER_SUCCESS = 'SET_HANDLER';
export const ADD_HANDLER_REQUEST = 'ADD_HANDLER_REQUEST';
export const ADD_HANDLER_SUCCESS = 'ADD_HANDLER_SUCCESS';
export const UPDATE_HANDLER_REQUEST = 'UPDATE_HANDLER_REQUEST';
export const UPDATE_HANDLER_SUCCESS = 'UPDATE_HANDLER_SUCCESS';
export const DELETE_HANDLER_REQUEST = 'DELETE_HANDLER_REQUEST';
export const DELETE_HANDLER_SUCCESS = 'DELETE_HANDLER_SUCCESS';
export const CLEAR_HANDLER_REQUEST = 'CLEAR_HANDLER_REQUEST';
export const CLEAR_HANDLER_SUCCESS = 'CLEAR_HANDLER_SUCCESS';

export const setItemsRequest = () => {
    return {
        type: SET_HANDLER_REQUEST,
    };
};
export const setItemsSuccess = (items) => {
    return {
        type: SET_HANDLER_SUCCESS,
        payload: items,
    };
};
export const addItemsRequest = (title, body, userId, id) => {
    return {
        type: ADD_HANDLER_REQUEST,
        payload: { title, body, userId, id },
    };
};
export const addItemsSuccess = () => {
    return {
        type: ADD_HANDLER_SUCCESS,
    };
};

export const updateItemsRequest = (title, body, userId, id) => {
    return {
        type: UPDATE_HANDLER_REQUEST,
        payload: { title, body, userId, id },
    };
};
export const updateItemsSuccess = () => {
    return {
        type: UPDATE_HANDLER_SUCCESS,
    };
};
export const deleteItemRequest = (id) => {
    return {
        type: DELETE_HANDLER_REQUEST,
        payload: id,
    };
};
export const deleteItemSuccess = () => {
    return {
        type: DELETE_HANDLER_SUCCESS,
    };
};
export const clearItemRequest = () => {
    return {
        type: 'CLEAR_HANDLER',
        payload: [],
    };
};
export const clearItemSuccess = () => {
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
