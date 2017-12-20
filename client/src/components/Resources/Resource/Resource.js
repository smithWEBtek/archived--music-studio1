import React from 'react';
import classes from './Resource.css';

const resource = (props) => (
  <div className={classes.Resource}>
    <fieldset>
      <p className={classes.Resource}>Title: {props.resource.title}</p>
      <p className={classes.Resource}>Category: {props.resource.category}</p>
      <p className={classes.Resource}>Description: {props.resource.description}</p>
      <p className={classes.Resource}>Format: {props.resource.format}</p>
      <p className={classes.Resource}>Location: {props.resource.location}</p>
      <button onClick={props.close}>Close</button>
    </fieldset>
  </div>
)

export default resource;
