const intialValue = {
    items: [],
    isLoading: false,
};

export const TodoListItems = (state = intialValue, { type, payload }) => {
    switch (type) {
        case 'GET_HANDLER':
            return { ...state, items: payload };
        case 'ADD_HANDLER':
            return { ...state, items: [payload, ...state.items] };
        case 'UPDATE_HANDLER':
            const arrItems = state.items;
            const index = arrItems.findIndex((item) => item.id === payload.id);
            arrItems.splice(index, 1, payload);
            return { ...state, items: arrItems };
        case 'DELETE_HANDLER':
            const arr2Items = state.items;
            const arr = arr2Items.filter((item) => item.id !== payload);
            console.log(arr);
            return { ...state, items: arr };
        case 'CLEAR_HANDLER':
            return { ...state, items: payload };
        case 'SET_LOADING':
            return { ...state, isLoading: payload };
        default:
            return state;
    }
};
