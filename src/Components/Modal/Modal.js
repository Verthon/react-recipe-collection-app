import React from 'react'
import './Modal.css';

const Modal = (props) => {
  return(
    <div className="recipe-modal">
      <h1 className="recipe-modal-heading">Add recipe</h1>
      <label htmlFor="recipe">Recipe</label>
      <input type="text" name="recipe" title={props.title}/>
      <label htmlFor="ingredients">Ingredients</label>
      <textarea name="ingredients" placeholder="Enter ingredients, separated by commas" id="" cols="30" rows="10">{props.ingredients}</textarea>
      <button onClick={props.add}>Add recipe</button>
      <button onClick={props.close}>Close</button>
    </div>  
  );
}

export default Modal;