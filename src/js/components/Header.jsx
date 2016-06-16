import React, { Component, PropTypes } from 'react';
import Timer from './Timer';
import TeamScore from './TeamScore';

export default function Header (props) {
  const { gameTime, kills, handleClick } = props;

  return (
    <div className="header-component container"
      onClick={handleClick(gameTime + 1)}
    >
      <TeamScore
        color={'red'}
        kills={kills[0]}
      />

      <Timer
        gameTime={gameTime}
      />

      <TeamScore
        color={'blue'}
        kills={kills[1]}
      />
    </div>
  );
}
