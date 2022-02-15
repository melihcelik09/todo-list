import React, { Component } from "react";
import Header from "./components/header";
import List from "./components/list";
import Form from "./components/form";
import { Container } from "react-bootstrap";
import "./App.css";

export default class App extends Component {
  state = {
    userInput: "",
    todoList: [],
  };
  handleChange = (e) => {
    this.setState({ userInput: e.target.value });
  };
  addTodo = () => {
    const value = this.state.userInput;
    if (value.trim().length > 0) {
      const todoList = {
        desc: value,
        completed: false,
      };
      const newTodoList = [...this.state.todoList, todoList];
      this.setState({
        userInput: "",
        todoList: newTodoList,
      });
    }
    this.setState({ userInput: "" });
  };

  clearTodoList = () => {
    const unCompleted = this.state.todoList.filter(
      (item) => item.completed === false
    );
    this.setState({ todoList: unCompleted });
  };
  render() {
    return (
      <Container className="d-flex flex-column min-vh-100 justify-content-center align-items-center">
        <Header />
        <List todoList={this.state.todoList} />
        <Form
          userInput={this.state.userInput}
          handleChange={this.handleChange}
          addTodo={this.addTodo}
          clearTodoList={this.clearTodoList}
        />
      </Container>
    );
  }
}
