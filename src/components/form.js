import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";
import { BiAddToQueue, BiXCircle } from "react-icons/bi";
export default class form extends Component {
  handleSubmit = (e) => {
    e.preventDefault();
    const { addTodo } = this.props;
    addTodo();
  };
  render() {
    const { userInput, handleChange, addTodo, clearTodoList } = this.props;
    return (
      <Form className="d-flex flex-row">
        <Form.Control
          type="text"
          value={userInput}
          onChange={handleChange}
          placeholder="Write a task"
        />
        <Button
          variant="success"
          onSubmit={this.handleSubmit}
          className="mx-2"
          onClick={addTodo}
        >
          <BiAddToQueue />
        </Button>
        <Button variant="danger" onClick={clearTodoList}>
          <BiXCircle />
        </Button>
      </Form>
    );
  }
}
