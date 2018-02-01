import React, { Component } from 'react';
import './App.css';
import Button from './Button/Button';
import Recipe from './Recipe/Recipe';
import Modal from './Modal/Modal';

class App extends Component {
  state = {
    showModal: false,
  };

  addRecipeHandler = () =>{
    const doesShow = this.state.showModal;
    this.setState({showModal: !doesShow});
    //if doesShow is true, its convert to false and so on
  }

  render() {
    //Javascript way of handling dynamic content(toggle modal by <Button/>)
    let toggleModal = null;
    if(this.state.showModal){// if true show <Modal/>
      toggleModal = (
        <Modal/>
      );
    }

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
        {toggleModal}
      </div>
    );
  }
}

export default App;
