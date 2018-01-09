import React from 'react';
import classes from './NavigationItem.css';
import { NavLink, withRouter } from 'react-router-dom';

const navigationItem = (props) => (
  <li className={classes.NavigationItem}>
    <NavLink 
      to={{pathname: props.link}} 
      exact 
      className={props.active ? classes.active : null}
      activeClassName="my-active"
      activeStyle={{
        color: '#2d3d1a',
        fontStyle: 'normal'
      }}
      >{props.children}</NavLink>
  </li>
)

export default withRouter(navigationItem);