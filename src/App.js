import React, { Component } from 'react';
import './App.css';

import Navigation from './components/Navigation'

class App extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <div id="main">
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default App;
