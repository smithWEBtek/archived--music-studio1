import React from 'react';
import classes from './Keyboard.css';

const keyboard = (props) => (
  <div className={classes.Keyboardcontainer}>
    <p>Keyboard</p>
    <ul className={classes.set}>
      <li className={[classes.white, classes.b].join(' ')}></li>
      <li className={[classes.black, classes.as].join(' ')}></li>
      <li className={[classes.white, classes.a].join(' ')}></li>
      <li className={[classes.black, classes.gs].join(' ')}></li>
      <li className={[classes.white, classes.g].join(' ')}></li>
      <li className={[classes.black, classes.fs].join(' ')}></li>
      <li className={[classes.white, classes.f].join(' ')}></li>
      <li className={[classes.white, classes.e].join(' ')}></li>
      <li className={[classes.black, classes.ds].join(' ')}></li>
      <li className={[classes.white, classes.d].join(' ')}></li>
      <li className={[classes.black, classes.cs].join(' ')}></li>
      <li className={[classes.white, classes.c].join(' ')}></li>
    </ul>
  </div>
)
export default keyboard;