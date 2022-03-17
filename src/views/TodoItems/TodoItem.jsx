import React from 'react';
import List from '../../components/List';

function TodoItem(props) {
    const { deleteItem, updateItem, todoItems } = props;
    return <List deleteTask={deleteItem} updateTask={updateItem} items={todoItems} />;
}

export default TodoItem;
