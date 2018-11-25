import React, {Component} from 'react'

class Boton extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        count: 0,
        personas: [{count: 1, texto: "hola"}, {count: 2, texto: "Saludos"}, {count: 3, texto: "Buenas"}]
      }
    }

    sumar() {
      return () => this.setState(state => ({count: state.count + 1}))
    }

    resta(){
      return () => this.setState(state => ({count: state.count - 1}))
    }

    contador(){
      if(this.state.count == 0){
        return "cero"
      }
      return this.state.count
    }

    imprimir(){
      return (() => this.state.personas.map((persona, i) => {
        return <li key={i}>{persona.count}, {persona.texto}</li>
      }));
    }

    getText(i){
      return this.state.personas[i].texto
    }

    render() {
      var i = 0;
      var personass = this.state.personas.map((persona, i) => {
        return <li key={i}>{persona.count}, {persona.texto}</li>
      });
      return (
        <div>
            <button color={this.props.color} onClick={this.sumar()}>
              Sumar
            </button>
            <button onClick={this.resta()}>Decremento</button>
            {/* <input ></input> */}
            <h1>{this.contador()}:{this.getTexto(i)}</h1>
            <h1>Lista:</h1>
            <ul>{personass}</ul>
        </div>
      );
    }
}

export default Boton;