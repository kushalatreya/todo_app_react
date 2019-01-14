import React, { Component } from "react";
import "./App.css";
import AddTodo from "./components/AddTodo";
import ShowTodo from "./components/ShowTodo";

class App extends Component {
  state = {
    todoList: [
      {
        id: 1,
        todo: "go to gym"
      },
      {
        id: 2,
        todo: "get a Job"
      },
      {
        id: 3,
        todo: "Learn and Develop skills"
      },
      {
        id: 4,
        todo: "Be financeally independent"
      }
    ],
    deleteNumber: null
  };

  deleteHandler = id => {
    const currentId = this.state.todoList.slice();
    /* const updatedId = currentId.splice(id,1); This only holds one object and checks in the state and update, deleting all other except the item which is holding in the memory*/
    currentId.splice(id,1)/* this will slice one item starting from the id */
    this.setState({todoList:currentId})/* this will check the last todoList and updates with currentId */ 
  };

  render() {
    return (
      <div>
        <AddTodo />
        <ShowTodo
          dataToMap={this.state.todoList}
          forDelete={this.deleteHandler}
        />
      </div>
    );
  }
}

export default App;
