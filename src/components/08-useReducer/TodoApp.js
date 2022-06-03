import React, { Fragment, useEffect, useReducer } from "react";

import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import todoReducer from "./todoReducer";

import "./styles.css";

const TodoApp = () => {
  const init = () => {
    return JSON.parse(localStorage.getItem("todos")) || [];
  };

  const [todos, dispatch] = useReducer(todoReducer, [], init);

  const handleNewTodo = (newTodo) => {
    dispatch({
      type: "add",
      payload: newTodo,
    });
  };

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleDelete = (todoId) => {
    const action = {
      type: "delete",
      payload: todoId,
    };

    dispatch(action);
  };

  const handleToggle = (todoId) => {
    dispatch({
      type: "toggle",
      payload: todoId,
    });
  };

  return (
    <Fragment>
      <h1>TodoApp ({todos.length})</h1>
      <hr />
      <div className="row">
        <div className="col-7">
          <TodoList
            todos={todos}
            handleToggle={handleToggle}
            handleDelete={handleDelete}
          />
        </div>
        <div className="col-5">
          <TodoForm handleNewTodo={handleNewTodo} />
        </div>
      </div>
    </Fragment>
  );
};

export default TodoApp;
