import React from 'react';
import TodoInput from '../TodoInput';
import axios from 'axios';
import TodoHeader from '../TodoHeader';
import TodoItem from '../TodoItems';
import TodoFooter from '../TodoFooter';

class TodoList extends React.Component {
    constructor(props) {
        super();
        this.state = {
            id: '',
            value: '',
            items: [],
            selectedItem: '',
            duplicateItems: [],
            btntitle: 'ADD',
        };
        this.changeHandler = this.changeHandler.bind(this);
        this.addHandler = this.addHandler.bind(this);
        this.deleteTask = this.deleteTask.bind(this);
        this.clearHandler = this.clearHandler.bind(this);
        this.updateTask = this.updateTask.bind(this);
    }
    componentDidMount() {
        axios
            .get('https://jsonplaceholder.typicode.com/posts/')
            // .then((response) => response.json())
            .then((response) => {
                const result = response.data;
                this.setState({
                    items: result.slice(0, 10),
                });
            });
    }

    changeHandler(event) {
        this.setState({ value: event.target.value });
    }

    addHandler(event) {
        event.preventDefault();
        const { items, value, id, btntitle } = this.state;
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
                        const result = (items) => items.id === id;
                        const index = items.findIndex(result);
                        items.splice(index, 1, response);
                        this.setState({
                            items: [...items],
                            value: '',
                            btntitle: 'ADD',
                        });
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
                    .then((response) =>
                        this.setState({
                            items: [...items, response],
                            duplicateItems: [...items, response],
                            value: '',
                        }),
                    );
            } else {
                alert('Empty');
            }
        }
    }
    deleteTask(index) {
        const { items } = this.state;
        let deleteItem = items.filter((item) => item.id !== index);
        this.setState({
            items: deleteItem,
        });
    }
    clearHandler() {
        this.setState({
            items: [],
        });
    }

    updateTask(listid) {
        const { items } = this.state;
        const selectedItems = items.find((item) => item.id === listid);

        this.setState({
            id: listid,
            value: selectedItems.title,
            btntitle: 'Update',
        });
    }

    render() {
        const { items, value, btntitle } = this.state;

        return (
            <div className="main-div">
                <div className="main-child">
                    <div className="heading">
                        <TodoHeader headerTitle="Todo List" />
                    </div>
                    <div className="control-div">
                        <TodoInput
                            InputVal={value}
                            inputChangeHandler={this.changeHandler}
                            buttonTitle={btntitle}
                            onClickHandler={this.addHandler}
                        />
                    </div>
                    <div className="list">
                        <TodoItem deleteItem={this.deleteTask} updateItem={this.updateTask} todoItems={items} />
                    </div>
                    <div className="todoFooter">
                        <TodoFooter todoClearHandler={this.clearHandler} />
                    </div>
                </div>
            </div>
        );
    }
}

export default TodoList;
