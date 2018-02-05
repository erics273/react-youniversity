import React, { Component } from 'react';
import './App.css';

import Navigation from './components/Navigation'
import FlashContainer from "./containers/Flash";

class App extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <div id="main" className="container">
          <FlashContainer />
            {this.props.children}
        </div>
      </div>
    );
  }
}

export default App;
