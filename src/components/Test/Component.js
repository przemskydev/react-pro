import React, { useState } from 'react';
import { PropTypes } from 'prop-types';

const Input = ({ placeholder, label, name }) => {
  const [inputValue, setInputValue] = useState('')
  const [isError, setErrorVisible] = useState(false)

  const handleChange = ({ target: { value } }) => {
    const regex = /[0-9]+/;
    // setInputValue(value.replace(regex, ""))
    if (regex.test(value)) {
      setErrorVisible(true)
    } else {
      setErrorVisible(false)
    }
    
    setInputValue(value)
  }

  return (
    <>
      <label htmlFor={name}>{label}</label>
      <input
        id={name}
        name={name}
        placeholder={placeholder}
        value={inputValue}
        onChange={handleChange}
      />
      {
        isError && (
          <p>Error</p>
        )
      }
    </>
  )
}

Input.propTypes = {
  placeholder: PropTypes.string,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,

}

Input.defaultProps = {
  placeholder: "Your value"
}

export default Input;