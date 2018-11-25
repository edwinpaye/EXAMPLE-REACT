import React, {Component} from 'react'

class Boton extends React.Component {
    constructor(props) {
      super(props);
      this.state = {count: 1, texto: "hola"};
    }

    render() {
      return (
        <div>
          <button
            color={this.props.color}
            onClick={() => this.setState(state => ({count: state.count + 1}))}>
            Count: {this.state.count}
          </button>
          <button onClick={() => this.setState(state => ({texto:"texto"}))}></button>
          <input ></input>
          <h1>{this.state.count}:{this.state.texto}</h1>
        </div>
      );
    }
}

export default Boton;