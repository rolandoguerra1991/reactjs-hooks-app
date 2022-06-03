import React from "react";
import PropTypes from "prop-types";

const TodoItem = (props) => {
  return (
    <li className="list-group-item">
      <p
        onClick={() => props.handleToggle(props.todo.id)}
        className={`${props.todo.done && "completed"}`}
      >
        {props.index + 1}. {props.todo.desc}
      </p>
      <button className="btn btn-danger" onClick={() => props.handleDelete(props.todo.id)}>
        Borrar
      </button>
    </li>
  );
};

TodoItem.propTypes = {
    todo: PropTypes.object.isRequired,
    index: PropTypes.number.isRequired,
    handleDelete: PropTypes.func.isRequired,
    handleToggle: PropTypes.func.isRequired
};

export default TodoItem;
