import React, { Component, PropTypes } from 'react';
import Timer from './Timer';
import TeamScore from './TeamScore';

export default function Header (props) {
  const { kills, gameTime } = props;

  return (
    <div className="header-component">
      <TeamScore
        color={'red'}
        kills={kills}
      />

      <Timer
        gameTime={gameTime}
      />

      <TeamScore
        color={'blue'}
        kills={kills}
      />
    </div>
  );
}
