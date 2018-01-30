import React from 'react'
import './Button.css';

const Button = (props) => {
  return(
    // !!! Very important line
    // Passing a prop that points to App.js, so i can use onClick event inside component
    <button onClick={props.click}>Test</button>
  );
}

export default Button;