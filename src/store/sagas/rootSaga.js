import { takeLatest } from 'redux-saga/effects';
import {
    handleGetTodos,
    handleAddTodos,
    handleUpdateTodos,
    handleDeleteTodos,
    handleClearTodos,
} from './handler/handleRequest';
import {
    ADD_HANDLER_REQUEST,
    CLEAR_HANDLER_REQUEST,
    DELETE_HANDLER_REQUEST,
    SET_HANDLER_REQUEST,
    UPDATE_HANDLER_REQUEST,
} from '../actions/index';

export function* watcherSaga() {
    yield takeLatest(SET_HANDLER_REQUEST, handleGetTodos);
    yield takeLatest(ADD_HANDLER_REQUEST, handleAddTodos);
    yield takeLatest(UPDATE_HANDLER_REQUEST, handleUpdateTodos);
    yield takeLatest(DELETE_HANDLER_REQUEST, handleDeleteTodos);
    yield takeLatest(CLEAR_HANDLER_REQUEST, handleClearTodos);
}
