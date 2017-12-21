import React from 'react';
import classes from './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';

const API_URL = process.env.REACT_APP_API_URL;
 
const navigationItems = () => (
  <ul className={classes.NavigationItems}>
    <NavigationItem link="/" active>Home</NavigationItem>
    <NavigationItem link="/" active>Lesson</NavigationItem>
    <NavigationItem link="/" active>Admin</NavigationItem>
    <NavigationItem link="/" active>Students</NavigationItem>
    <NavigationItem link="/" active>Teachers</NavigationItem>
    <NavigationItem link="/" active>Resources</NavigationItem>
  </ul>
)
export default navigationItems;
