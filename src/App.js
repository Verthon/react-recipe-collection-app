import React, { Component } from 'react';
import './App.css';
import Button from './Components/Button/Button';
import Recipe from './Components/Recipe/Recipe';
import Modal from './Components/Modal/Modal';

class App extends Component {
  state = {
    showModal: false,
    recipes: [
      {id: 1, title: 'Spaghetti', ingredients: ['pasta', 'tomatoes']},
      {id: 2, title: 'Stinky Meat', ingredients:['meat', 'stench'] },
    ],
  };
  // add recipe button function, for toggle add recipe modal
  toggleModalHandler = () => {
    const doesShow = this.state.showModal;
    this.setState({showModal: !doesShow});
    //if doesShow is true, its convert to false and so on
  }
  //close button inside of modal
  closeModalHandler = () => {
    this.setState({showModal: false});
  }
  addRecipeHandler = (e) => {
    const newRecipe = [this.recipes.title, this.recipes.ingredients];
    this.setState(
      {showModal: false,
       recipes: [...this.state.recipes, newRecipe]
      }  
    );
  }
  deleteRecipe = (index) => {
    let recipes = this.state.recipes.slice();
    recipes.splice(index, 1);
    this.setState({recipes});
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
      this.state.recipes.map((recipe, index) =>{
        // here was error, the begining of <Recipe /> must be within same line as return 
        return <Recipe 
        title={recipe.title} 
        ingredients={recipe.ingredients}
        key={recipe.id} 
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
