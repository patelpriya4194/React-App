import React, { Component } from 'react';
import classes from './App.css';
import Person from './Person/Person';

class App extends Component {

  state = {
    persons:[
      { id: 'id1', name: 'Parthiv', age: 29},
      { id: 'id2',name: 'Priya', age: 24},
      { id: 'id3',name: 'Drashti', age: 25}
    ], 
    showPersons: false
  }

  deletePersonHandler = (personIndex) => {
    const persons= [...this.state.persons];
    persons.splice(personIndex,1);
    this.setState({persons:persons});

  }

  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(
      p => {
        return p.id===id;
      }
    );

    const person={
      ...this.state.persons[personIndex]
    };

    person.name=event.target.value;

    const persons=[...this.state.persons];
    persons[personIndex]=person;
    this.setState({persons:persons});
  }

  togglePersonHandler =() => {
    const doesShow= this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  render() {
    const styling = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    let persons=null;

    if(this.state.showPersons){
      persons= (
        <div> 
          {this.state.persons.map((person, index) => {
            return <Person 
            click={() => this.deletePersonHandler(index)}
            name={person.name} 
            age={person.age}
            key={person.id}
            changed={(event)=> this.nameChangeHandler(event, person.id) }/>
          })}
        </div>
      );
      styling.backgroundColor = 'red';
      
    }

    const assignedClasses=[];

    if(this.state.persons.length <=2){
      assignedClasses.push(classes.red);
    }
    if(this.state.persons.length <=1){
      assignedClasses.push(classes.bold);
    }

    return (
      
      <div className={classes.App}>
       <h1> Hi, I am react app </h1>
       <p className={assignedClasses.join(' ')}>This is really working.</p>
       <button 
       onClick={this.togglePersonHandler} 
       style={styling}>Toggle Persons</button>
       {persons}
      </div>
    );
    //return React.createElement('div', {className:"App"}, React.createElement('h1', null, 'Does this work?'))
  }
}

export default App;
