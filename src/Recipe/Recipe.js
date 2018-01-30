import React from 'react';
import './Recipe.css';

const Recipe = (props) => {
  return(
    <li className="single-recipe">
      <h2>{props.title}</h2>
      <p>{props.ingredient}</p>
    </li>
  );

}

export default Recipe;