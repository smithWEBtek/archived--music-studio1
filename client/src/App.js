import React, {Component} from 'react';
// import Layout from './hoc/Layout/Layout';
import ToolBar from './components/Navigation/ToolBar/ToolBar';
import { BrowserRouter } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <ToolBar /><br />
          {/* <Layout /> */}
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
