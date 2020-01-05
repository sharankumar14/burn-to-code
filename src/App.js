import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person.js';

class App extends Component {
    state = {
        persons: [
            {name: "sharan",age: 25},
            {name: "Sam",age: 26 },
            {name: "John",age: 30 }
        ],
        otherState: "something else"
    };

    switchEventHandler = (newName) => {
        this.setState({
            persons: [
              {name: newName,  age: 20},
              {name: "Sam",age: 30},
              {name: "John",age: 40}
            ]
        })
    }

    changeNameHandler = (event) => {
        this.setState({
            persons: [
              {name: "sharan", age: 25},
              {name: event.target.value, age: 26},
              {name: "John",age: 30}
            ],
        })
    }


    render() {
        const style = {
          backgroundColor: 'yellow',
          border: '2px solid blue'
        }
      return (
			<div className = "App" >
				<h1> I 'm a React App and a developer</h1>
				<button style={style} onClick = {() => this.switchEventHandler('stack')} > Switch name < /button>
				<Person
            name = {this.state.persons[0].name}
            age = {this.state.persons[0].age}/>
				<Person
            name = {this.state.persons[1].name }
            age = {this.state.persons[1].age }
            click = {this.switchEventHandler.bind(this, 'ssss!!')}
            changed = {this.changeNameHandler} >
				    My Hobbies: Racing
				< /Person>
				<Person
            name = { this.state.persons[2].name}
            age = {this.state.persons[2].age} />
			</div >
        );
    }
}

export default App;
