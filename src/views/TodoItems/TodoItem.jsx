import React from 'react';
import List from '../../components/List';

class TodoItem extends React.Component {
    render() {
        const { deleteItem, updateItem, todoItems } = this.props;
        return <List deleteTask={deleteItem} updateTask={updateItem} items={todoItems} />;
    }
}

export default TodoItem;
