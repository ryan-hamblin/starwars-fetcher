import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      peeps: []
    };
  }
  componentDidMount() {
    fetch('https://swapi.co/api/people')
      .then(json => {
        return json.json();
      })
      .then(starWarsChars => {
        this.setState({ peeps: starWarsChars.results });
      })
      .catch(err => {
        console.log(err);
      });
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to Ryan's App</h1>
        </header>
        <ul>
          {this.state.peeps.map(person => {
            return <li>{person.name}</li>;
          })}
        </ul>
      </div>
    );
  }
}

export default App;
