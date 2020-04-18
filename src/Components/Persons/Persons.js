import React, { PureComponent } from 'react';
import Person from './Person/Person.js';

class Persons extends PureComponent{

// shouldComponentUpdate(nextProps, nextState){
//   console.log('[Persons.js] shouldComponentUpdate');
//   if(nextProps.persons !== this.props.persons){
//     return true;
//   } else {
//     return false;
//   }
// }

getSnapshotBeforeUpdate(prevProps,prevState){
  console.log('[Persons.js] getSnapshotBeforeUpdate');
  return {Message: 'snapshot'};
}

componentWillUnmount(){
  console.log('[Persons.js] componentWillUnmount ');
}

componentDidUpdate(prevProps,prevState,snapshot){
    console.log('[Persons.js] componentDidUpdate' ,snapshot);
}

  render(){
    console.log('[Persons.js] rendering persons...');
  return(
    <div>
      { this.props.persons.map( (person, index) => {
        return   <Person
        name={person.name}
        age={person.age}
        key={person.id}
        click={() => this.props.clicked(index)}
        changed ={(event) => this.props.changed(event, person.id)} />
      })}
    </div>
  );
}
}

export default Persons;
