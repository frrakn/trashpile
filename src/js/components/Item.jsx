import React, { Component, PropTypes } from 'react';
import itemMap from '../schema/Items';

const Item = function(props) {
  return (
    <div
      className="item"
      style={{background: itemMap[props.item].image}}
    >
    </div>
  );
}

export default Item;