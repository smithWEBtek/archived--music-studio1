import React from 'react';
import classes from './Resource.css';

const Resource = (props) => {
  debugger
  let resourcesList = (
    props.resources.map((res, index) => {
      return (
        <div key={index}>
          <p>Title: {res.title}</p>
          <p>Category: {res.category}</p>
          <p>Description: {res.description}</p>
          <p>Format: {res.format}</p>
          <p>Location: {res.location}</p>
          <button onClick={props.close}>Close</button>
        </div>
      )
    })
  )

  return (
    <div className={classes.Resource}>
      {resourcesList}
    </div>
  )
}


export default Resource;
