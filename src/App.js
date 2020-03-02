import React, { Component } from 'react';
import logo from './logo.svg';
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './components/MenuComponent';
import './App.css';
import { DISHES } from './shared/dishes';

class App extends Component {

  constructor(props) {
    super(props);
    // in order to be stored, state needs to be defined in the constructor
    this.state = { // lifted from menu component
      dishes: DISHES // name:value (const DISHES in dishes.js)
    };
  }

  render() {
    return (
      <div>
       <Navbar dark color="primary">
        <div className="container">
         <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
        </div>
       </Navbar>
       <Menu dishes={this.state.dishes}/> 
      </div>
    );
  }
}
// exports in order to be imported in index.js
export default App;
