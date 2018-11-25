import React, {Component} from 'react'

class Boton extends React.Component {
    constructor(props) {
      super(props);
      this.state = {count: 1};
    }

    render() {
      return (
        <button
          color={this.props.color}
          onClick={() => this.setState(state => ({count: state.count + 1}))}>
          Count: {this.state.count}
        </button>
      );
    }
}

export default Boton;