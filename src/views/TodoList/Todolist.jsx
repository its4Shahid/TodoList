import React from 'react';
import Button from '../../components/Button';
import TextField from '../../components/TextBox';
import List from '../../components/List';
import { ContactSupportTwoTone, UsbOutlined } from '@material-ui/icons';
import axios from 'axios';

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
        this.displayHandler = this.displayHandler.bind(this);
        this.updateTask = this.updateTask.bind(this);
    }
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/posts/')
            .then((response) => response.json())
            .then((json) =>
                this.setState({
                    items: [...json].slice(0, 10),
                }),
            );
    }

    changeHandler(event) {
        this.setState({ value: event.target.value });
    }

    addHandler(event) {
        event.preventDefault();
        const { items, value, duplicateItems, id, btntitle } = this.state;
        if (btntitle === 'Update') {
            // const result = (items) => items.id === id;
            // const index = data.findIndex(result);
            // items.splice(index, 1, { id: id, title: value, body: 'body', userId: value });
            // console.log(...items);
            // this.setState({
            //     id: '',
            //     value: '',
            //     items: [...items, value],
            //     btntitle: 'ADD',
            // });
            if (value !== null && value !== '') {
                fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
                    method: 'PUT',
                    body: JSON.stringify({
                        id: id,
                        title: value,
                        body: 'bar',
                        userId: 1,
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
            }
        } else {
            if (value !== null && value !== '') {
                fetch('https://jsonplaceholder.typicode.com/posts', {
                    method: 'POST',
                    body: JSON.stringify({
                        title: 'foo',
                        body: 'bar',
                        userId: 1,
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
        const { items } = this.state;
        let clearitem = [...items];
        clearitem.splice(0, clearitem.length);
        this.setState({
            items: clearitem,
        });
    }
    displayHandler() {
        const { items, duplicateItems } = this.state;
        let clearitem = [...items];
        clearitem.splice(0, clearitem.length);
        this.setState({
            items: [...duplicateItems],
        });
    }
    updateTask(listid) {
        const { items, selectedItem } = this.state;
        const deleteItem = items.filter((item) => item.id !== listid);
        const selectedItems = items.filter((item) => item.id === listid);
        this.setState({
            id: listid,
            value: selectedItems[0].title,
            btntitle: 'Update',
        });
    }
    render() {
        const { items, value, btntitle } = this.state;

        return (
            <div className="main-div">
                <div className="main-child">
                    <div className="heading">
                        <h1 style={{ color: 'black ' }}>Todo List</h1>
                    </div>
                    <div className="control-div">
                        <TextField val={value} onChange={this.changeHandler} />
                        <Button
                            variant="contained"
                            color="primary"
                            size="medium"
                            title={btntitle}
                            onClick={this.addHandler}
                            className="btnAdd"
                            style="marginLeft:'5px'"
                        />
                    </div>
                    <div className="list">
                        <List deleteTask={this.deleteTask} updateTask={this.updateTask} items={items} />
                    </div>
                    <div className="todoFooter">
                        <Button
                            variant="contained"
                            color="primary"
                            size="small"
                            title="Clear List"
                            onClick={this.clearHandler}
                        />
                        <Button
                            variant="contained"
                            color="primary"
                            size="small"
                            className="btnDisplay"
                            title="Display All"
                            onClick={this.displayHandler}
                        />
                    </div>
                </div>
                {/* <div className="mainChild"></div>
                
                  
                    


                </div>
            
                <div className="todoFooter">
                    <Button
                        variant="contained"
                        color="primary"
                        size="small"
                        title="Clear List"
                        onClick={this.clearHandler}
                    />
                    <Button
                        variant="contained"
                        color="primary"
                        size="small"
                        className="btnDisplay"
                        title="Display All"
                        onClick={this.displayHandler}
                    />
                </div> */}
            </div>
        );
    }
}

export default TodoList;
