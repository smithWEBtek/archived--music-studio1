import React from 'react';
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
import Students from '../../../containers/Students/Students'
import Teachers from '../../Teachers/Teachers'
import Lessons from '../../../containers/Lessons/Lessons'
import Resources from '../../Resources/Resources'


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
        <Navbar color="faded" light expand="md">
          <NavbarBrand link="/">pianoStudent</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink link="/students/">Students</NavLink>
              </NavItem>
              <NavItem>
                <NavLink link="/teachers/">Teachers</NavLink>
              </NavItem>
              <NavItem>
                <NavLink link="/resources/">Resources</NavLink>
              </NavItem>
              <NavItem>
                <NavLink link="/lessons/">Lessons</NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
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
      </div>
    );
  }
}