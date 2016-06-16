import React, { Component, PropTypes } from 'react';
import Header from './Header';
import TeamStats from './TeamStats';
import PlayerStats from './PlayerStats';
import Player from './Player';

export default function App (props) {
  const { gameTime, teams, players, updateGameTime } = props;

  return (
    <div className="app-component">
      <Header
        gameTime={gameTime}
        kills={[teams[0].kills, teams[1].kills]}
        handleClick={updateGameTime}
      />

      <TeamStats
        teams={teams}
      />

      <PlayerStats
        players={players}
      />

      {players.map(function(player) {
        return (
          <Player
            player={player}
          />
        );
      })}
    </div>
  );
}
