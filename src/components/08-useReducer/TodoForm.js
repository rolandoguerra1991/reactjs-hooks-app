import React, { Fragment } from "react";
import PropTypes from "prop-types";
import useForm from "../../hooks/useForm";

const TodoForm = (props) => {
  const [{ description }, handleInputChange, resetForm] = useForm({
    description: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (description.trim().length <= 1) {
      return;
    }

    const newTodo = {
      id: new Date().getTime(),
      desc: description,
      done: false,
    };

    props.handleNewTodo(newTodo);

    resetForm();
  };
  return (
    <Fragment>
      <h4>Agregar TODO</h4>
      <hr />
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="description"
          placeholder="Aprender ...."
          autoComplete="false"
          className="form-control mb-3"
          onChange={handleInputChange}
          value={description}
        />
        <button type="submit" className="btn btn-outline-primary w-100">
          Agregar
        </button>
      </form>
    </Fragment>
  );
};

TodoForm.propTypes = {
  handleNewTodo: PropTypes.func.isRequired,
};

export default TodoForm;
