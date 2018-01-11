import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Nav from './UI/Nav/Nav'
import Layout from './UI/Layout/Layout'

class App extends Component {
  render() {
    return (
      <div>
        <Nav />
        <Layout />
      </div>
    );
  }
}

export default App;
