import React from 'react';
import classes from './Resource.css';

const Resource = (props) => {

  return (
    <div key={props.id}>
      <p>Title: {props.title}</p>
      <p>Category: {props.category}</p>
      <p>Description: {props.description}</p>
      <p>Format: {props.format}</p>
      <p>Location: {props.location}</p>
      <button onClick={props.close}>Close</button>
    </div>
  )
}

export default Resource;
