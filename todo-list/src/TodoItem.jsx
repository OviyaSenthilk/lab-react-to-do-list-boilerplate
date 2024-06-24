import React from 'react';

const TodoItem = ({ todo, deleteTodo, editTodo }) => (
  <li>
    {todo.text}
    <button onClick={() => deleteTodo(todo.id)}>Delete</button>
    <button onClick={() => editTodo(todo)}>Edit</button>
  </li>
);

export default TodoItem;
