import React, { Component, PropTypes } from 'react';
import Header from './Header';
import TeamStats from './TeamStats';

export default function App (props) {
  const { kills, gameTime } = props;

  return (
    <div className="app-component">
      <Header
        gameTime={gameTime}
        kills={kills}
      />

      <TeamStats />
    </div>
  );
}
