import React, { Component, PropTypes } from 'react';
import Item from './Item';
import shallowCompare from 'react-addons-shallow-compare';
import idGenerator from '../util/idGenerator';

class Player extends React.Component {
  shouldComponentUpdate(nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState);
  }

  render() {
    const {name, championName, items} = this.props.player;

    return (
      <div className="player">
        <div
          className="player-portrait"
          style={{backgroundImage: `url('//ddragon.leagueoflegends.com/cdn/6.12.1/img/champion/${championName}.png')`}}
        />
        <div className="player-body">
          <div className="name">
            {name}
            <span className="champ-name">
              {championName}
            </span>
          </div>
          <div className="items">
            {items.map(function(item, i) {
              return (
                <Item
                  key={item + i}
                  item={item}
                />
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default Player;