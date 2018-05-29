import React, { Component } from 'react';
import getEndpoint from 'helpers/blog';
import './App.css';

class App extends Component {
  render() {
    console.log(getEndpoint('posts'));
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
