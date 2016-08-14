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
        redTeamKills={teamKills(teams[0], players)}
        redTeamName={teams[0].name}
        blueTeamKills={teamKills(teams[1], players)}
        blueTeamName={teams[1].name}
      />

      <TeamStats
        teams={teams}
        players={players}
      />

      <PlayerStats
        redTeam={teams[0]}
        blueTeam={teams[1]}
        players={players}
      />

      {players.map(function(player) {
        return (
          <Player
            key={player.id}
            player={player}
          />
        );
      })}

    </div>
  );
}