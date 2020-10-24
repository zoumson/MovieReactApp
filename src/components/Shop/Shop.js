import React from 'react';
import HandleMovie from './HandleMovie';
import './Shop.css';

const Shop = (props) => {
  const { log } = props;
  return (
    <div>
      <h3 style={{ marginTop: '50px' }}>Find an interesting movie...</h3>
      <HandleMovie log={log} />
    </div>
  );
};

export default Shop;
