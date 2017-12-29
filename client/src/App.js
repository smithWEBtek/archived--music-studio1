import React, { Component } from 'react';
import ToolBar from './components/Navigation/ToolBar/ToolBar';
import { BrowserRouter } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <ToolBar /><br />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
