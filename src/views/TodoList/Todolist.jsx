import React from "react";
import Button from "../../components/Button";
import TextField from "../../components/TextBox";
import List from "../../components/List";

class TodoList extends React.Component {
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
    if(value!=null && value!='')
    {
    this.setState({
      value: '',
      items: [...items, value],
      duplicateItems: [...duplicateItems, value],
    });
    }
    else{
      alert("Empty")
    }
    value='';
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
          <TextField value={value} onChange={this.changeHandler} />

          <Button
            variant="contained"
            color="default"
            size="medium"
            title="Add"
            onClick={this.addHandler}
          />
        </div>
        <div className="list">
          <List deleteTask={this.deleteTask} items={items} />
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
    );
  }
}

export default TodoList;
