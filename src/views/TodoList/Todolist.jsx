import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import TodoInput from '../TodoInput';
import TodoHeader from '../TodoHeader';
import TodoItem from '../TodoItems';
import TodoFooter from '../TodoFooter';
import PageLoader from '../../components/PageLoader';
import { getAllTodos, addTodosItem, updateTodosItem, deleteTodosItem, clearTodos } from '../../store/actions';
import { Grid } from '@mui/material';

function TodoList() {
    const { items: itemsList, isLoading } = useSelector((state) => state.TodoListItems);
    const dispatch = useDispatch();
    const [value, setValue] = useState('');
    const [btntitle, setbtnTitle] = useState('ADD');
    const [id, setId] = useState('');

    useEffect(() => {
        dispatch(getAllTodos());
    }, []);

    const changeHandler = (event) => {
        setValue(event.target.value);
    };

    const updatehandler = async (event) => {
        if (value !== null && value !== '') {
            try {
                dispatch(updateTodosItem(value, 'body', id, id));
                setValue('');
                setbtnTitle('ADD');
            } catch (error) {
                console.log('Error:', error);
            }
        }
    };
    const addHandler = async (event) => {
        if (value !== null && value !== '') {
            try {
                dispatch(addTodosItem(value, 'body', 1, uuidv4()));
                setValue('');
            } catch (e) {
                console.log('Error:', e);
            }
        }
    };
    const deleteTask = async (index) => {
        dispatch(deleteTodosItem(index));
    };
    const clearHandler = () => {
        dispatch(clearTodos([]));
    };

    const updateTask = (listid) => {
        const selectedItems = itemsList.find((item) => item.id === listid);
        setValue(selectedItems.title);
        setbtnTitle('Update');
        setId(listid);
    };

    return (
        <div className="main-div">
            <Grid container justifyContent="center" rowSpacing={1}>
                <Grid item xs={12}>
                    <TodoHeader headerTitle="Todo List" />
                </Grid>
                <Grid item xs={11}>
                    <TodoInput
                        InputVal={value}
                        inputChangeHandler={changeHandler}
                        buttonTitle={btntitle}
                        onClickHandler={btntitle === 'ADD' ? addHandler : updatehandler}
                    />
                </Grid>
                <Grid item xs={11}>
                    {isLoading && <PageLoader />}
                    <TodoItem deleteItem={deleteTask} updateItem={updateTask} todoItems={itemsList} />
                </Grid>
                <Grid item xs={11}>
                    <TodoFooter todoClearHandler={clearHandler} />
                </Grid>
            </Grid>
        </div>
    );
}

export default TodoList;
