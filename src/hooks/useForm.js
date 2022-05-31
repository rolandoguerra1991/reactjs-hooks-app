import React from 'react'
const useForm = (initialState = {}) => {

  const [values, setValue] = React.useState(initialState)

  const handleInputChange = ({ target }) => {
    const { name, value } = target;
    setValue({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(values);
  }

  return [values, handleInputChange, handleSubmit]
}

export default useForm