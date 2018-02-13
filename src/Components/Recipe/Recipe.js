import React from 'react';
import './Recipe.css';

const Recipe = (props) => {
  return(
    <li className="single-recipe">
      <h2>{props.title}</h2>
      <p>{props.ingredients}</p>
      <button onClick={props.delete}>Delete</button>
      <button onClick={props.edit}>Edit</button>
    </li>
  );

}

export default Recipe;