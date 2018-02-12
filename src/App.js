import React, { Component } from 'react';
import './App.css';
import Button from './Button/Button';
import Recipe from './Recipe/Recipe';
import Modal from './Modal/Modal';

class App extends Component {
  state = {
    showModal: false,
    recipes: [
      {title: 'Spaghetti', ingredients: ['pasta', 'tomatoes']},
      {title: 'Stinky Meat', ingredients:['meat', 'stench'] },
    ],
  };
  // add recipe button function, for toggle add recipe modal
  toggleModalHandler = () =>{
    const doesShow = this.state.showModal;
    this.setState({showModal: !doesShow});
    //if doesShow is true, its convert to false and so on
  }
  //close button inside of modal
  closeModalHandler = () =>{
    this.setState({showModal: false});
  }
  addRecipeHandler = () => {
    this.setState({showModal: false});
  }

  render() {
    // Javascript way of handling dynamic content(toggle modal by <Button/>)
    let toggleModal = null;
    if(this.state.showModal){// if true show <Modal/>
      toggleModal = (
        <Modal close={this.closeModalHandler} add={this.addRecipeHandler}
          title={this.addRecipeHandler} ingredients={this.addRecipeHandler}
        />
      );
    }
    let recipeList = (
      this.state.recipes.map((recipe) =>{
        // here was error, the begining of <Recipe /> must be within same line as return 
        return <Recipe 
        title={recipe.title} 
        ingredients={recipe.ingredients} 
         />
      })
    );
    
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Recipe collection app</h1>
        </header>
        <ul className="recipe-list">
          {recipeList}
        </ul>
        {/*Funny JSX comment
          Button click prop is way how i can use events inside Component,
          by passing a reference as a prop 
         */}
        <Button click={this.toggleModalHandler}></Button>
        {toggleModal}
      </div>
    );
  }
}

export default App;
