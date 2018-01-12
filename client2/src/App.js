import React, { Component } from 'react';
import MainNav from './UI/MainNav/MainNav'
import 'bootstrap/dist/css/bootstrap.css';
// import Layout from './UI/Layout/Layout'
import { Container, Row, Col } from 'reactstrap';

class App extends Component {
  render() {
    return (
      <Container>
        <MainNav />
      </Container>);
  }
}

export default App;
