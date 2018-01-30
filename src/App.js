import React, { Component } from 'react';
import './App.css';
import Button from './Button/Button';
import Recipe from './Recipe/Recipe';

class App extends Component {
  state = {

  };

  addRecipeHandler = () =>{
    console.log('click');
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Recipe collection app</h1>
        </header>
        <ul className="recipe-list">
          <Recipe title="Spaghetti" ingredient="pasta"/>
          <Recipe title="Stinky meat" ingredient="meat"  />
        </ul>
        {/*Funny JSX comment
          Button click prop is way how i can use events inside Component,
          by passing a reference as a prop 
         */}
        <Button click={this.addRecipeHandler}></Button>
      </div>
    );
  }
}

export default App;
