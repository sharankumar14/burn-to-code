import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person.js';

class App extends Component {
    state = {
        persons: [
            { id:"key1", name: "sharan",age: 25},
            { id:"key2", name: "Sam",age: 26 },
            { id:"key3", name: "John",age: 30 }
        ],
        otherState: "something else",
        showPersons: false
    };

    deletePersonHandler = (personIndex) => {
  //  const persons = this.state.persons;  // this will only point to the reference.
      const persons = [...this.state.persons]; // this will make a copy of the array.
      persons.splice(personIndex , 1);
      this.setState(
        {
          persons : persons
        }
      )
    }

    changeNameHandler = (event, id) => {
      const personIndex = this.state.persons.findIndex( p => {
        return p.id === id;
      })

      const person = {...this.state.persons[personIndex]};
      person.name = event.target.value;

      const persons = [...this.state.persons];
      persons[personIndex] = person ;
        this.setState({
             persons : persons
        });
    }

    toggleShowPersons = () => {
      const doesShow = this.state.showPersons;
      this.setState({
        showPersons : !doesShow
      });
    }



    render() {
        const style = {
          backgroundColor: 'yellow',
          border: '2px solid blue'
        }

        let persons = null;
        if(this.state.showPersons){
          persons= (
            <div>
              { this.state.persons.map( (person, index) => {
                return   <Person
                name={person.name}
                age={person.age}
                key={person.id}
                click={() => this.deletePersonHandler(index)}
                changed ={(event) => this.changeNameHandler(event, person.id)} />
              })}
            </div>
          );
        }

      return (
			<div className = "App" >
				<h1> I 'm a React App and a developer</h1>
				<button
          style={style}
          onClick ={this.toggleShowPersons} > Toggle Persons < /button>
        {persons}
			</div >
        );
    }
}

export default App;
