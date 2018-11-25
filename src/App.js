import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ComponenteUno from './ComponenteUno.js'
import Home from './Home.jsx'
import Boton from './Boton.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <ComponenteUno/>
        <Home></Home>
        <Boton></Boton>
      </div>
    );
  }
}

export default App;
