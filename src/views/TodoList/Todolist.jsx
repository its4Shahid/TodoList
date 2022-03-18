import React, { useEffect, useState } from 'react';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import TodoInput from '../TodoInput';
import axios from 'axios';
import TodoHeader from '../TodoHeader';
import TodoItem from '../TodoItems';
import TodoFooter from '../TodoFooter';
import PageLoader from '../../components/PageLoader';

function TodoList() {
    const [value, setValue] = useState('');
    const [items, setItems] = useState([]);
    const [btntitle, setbtnTitle] = useState('ADD');
    const [id, setId] = useState('');
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        axios.get('https://jsonplaceholder.typicode.com/posts/').then((response) => {
            const result = response.data;
            setLoading(false);
            setItems(result.slice(0, 10));
        });
    }, []);
    const changeHandler = (event) => {
        setValue(event.target.value);
    };

    const addHandler = (event) => {
        setLoading(true);
        if (btntitle === 'Update') {
            if (value !== null && value !== '') {
                fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
                    method: 'PUT',
                    body: JSON.stringify({
                        id,
                        title: value,
                        body: 'bar',
                        userId: 1,
                    }),
                    headers: {
                        'Content-type': 'application/json; charset=UTF-8',
                    },
                })
                    .then((response) => response.json())
                    .then((response) => {
                        setLoading(false);
                        const result = (items) => items.id === id;
                        const index = items.findIndex(result);
                        items.splice(index, 1, response);
                        setItems(items);
                        setValue('');
                        setbtnTitle('ADD');
                    });
            }
        } else {
            if (value !== null && value !== '') {
                fetch('https://jsonplaceholder.typicode.com/posts', {
                    method: 'POST',
                    body: JSON.stringify({
                        title: value,
                        body: 'bar',
                        userId: 1,
                        id: Math.random(),
                    }),
                    headers: {
                        'Content-type': 'application/json; charset=UTF-8',
                    },
                })
                    .then((response) => response.json())
                    .then((response) => {
                        setLoading(false);
                        setItems([...items, response]);
                        setValue('');
                    });
            } else {
                alert('Empty');
            }
        }
    };
    const deleteTask = (index) => {
        let deleteItem = items.filter((item) => item.id !== index);
        setItems(deleteItem);
    };
    const clearHandler = () => {
        setItems([]);
    };

    const updateTask = (listid) => {
        const selectedItems = items.find((item) => item.id === listid);
        setValue(selectedItems.title);
        setbtnTitle('Update');
        setId(listid);
    };

    return (
        <div className="main-div">
            <div className="main-child">
                <div className="heading">
                    <TodoHeader headerTitle="Todo List" />
                </div>
                <div className="control-div">
                    <TodoInput
                        InputVal={value}
                        inputChangeHandler={changeHandler}
                        buttonTitle={btntitle}
                        onClickHandler={addHandler}
                    />
                </div>
                <div className="list">
                    {loading ? (
                        <PageLoader />
                    ) : (
                        <TodoItem deleteItem={deleteTask} updateItem={updateTask} todoItems={items} />
                    )}
                </div>
                <div className="todoFooter">
                    <TodoFooter todoClearHandler={clearHandler} />
                </div>
            </div>
        </div>
    );
}

export default TodoList;
