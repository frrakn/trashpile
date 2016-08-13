import React, { Component, PropTypes } from 'react';
import Header from './Header';
import TeamStats from './TeamStats';
import PlayerStats from './PlayerStats';
import Player from './Player';

function teamKills(team, players) {
  return players.reduce(function(kills, player) {
      return player.teamId !== team.id ? kills :
        kills + player.kills;
    }
  , 0);
}

export default function Game(props) {
  const { game, gameTime, teams, players } = props;

  return (
    <div>
      <Header
        gameTime={gameTime}
        kills={teams.map((team) => teamKills(team, players))}
      />

      <TeamStats
        teams={teams}
      />

      <PlayerStats
        teamIds={teams.map((team) => team.id)}
        players={players}
      />

    </div>
  );
}