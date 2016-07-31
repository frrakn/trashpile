import React, { Component, PropTypes } from 'react';
import itemMap from '../schema/Items';

function backgroundImage(item) {
  return itemMap[item] ? itemMap[item].image : null;
}

const Item = function(props) {
  const { item } = props;
  let style = {
    background: backgroundImage(item) || 'none'
  };

  return (
    <div
      id={item.name}
      className="item"
      style={style}
    />
  );
}

export default Item;