import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom'
import styles from './MainNav.css'
import Logo from '../../assets/images/logo2.png';
import {
  Container,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem
  // NavLink,
  // UncontrolledDropdown,
  // DropdownToggle,
  // DropdownMenu,
  // DropdownItem
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
            <img src={Logo} height="60px" className={styles.Logo} alt="app-logo" />
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

              {/* <NavItem>
                <NavLink to='/lessons/' className={[styles.Item, 'text-white'].join(' ')}>_login</NavLink>
              </NavItem> */}
              {/* 
              <UncontrolledDropdown nav innavbar="true">
                <DropdownToggle nav caret className={[styles.Item, 'text-white'].join(' ')}>
                  START
                </DropdownToggle>
                <DropdownMenu >
                  <DropdownItem>
                    Login
                  </DropdownItem>
                  <DropdownItem>
                    Register
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    Donate
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown> */}
            </Nav>
          </Collapse >
        </Navbar >
        <div>
          <Route path="/" exact render={() => (
            <div>
              <hr /><hr /><hr /><hr /><hr />
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