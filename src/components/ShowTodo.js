/* This component is to map and show the todos saved in the state */
import React, { Component } from 'react'
import './showtodo.css'

export default class ShowTodo extends Component {
  render() {
    return (
      <div>
            {this.props.dataToMap.map((element,index)=>{
                return <div className="each-todo-container">
                    <p>{element.id}</p>
                    <p>{element.todo}</p>
                    <button>Edit</button>
                    <button
                      onClick={() =>
                        this.props.idSelector(element.id)
                      }
                    >
                      View
                    </button>
                    <button
                      onClick={() =>
                        this.props.forDelete(element.id)
                      }
                    >
                      Delete
                    </button>
                  </div>;
            })
            }

      </div>
    )
  }
}
