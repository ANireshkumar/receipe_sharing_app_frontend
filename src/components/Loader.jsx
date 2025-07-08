import React from 'react';
import loadingGif from '../assets/giphy.gif';

const Loader = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <img src={loadingGif} alt="Loading..." />
    </div>
  );
};

export default Loader;