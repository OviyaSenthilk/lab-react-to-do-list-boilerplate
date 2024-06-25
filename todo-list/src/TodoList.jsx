import React, { Component } from 'react';
import TodoItem from './TodoItem';
import './App.css';
<h2>To-do-List</h2>
class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      newTodo: '',
      isEditing: false,
      currentTodo: {},
    };
  }

  addTodo = () => {
    if (this.state.newTodo.trim() !== '') {
      const newTodo = {
        id: Date.now(),
        text: this.state.newTodo,
      };
      this.setState((prevState) => ({
        todos: [...prevState.todos, newTodo],
        newTodo: '',
      }));
    }
  };

  deleteTodo = (id) => {
    this.setState({
      todos: this.state.todos.filter((todo) => todo.id !== id),
    });
  };

  editTodo = (todo) => {
    this.setState({
      isEditing: true,
      currentTodo: { ...todo },
    });
  };

  updateTodo = (id, updatedText) => {
    const updatedTodos = this.state.todos.map((todo) =>
      todo.id === id ? { ...todo, text: updatedText } : todo
    );
    this.setState({ todos: updatedTodos, isEditing: false, currentTodo: {} });
  };

  handleInputChange = (e) => {
    this.setState({ newTodo: e.target.value });
  };

  handleUpdateChange = (e) => {
    this.setState({
      currentTodo: { ...this.state.currentTodo, text: e.target.value },
    });
  };

  handleUpdateSubmit = (e) => {
    e.preventDefault();
    this.updateTodo(this.state.currentTodo.id, this.state.currentTodo.text);
  };

  render() {
    return (
      <div>
        <h1>To-Do List</h1>
        {this.state.isEditing ? (
          <form onSubmit={this.handleUpdateSubmit}>
            <input
              type="text"
              value={this.state.currentTodo.text}
              onChange={this.handleUpdateChange}
            />
            <button type="submit">Update</button>
          </form>
        ) : (
          <div>
            <input
              type="text"
              value={this.state.newTodo}
              onChange={this.handleInputChange}
            />
            <button onClick={this.addTodo}>Add</button>
          </div>
        )}
        <ul>
          {this.state.todos.map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              deleteTodo={this.deleteTodo}
              editTodo={this.editTodo}
            />
          ))}
        </ul>
      </div>
    );
  }
}

export default TodoList;
