import React, { Component } from "react";

export default class list extends Component {
  completeTodo = (todoList, index, item) => {
    if (todoList[index] === item) {
      todoList[index].completed = !item.completed;
    }
    this.setState({ todoList });
  };
  render() {
    const { todoList } = this.props;
    return (
      <ul className="list-group mb-2">
        {todoList.length === 0 ? (
          <h5>No Tasks</h5>
        ) : (
          todoList.map((item, index) => (
            <li
              onClick={() => this.completeTodo(todoList, index, item)}
              key={index}
              className="list-group-item"
            >
              <p
                className={
                  item.completed
                    ? "strike-through text-success text-center"
                    : "text-center"
                }
              >
                {item.desc}
              </p>
            </li>
          ))
        )}
      </ul>
    );
  }
}
