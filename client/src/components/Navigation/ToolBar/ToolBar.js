import React from 'react';
import classes from './ToolBar.css';
import Logo from '../../../assets/images/logo.png';
import Aux from '../../../hoc/Aux/Aux';
import NavigationItems from '../NavigationItems/NavigationItems';

 
// import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';

const toolBar = (props) => (
  <Aux>
    <header className={classes.Toolbar}>
      {/* <DrawerToggle clicked={props.drawerToggleClicked}/> */}
      {/* <div className={classes.Logo}> */}
      <nav className={classes.DesktopOnly}>
        <NavigationItems />
      </nav>
      <div>
         <img src={Logo} height="50px" alt="app-logo"/>
      </div>
    </header>
  </Aux>
)

export default toolBar;
