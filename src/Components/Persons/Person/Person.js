import React, { Component } from 'react';
import Radium from 'radium';
import './Person.css';
import Aux from '../../../hoc/Auxiliary.js';

class Person extends Component {
  render(){
    console.log('[Person.js] rendering person...');
    return (
      <Aux>
      <p key="k1" onClick = { this.props.click } >I 'm {this.props.name} and I'm { this.props.age }  years old! </p>
      <p key="k2"> { this.props.children } </p>
      <input key="k3" type = "text" onChange = { this.props.changed }/>
      </Aux>
    );
  }
}

export default Radium(Person);
