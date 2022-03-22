import { call, put } from 'redux-saga/effects';
import { getTodos, addTodos, updateTodos } from '../../services/todoService';
import {
    addItemsSuccess,
    clearItemSuccess,
    deleteItemSuccess,
    setItemsSuccess,
    updateItemsSuccess,
} from '../../actions/index';

export function* handleGetTodos(aciton) {
    try {
        const response = yield call(getTodos);
        const { data } = response;
        yield put(setItemsSuccess(data.slice(0, 10)));
    } catch (error) {
        console.log('error:', error);
    }
}
export function* handleAddTodos({ payload }) {
    try {
        const response = yield call(addTodos, payload);
        const { data } = response;
        yield put(addItemsSuccess(data));
    } catch (error) {
        console.log('error:', error);
    }
}
export function* handleUpdateTodos({ payload }) {
    try {
        const response = yield call(updateTodos, payload);
        const { data } = response;
        yield put(updateItemsSuccess(data));
    } catch (error) {
        console.log('error:', error);
    }
}
export function* handleDeleteTodos({ payload }) {
    try {
        yield put(deleteItemSuccess());
    } catch (error) {
        console.log('error:', error);
    }
}
export function* handleClearTodos() {
    try {
        yield put(clearItemSuccess());
    } catch (error) {
        console.log('error', error);
    }
}
