import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Aux from '../../../hoc/Auxiliary';
import withClass from '../../../hoc/withClass';
import classes from './Person.css';
import AuthContext from '../../../context/auth-context';

class Person extends Component {

  static contextType = AuthContext; 

constructor(props){
  super(props);
  this.inputElementRef = React.createRef();
}

componentDidMount(){
  this.inputElementRef.current.focus();
  console.log(this.context.authenticate);
}

  render() {
    console.log('[Person.js] rendering...');
    return (
      <Aux>
        {this.context.authenticate ? <p>Authenticated</p> : <p>Please press the Login btn</p>}
        <p onClick={this.props.click}>
          I'm {this.props.name} and I am {this.props.age} years old!
        </p>
        <input
          key="i2"
         // ref={(inputEl) => {inputEl.focus()}}    //Correct but not what we are actually trying to do
         // ref={(inputEl) => {this.inputElement = inputEl}}  //Correct but old method, 
                                                              //can be used for older React versions.
          ref={this.inputElementRef}
          type="text"
          onChange={this.props.changed}
          value={this.props.name}
        />
      </Aux>
    );
  }
}

Person.propTypes = {
  click: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
  changed: PropTypes.func
};

export default withClass(Person, classes.Person);
