import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import AppNavbar from './components/layout/AppNavbar'
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <AppNavbar />
          <div class="container">
            <h1>This is gonna be da big one</h1>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
