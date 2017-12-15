import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import logo from './logo.svg';
import router from './router.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        {router}
      </div>
    );
  }
}

export default withRouter(App);