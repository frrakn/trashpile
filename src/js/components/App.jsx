import React, { Component, PropTypes } from 'react';
import Game from './Game';

export default function App(props) {
  const { gameTime, selectedGameId, games, teams, players, stats } = props,
    selectedGame = games.filter((game) => game.id === selectedGameId)[0],
    selectedTeams = teams.filter((team) => selectedGame.teamIds.includes(team.id)),
    selectedTeamsIds = selectedTeams.map((team) => team.id),
    selectedPlayers = players.filter((player) => selectedTeamsIds.includes(player.teamId));

  return (
    <div className="app-component">
      {selectedGame &&
        <Game
          gameTime={gameTime}
          game={selectedGame}
          teams={selectedTeams}
          players={selectedPlayers}
        />
      }
    </div>
  );
}
