import React from "react";
import PropTypes from "prop-types";
import TodoItem from "./TodoItem";

const TodoList = (props) => {
  return (
    <ul className="list-group list-group-flush">
      {props.todos.map((todo, i) => (
        <TodoItem
            key={todo.id}
            todo={todo}
            index={i}
            handleToggle={props.handleToggle}
            handleDelete={props.handleDelete}
        />
      ))}
    </ul>
  );
};

TodoList.propTypes = {
    todos: PropTypes.array.isRequired,
    handleDelete: PropTypes.func.isRequired,
    handleToggle: PropTypes.func.isRequired
};

export default TodoList;
