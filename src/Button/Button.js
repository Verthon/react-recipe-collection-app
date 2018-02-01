import React from 'react'
import './Button.css';

const Button = (props) => {
  return(
    // !!! Very important line
    // Passing a prop to App.js, that is method for onclick event, 
    // 'addRecipeHandler' is method inside of App.js root file
    <button onClick={props.click}>Add recipe</button>
  );
}

export default Button;