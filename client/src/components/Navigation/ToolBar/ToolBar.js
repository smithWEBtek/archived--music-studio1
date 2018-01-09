import React from 'react';
import classes from './ToolBar.css';
import Logo from '../../../assets/images/logo.png';
import Aux from '../../../hoc/Aux/Aux';
import NavigationItems from '../NavigationItems/NavigationItems';

const toolBar = (props) => (
  <Aux>
    <header className={classes.Toolbar}>
      <nav className={classes.DesktopOnly}>
        <NavigationItems />
      </nav>
      <div>
        <img src={Logo} height="50px" alt="app-logo" />
      </div>
    </header>
  </Aux>
)

export default toolBar;
