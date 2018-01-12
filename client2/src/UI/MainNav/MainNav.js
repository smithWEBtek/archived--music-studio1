import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom'
import styles from './MainNav.css'
import Logo from '../../assets/images/logo.png';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  // NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';

import Students from '../../containers/Students/Students'
// import Teachers from '../../Teachers/Teachers'
// import Lessons from '../../../containers/Lessons/Lessons'
// import Resources from '../../Resources/Resources'


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
      <div>
        <Navbar className={styles.MainNav} light expand="md">
          <NavbarBrand link="/">piano-student</NavbarBrand>
          <div>
            <img src={Logo} height="50px" className={styles.Logo} alt="app-logo" />
          </div>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
            
              <NavItem>
                <Link to='/students/' className={[styles.Item, 'text-white'].join(' ')}>students</Link>
              </NavItem>
              
              <NavItem>
                <Link to='/teachers/' className={[styles.Item, 'text-white'].join(' ')}>teachers</Link>
              </NavItem>
            
              <NavItem>
                <Link to='/resources/' className={[styles.Item, 'text-white'].join(' ')}>resources</Link>
              </NavItem>
            
              <NavItem>
                <Link to='/lessons/' className={[styles.Item, 'text-white'].join(' ')}>lessons</Link>
              </NavItem>
    
 
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
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
        <div>
          <Route path="/" exact render={() => <div><h5>Welcome Dorothy, have you been practicing?</h5><p>...and where is Toto?</p></div>} />
          <Route path="/students" exact component={Students} />

          {/* <Route path="/teachers" exact component={Teachers} />
          <Route path="/lessons" exact component={Lessons} />
          <Route path="/resources" exact component={Resources} /> */}
        </div>
      </div >
    );
  }
}

export default MainNav