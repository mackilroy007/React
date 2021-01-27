// this is the traditional way of implementing components
import React, { Component } from 'react';

// for react hooks we use:
// import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

// traditional way of coding components:
class App extends Component {
  state = {
    persons: [
      { name: 'Max', age: 28 },
      { name: 'Manu', age: 15 },
      { name: 'Alexa', age: 22 }
    ],
    otherState: 'some other value',
    showPersons: false
  }

  // switchNameHandler = (newName) => {
  //   // console.log('Was clicked!');
  //   this.setState({
  //     persons: [
  //       { name: newName, age: 28 },
  //       { name: 'Manu', age: 25 },
  //       { name: 'Alexa', age: 30 }
  //     ]
  //   })
  // }

  // deletes the rendered Person component that is clicked on
  deletePersonHandler = (personIndex) => {
    // point the const person array to the state.persons
    const persons = this.state.persons;
    // create new spliced version of the person array
    persons.splice(personIndex, 1);
    // assign the updated state.persons info to the array persons
    this.setState({ persons: persons });
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: 'Max', age: 28 },
        { name: event.target.value, age: 25 },
        { name: 'Alexa', age: 30 }
      ]
    })
  }

  // correctly swith the state
  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    // if showPersons is ture, doesShow will be set as false and merge with showPersons
    this.setState({ showPersons: !doesShow });
  }

  render() {
    // defining inline styles
    const styleX = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }

    let persons = null;
    if (this.state.showPersons) {
      persons = (
        < div >
          {this.state.persons.map((person, index) => {
            return <Person
              click={() => this.deletePersonHandler(index)}
              name={person.name}
              age={person.ate} />
          })}
          {/* <Person
            name={this.state.persons[0].name}
            age={this.state.persons[0].age} />
          <Person
            name={this.state.persons[1].name}
            age={this.state.persons[1].age}
            // passing methods as props which changes the state in another component that doesn't have acces to the state
            click={this.switchNameHandler.bind(this, 'Max!!')}
            changed={this.nameChangedHandler}>My hobbies are: Coding React</Person>
          <Person
            name={this.state.persons[2].name}
            age={this.state.persons[2].age} /> */}
        </div>
      );
    }

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button
          // applying inline style
          style={styleX}
          onClick={this.togglePersonsHandler}>Toggle Persons</button>

        {/* onClick={this.switchNameHandler.bind(this, 'Maximilian')}>Switch Name</button> */}
        {/* or */}
        {/* <button onClick={ () => this.switchNameHandler('Maximilian')}>Switch Name</button> */}
        {/* this.state.showPersons ? */
          //   { < div >
          //   <Person name={this.state.persons[0].name}
          //     age={this.state.persons[0].age} />
          //   <Person name={this.state.persons[1].name}
          //     age={this.state.persons[1].age}
          //     // passing methods as props which changes the state in another component that doesn't have acces to the state
          //     click={this.switchNameHandler.bind(this, 'Max!!')}
          //     changed={this.nameChangedHandler}>My hobbies are: Coding React</Person>
          //   <Person name={this.state.persons[2].name}
          //     age={this.state.persons[2].age} />
          // </div>  }
          //  : null 
        }
        {persons}
      </div>
    );
    // this is how it compiles the above text
    // return React.createElement('div', null, React.createElement('h1', {className: 'App'}, 'Hi, I\'m a React App!!'));
  }
}

// Es6 way of building components: (react Hooks)
// const App = (props) => {
//   const [personsState, setPersonsState] = useState({
//     persons: [
//       { name: 'Max', age: 28 },
//       { name: 'Manu', age: 15 },
//       { name: 'Alexa', age: 22 }
//     ]
//   });

//   // to prevent data to be lost during an update (as is the case with switchNameHandler) we have to break up our jsx with multiple useState to retain info
//   // to update this value we have to use the property setOtherState
//   const [otherState, setOtherState] = useState('some other value');
//   console.log(personsState, otherState);

//   // updating personState using setPersonsState. Once updated setPersonState becomes the default, deleting the prevous version
//   const switchNameHandler = () => {
//     setPersonsState({
//       persons: [
//         { name: 'Maximilian', age: 28 },
//         { name: 'Manu', age: 25 },
//         { name: 'Alexa', age: 30 }
//       ]
//     });
//   };

//   return (
//     <div className="App">
//       <h1>Hi, I'm a React App</h1>
//       <p>This is really working!</p>
//       <button onClick={switchNameHandler()}>Switch Name</button>
//       <Person
//         name={personsState.persons[0].name}
//         age={personsState.persons[0].age} />
//       <Person
//         name={personsState.persons[1].name}
//         age={personsState.persons[1].age}
//         >My hobbies are: Coding React</Person>
//       <Person
//         name={personsState.persons[2].name}
//         age={personsState.persons[2].age} />
//     </div>
//   );
// }

export default App;
