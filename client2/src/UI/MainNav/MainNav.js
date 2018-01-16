import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom'
import Aux from '../../hoc/Aux/Aux'
import styles from './MainNav.css'
import LogoSpin from '../../assets/images/LogoSpin.png';
import Logo from '../../assets/images/Logo.png';
import {
  Container,
  Col,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Row
} from 'reactstrap';

import Students from '../../containers/Students/Students'
import Teachers from '../../containers/Teachers/Teachers'
import Lessons from '../../containers/Lessons/Lessons'
import Resources from '../../containers/Resources/Resources'

class MainNav extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <Container>
        <Navbar className={styles.MainNav} light expand="md">
          <div>
            <Link to='/'><img src={LogoSpin} height="60px" className={styles.LogoSpin} alt="app-logo" /></Link>
          </div>
          <NavbarBrand><h4>pianoStudent</h4></NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem><Link to='/students/' className={styles.Item}>students</Link></NavItem>
              <NavItem><Link to='/teachers/' className={styles.Item}>teachers</Link></NavItem>
              <NavItem><Link to='/resources/' className={styles.Item}>resources</Link></NavItem>
              <NavItem><Link to='/lessons/' className={styles.Item}>lessons</Link></NavItem>
            </Nav>
          </Collapse>
        </Navbar >
        <div>
          <Route path="/" exact render={() => (
            <div className={styles.Center}>
              <h3>II III II III II III II III II III II III II</h3>
              <h5>Welcome, how is your practice going?</h5>
              <img src={Logo} height="150px" className={styles.Logo} alt="app-logo" /><br />
              <div><hr /> <hr /> <hr /> <hr /> <hr /></div>
            </div>
          )} />
          <Route path="/students" component={Students} />
          <Route path="/teachers" component={Teachers} />
          <Route path="/lessons" component={Lessons} />
          <Route path="/resources" component={Resources} />
        </div>
      </Container >
    );
  }
}

export default MainNav
