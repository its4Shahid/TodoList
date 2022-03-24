import axios from 'axios';

export const getTodos = () => {
    return axios.request({
        method: 'get',
        url: 'https://jsonplaceholder.typicode.com/posts/',
    });
};

export const addTodos = ({ title, body, userId, id }) => {
    return axios.request({
        method: 'post',
        url: 'https://jsonplaceholder.typicode.com/posts/',
        data: { title, body, userId, id },
    });
};
export const updateTodos = ({ title, body, userId, id }) => {
    return axios.request({
        method: 'put',
        url: `https://jsonplaceholder.typicode.com/posts/${id}`,
        data: {
            title,
            body,
            userId,
            id,
        },
    });
};
// export const deleteTodos = async (id) => {
//     return { todos: id };
// };
export const clearTodos = async (arrEmpty) => {
    return { todos: arrEmpty };
};
