import React from 'react';
import styles from './Nav.css'
import Logo from '../../assets/images/logo.png';
import Aux from '../../hoc/Aux/Aux'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';

import { Route } from 'react-router-dom'
import Students from '../../containers/Students/Students'
// import Teachers from '../../Teachers/Teachers'
// import Lessons from '../../../containers/Lessons/Lessons'
// import Resources from '../../Resources/Resources'


export default class Example extends React.Component {
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
        <Navbar className={styles.Nav} light expand="md">
          <NavbarBrand link="/">piano-student</NavbarBrand>
          <div>
            <img src={Logo} height="50px" className={styles.Logo} alt="app-logo" />
          </div>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink link="/students/" className={[styles.Item, 'text-white'].join(' ')}>students</NavLink>
              </NavItem>
              <NavItem>
                <NavLink link="/teachers/" className={[styles.Item, 'text-white'].join(' ')}>teachers</NavLink>
              </NavItem>
              <NavItem>
                <NavLink link="/resources/" className={[styles.Item, 'text-white'].join(' ')}>resources</NavLink>
              </NavItem>
              <NavItem>
                <NavLink link="/lessons/" className={[styles.Item, 'text-white'].join(' ')}>lessons</NavLink>
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
          {/* <Route path="/students" exact component={Students} /> */}
          <Route path="/students" component={Students} />
          {/* <Route path="/teachers" exact component={Teachers} />
          <Route path="/lessons" exact component={Lessons} />
          <Route path="/resources" exact component={Resources} /> */}
        </div>
      </div >
    );
  }
}