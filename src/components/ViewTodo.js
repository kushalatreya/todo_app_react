import React, { Component } from "react";

export default class ViewTodo extends Component {
  render() {
    return (
      <div>
        {this.props.forView().map((element,index) => (
          <div key={index}>

          <h1>{element.todo}</h1>
          </div>
        ))}
      </div>
    );
  }ss
}
