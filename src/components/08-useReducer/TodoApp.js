import React, { Fragment, useReducer } from "react";
import "./styles.css";
import todoReducer from "./todoReducer";

const TodoApp = () => {
  const initialState = [
    {
      id: new Date().getTime(),
      desc: "Aprender React",
      done: false,
    },
  ];

  const [todos] = useReducer(todoReducer, initialState);

  return (
    <Fragment>
      <h1>TodoApp ({todos.length})</h1>
      <hr />
      <div className="row">
        <div className="col-7">
          <ul className="list-group list-group-flush">
            {todos.map(({ id, desc, done }, i) => (
              <Fragment>
                <li key={id} className="list-group-item">
                  <p className="text-center">
                    {i + 1}. {desc}
                  </p>
                  <button className="btn btn-danger">Borrar</button>
                </li>
              </Fragment>
            ))}
          </ul>
        </div>
        <div className="col-5">
          <h4>Agregar TODO</h4>
          <hr />
          <form>
            <input
              type="text"
              name="description"
              placeholder="Aprender ...."
              autoComplete="false"
              className="form-control mb-3"
            />
            <button className="btn btn-outline-primary w-100">Agregar</button>
          </form>
        </div>
      </div>
    </Fragment>
  );
};

export default TodoApp;
