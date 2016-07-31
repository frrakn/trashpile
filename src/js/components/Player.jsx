import React, { Component, PropTypes } from 'react';
import Item from './Item';

const Player = function(props) {
  return (
    <div className="player">
      <div
        className="player-portrait"
        style={{backgroundImage: `url('//ddragon.leagueoflegends.com/cdn/6.12.1/img/champion/${props.player.championName}.png')`}}
      />
      <div className="player-body">
        <div className="name">
          {props.player.summonerName}
          <span className="champ-name">
            {props.player.championName}
          </span>
        </div>
        <div>
          {props.player.items.map(function(item) {
            return (
              <Item
                key={item.name}
                item={item}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Player;