import React, { Component } from 'react'

export default class AddTodo extends Component {



  render() {

    return (
      <div>
        <form>
        <label>Add ToDo:  </label>
        <input type="text" placeholder= 'add TODO' onChange= {this.handleInput} />
        <button>Add</button><br/>
       {/*  <button>Edit</button>
        <button>View</button>
        <button>Delete</button> */}
        </form>
      </div>
    )
  }
}
