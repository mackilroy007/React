import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Max', age: 28 },
      { name: 'Manu', age: 15 },
      { name: 'Alexa', age: 22 }
    ]
  }

  switchNameHandler = () => {
    // console.log('Was clicked!');
    this.setState({
      persons: [
        { name: 'Maximilian', age: 28 },
        { name: 'Manu', age: 25 },
        { name: 'Alexa', age: 30 }
      ]
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>My hobbies are: Coding React</Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
      </div>
    );
    // this is how it compiles the above text
    // return React.createElement('div', null, React.createElement('h1', {className: 'App'}, 'Hi, I\'m a React App!!'));
  }
}

export default App;
