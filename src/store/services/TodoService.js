import axios from 'axios';

export const getTodos = async () => {
    const { data } = await axios.get('https://jsonplaceholder.typicode.com/posts/');
    return { todos: data };
};
export const addTodos = async (title, body, userId, id) => {
    const { data } = await axios.post(
        'https://jsonplaceholder.typicode.com/posts/',
        {
            title,
            body,
            userId,
            id,
        },
        {
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        },
    );
    return { todos: data };
};
export const updateTodos = async (title, body, userId, id) => {
    const { data } = await axios.put(
        `https://jsonplaceholder.typicode.com/posts/${id}`,
        {
            title,
            body,
            userId,
            id: 1,
        },
        {
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        },
    );

    return { todos: data };
};
export const deleteTodos = async (id) => {
    return { todos: id };
};
export const clearTodos = async (arrEmpty) => {
    return { todos: arrEmpty };
};
