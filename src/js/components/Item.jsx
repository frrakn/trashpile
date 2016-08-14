import React, { Component, PropTypes } from 'react';
import itemMap from '../schema/Items';
import shallowCompare from 'react-addons-shallow-compare';

class Item extends React.Component {
  shouldComponentUpdate(nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState);
  }

  render() {
    const item = itemMap[this.props.item];

    let style = {
      background: item ? item.image : 'none'
    };

    return (
      <div
        className="item"
        style={style}
      />
    );
  }
}

export default Item;