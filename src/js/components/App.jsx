import React, { Component, PropTypes } from 'react';
import Game from './Game';

export default function App(props) {
  const { selectedGameId, games, teams, players } = props,
    game = games.filter((game) => game.id === selectedGameId)[0];

  return (
    <div className="app-component">
      {game &&
        <Game
          game={game}
          teams={teams.filter((team) => game.teamIds.includes(team.id))}
          players={players.filter((player) => game.playerIds.includes(player.id))}
        />
      }
    </div>
  );
}
