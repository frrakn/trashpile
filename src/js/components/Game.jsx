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
  const { game, teams, players } = props;

  return (
    <div>
      <Header
        gameTime={game.gameTime}
        redTeamKills={teamKills(teams[0], players)}
        redTeamName={teams[0].name}
        blueTeamKills={teamKills(teams[1], players)}
        blueTeamName={teams[1].name}
      />

      <div className="stream-container">
        <iframe
          className="stream-iframe"
          src={"http://player.twitch.tv/?channel=${nalcs1}"}
          height={"360"}
          frameBorder={"0"}
          scrolling={"no"}
          allowFullScreen={"true"}
        />

        <TeamStats
          redTeam={teams[0]}
          blueTeam={teams[1]}
          players={players}
        />
      </div>

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