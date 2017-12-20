import React, {Component} from 'react';
import Layout from './hoc/Layout/Layout';
import ToolBar from './components/Navigation/ToolBar/ToolBar';

class App extends Component {
  render() {
    return (
      <div>
        <ToolBar /><br />
        <Layout />
      </div>
    );
  }
}

export default App;
