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
          <NavbarBrand href="/">SmithPianoServices</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/components/">Components</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/students">Students</NavLink>
                <NavLink href="/lessons">Lessons</NavLink>
                <NavLink href="/teachers">Teachers</NavLink>
                <NavLink href="/resources">Resources</NavLink>
              </NavItem>
              <UncontrolledDropdown nav innavbar="true">
                <DropdownToggle nav caret>
                  Options
                </DropdownToggle>
                <DropdownMenu >
                  <DropdownItem>
                    Option 1
                  </DropdownItem>
                  <DropdownItem>
                    Option 2
                  </DropdownItem>
                  <DropdownItem>
                    Option 3
                  </DropdownItem>
                  <DropdownItem>
                    Option 4
                  </DropdownItem>
                  <DropdownItem>
                    Option 5
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    Add Student
                  </DropdownItem>
                  <DropdownItem>
                    Add Teacher
                  </DropdownItem>
                  <DropdownItem>
                    Add Lesson
                  </DropdownItem>
                  <DropdownItem>
                    Add Resource
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