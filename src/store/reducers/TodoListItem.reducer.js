import {
    ADD_HANDLER_REQUEST,
    ADD_HANDLER_SUCCESS,
    DELETE_HANDLER_REQUEST,
    DELETE_HANDLER_SUCCESS,
    SET_HANDLER_REQUEST,
    SET_HANDLER_SUCCESS,
    updateItemsSuccess,
    UPDATE_HANDLER_REQUEST,
    UPDATE_HANDLER_SUCCESS,
} from '../actions/index';
const intialValue = {
    items: [],
    isLoading: false,
};

export const TodoListItems = (state = intialValue, { type, payload }) => {
    switch (type) {
        case SET_HANDLER_REQUEST:
            return { ...state, isLoading: true };
        case SET_HANDLER_SUCCESS:
            return { ...state, items: payload, isLoading: false };
        case ADD_HANDLER_REQUEST:
            return { ...state, items: [payload, ...state.items] };
        case ADD_HANDLER_SUCCESS:
            return { ...state, items: [...state.items] };
        case UPDATE_HANDLER_REQUEST:
            const arrItems = state.items;
            const index = arrItems.findIndex((item) => item.id === payload.id);
            arrItems.splice(index, 1, payload);
            return { ...state, items: arrItems };
        case UPDATE_HANDLER_SUCCESS:
            return { ...state, items: [...state.items] };
        case DELETE_HANDLER_REQUEST:
            const arr2Items = state.items;
            const arr = arr2Items.filter((item) => item.id !== payload);

            return { ...state, items: arr };
        case DELETE_HANDLER_SUCCESS:
            return { ...state, items: [...state.items] };
        case 'CLEAR_HANDLER':
            return { ...state, items: payload };
        case 'SET_LOADING':
            return { ...state, isLoading: payload };
        default:
            return state;
    }
};
