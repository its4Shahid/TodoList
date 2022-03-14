import React from "react";
import List from "./List";
import "../index.css";
import Button from "./Button";

class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      items: [],
      duplicateItems: [],
    };
    this.changeHandler = this.changeHandler.bind(this);
    this.addHandler = this.addHandler.bind(this);
    this.deleteTask = this.deleteTask.bind(this);
    this.clearHandler = this.clearHandler.bind(this);
    this.displayHandler = this.displayHandler.bind(this);
  }

  //Change it to bind
  changeHandler(event) {
    this.setState({ value: event.target.value });
  }

  addHandler(event) {
    event.preventDefault();
    const { items, value, duplicateItems } = this.state;
    this.setState({
      value: "",
      items: [...items, value],
      duplicateItems: [...duplicateItems, value],
    });
  }
  deleteTask(index) {
    const { items } = this.state;
    const deleteItem = [...items];
    deleteItem.splice(index, 1);
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

  render() {
    const { items, value } = this.state;
    const {} = this.props;
    return (
      <div className="main-div">
        <div className="mainChild"></div>
        <div className="todoHeader">
          <h1>Todo List</h1>
          <input type="text" value={value} onChange={this.changeHandler} />
          <button onClick={this.addHandler}>Add Item</button>
        </div>
        <div className="list">
          <List deleteTask={this.deleteTask} items={items} />
        </div>
        <div className="todoFooter">
          <button className="btnClear" onClick={this.clearHandler}>
            Clear List
          </button>
          <button className="btnDisplay" onClick={this.displayHandler}>
            Display All
          </button>
        </div>
      </div>
    );
  }
}

export default TodoForm;
