import React, { Component, PropTypes } from 'react';
import App from '../components/App';
import { connect } from 'react-redux';
import { updateTime, updateState } from '../actions/index';

function getTeamKills(players) {
  return players.reduce(function(kills, player) {
    return kills + player.kills;
  }, 0);
}

function getTeamTotalGold(players) {
  return (players.reduce(function(tg, player) {
    return tg + player.tg;
  }, 0) / 1000).toFixed(2) + 'k';
}

function formatTeamStats(team, players) {
  return Object.assign(team, {
    kills: getTeamKills(players),
    gold: getTeamTotalGold(players)
  });
}

function mapStateToProps(state) {
  let selectedGameId = state.games.length > 0 ? state.games[0].id : null;

  return {
    players: state.players,
    teams: state.teams,
    games: state.games,
    selectedGameId: selectedGameId
  };
}

function mapDispatchToProps(dispatch) {
  return {
    updateGameTime: gameTime => (e) => dispatch(updateTime(gameTime)),
    setGameState: state => dispatch(updateState(state))
  };
}

function Container(props) {
  return (
    <div className="app-container">
      <App
        {...props}
      />
    </div>
  );
}

export const AppContainer = connect(mapStateToProps, mapDispatchToProps)(Container);
