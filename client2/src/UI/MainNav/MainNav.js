import React, { Component } from 'react';
import { Route, NavLink, Link } from 'react-router-dom'
import styles from './MainNav.css'
import LogoSpin from '../../assets/images/LogoSpin.png';
import Logo from '../../assets/images/Logo.png';
import {
  Container,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem
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
          <NavbarBrand>pianoStudent</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>

              <NavItem>
                <NavLink to='/students/' className={[styles.Item, 'text-white'].join(' ')}>students_</NavLink>
              </NavItem>

              <NavItem>
                <NavLink to='/teachers/' className={[styles.Item, 'text-white'].join(' ')}>_teachers_</NavLink>
              </NavItem>

              <NavItem>
                <NavLink to='/resources/' className={[styles.Item, 'text-white'].join(' ')}>_resources_</NavLink>
              </NavItem>

              <NavItem>
                <NavLink to='/lessons/' className={[styles.Item, 'text-white'].join(' ')}>_lessons</NavLink>
              </NavItem>
            </Nav>
          </Collapse >
        </Navbar >
        <div>
          <Route path="/" exact render={() => (
            <div>
              <hr /><hr /><hr /><hr /><hr />
              <img src={Logo} height="150px" className={styles.Logo} alt="app-logo" />
              <h5>Welcome, how is your practice going this week?</h5>
              <hr /><hr /><hr /><hr /><hr />
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
