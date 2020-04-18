import React, {Component} from 'react';
import './App.css';
import Radium,{ StyleRoot }  from 'radium';
import Persons from '../Components/Persons/Persons.js';
import Cockpit from '../Components/Cockpit/Cockpit.js';


class App extends Component {

constructor(props){
  super(props);
  console.log('[App.js] constructor');
}

static getDerivedStateFromProps(props, state){
  console.log('[App.js] getDerivedStateFromProps ',props);
  return state;
}

componentDidMount(){
  console.log('[App.js] componentDidMount ');
}

shouldComponentUpdate(nextProps, nextState){
  console.log('[App.js] shouldComponentUpdate');
  return true;
}

componentDidUpdate(prevProps,prevState){
    console.log('[App.js] componentDidUpdate');
}


    state = {
        persons: [
            { id:"key1", name: "sharan",age: 25},
            { id:"key2", name: "Sam",age: 26 },
            { id:"key3", name: "John",age: 30 }
        ],
        otherState: "something else",
        showPersons: false,
        showCockpit: true
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
      console.log('[App.js] render');
        let persons = null;
        if(this.state.showPersons){
          persons= (
            <Persons
              persons={this.state.persons}
              clicked={this.deletePersonHandler}
              changed ={this.changeNameHandler}
            />
          );
        }

      return (
        <StyleRoot>
    			<div className ='App'>
          <button onClick={() =>{
            this.setState({
                showCockpit: false
            });
          }}> Remove Cockpit </button>
            {this.state.showCockpit ? <Cockpit
              appTitle={this.props.appTitle}
              personsLength={this.state.persons.length}
              showPersons={this.state.showPersons}
              toggled={this.toggleShowPersons}
            /> : null}
            {persons}
    			</div >
        </StyleRoot>
      );
    }
}

export default Radium(App);
