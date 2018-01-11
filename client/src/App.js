import React, { Component } from 'react';
import ToolBar from './components/Navigation/ToolBar/ToolBar';
import 'bootstrap/dist/css/bootstrap.css';
import NavBar from './components/Navigation/NavBar/NavBar'


class App extends Component {
  render() {
    return (
      <div>
        <ToolBar /><br />
        <NavBar />
      </div>
    );
  }
}

export default App;
