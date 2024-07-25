import React from 'react';
import { assets } from '../../assets/assets.js';

const Loader = () => {
  return (
    <div style={styles.loaderContainer}>
      <img src={assets.loader} alt="Loading..." style={styles.loader} />
    </div>
  );
};

const styles = {
  loaderContainer: {
    position: 'fixed',
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255)',
    zIndex: 1000,
  },
  loader: {
    width: '150px', // Adjust as needed
    height: '150px', // Adjust as needed
  },
};

export default Loader;
