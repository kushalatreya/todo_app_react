import React, { Component } from 'react'

export default class AddTodo extends Component {
    state={
        id : '',
        todo : ''
    };

    handleInput = e => {
    let target = e.target;
    let name = target.name;
    let value = target.value;
    const _id = this.props.dataForNewTodo[this.props.dataForNewTodo.length - 1].id + 1;
/*  console.log(this.props.dataForNewTodo[this.props.dataForNewTodo.length -1].id +1);*/ this.setState({[name]:value, id:_id})
    console.log(target)
    };

    saveSubmit = (e)=>{
    e.preventDefault()
    this.props.addTodo(this.state)
    }

  render() {
    return (
      <div>
        <form onSubmit= {this.saveSubmit}>
        <label>Add ToDo:  </label>
        <input type="text" name= 'todo' placeholder= 'add TODO' value={this.state.todo} onChange= {this.handleInput} />
        <button>Add</button><br/>
        </form>
      </div>
    )
  }
}
