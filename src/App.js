import React, { Component } from "react";
import "./App.css";
import AddTodo from "./components/AddTodo";
import ShowTodo from "./components/ShowTodo";
/* import EditTodo from './components/EditTodo' */
import ViewTodo from './components/ViewTodo'
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
    selectedNumber: null
  };

  deleteHandler = id => {
    const currentId = this.state.todoList.slice();
    console.log(id);
    /* const updatedId = currentId.splice(id,1); This only holds one object and checks in the state and update, deleting all other except the item which is holding in the memory*/
    /* this will slice one item starting from the id */
    /*    const updatedTodos =  currentId.filter((element)=>element.id !== id[]);
     */

    const todoList = currentId.filter(item => item.id != id);
    console.log(todoList);

    this.setState({
      todoList
    }); /* this will check the last todoList and updates with currentId */
  };

  selectedNumberHandler = (id) => {
    this.setState({ selectedNumber: id });    
  }

  viewHandler = id => {
    const data = this.state.todoList.filter(item => ( item.id === this.state.selectedNumber ))
    return data;
  };

  render() {
    return (
      <div>
        <AddTodo />
        <ShowTodo
          dataToMap={this.state.todoList}
          forDelete={this.deleteHandler}
          idSelector={this.selectedNumberHandler}
          forView={this.viewHandler}
        />
        {/* <EditTodo= {this.editHandler} /> */}
        <ViewTodo forView={this.viewHandler} />
      </div>
    );
  }
}

export default App;
