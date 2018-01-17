import React from 'react';
import './Spinner.css';
import LogoSpin from '../../assets/images/LogoSpin.png'
import styles from './Spinner.css'

const spinner = () => {
  return (
    <div className={styles.Center}>
      <p className="Loader">Loading...</p>
      <img src={LogoSpin} height="200px" className={styles.LogoSpin} alt="app-logo" />
    </div>
  )
}

export default spinner;
