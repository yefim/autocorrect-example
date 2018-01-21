import React, { Component } from 'react';
import autocorrect from 'autocorrect';
import logo from './logo.svg';
import './App.css';

const a = autocorrect({words: ['dog', 'cat']});

class App extends Component {
  constructor() {
    super();
    this.state = {text: ''};
  }

  render() {
    return (
      <div className="App">
        <input
          placeholder="Enter text to be corrected to either dog or cat"
          type="text"
          value={this.state.text}
          onChange={(e) => { this.setState({text: e.target.value}); }}
        />
        <p>{a(this.state.text)}</p>
      </div>
    );
  }
}

export default App;
