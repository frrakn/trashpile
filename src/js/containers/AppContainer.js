import React, { Component, PropTypes } from 'react';
import App from '../components/App';
import { connect } from 'react-redux';
import { updateGame, updateTime, updateState, setGameContext } from '../actions/index';
import { updateTeam } from '../actions/teams';
import { updatePlayer } from '../actions/players';
import WebsocketConnection from '../util/websocketConnection';
import fetchContext from '../util/context';

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
    selectedGameId: selectedGameId,
    stats: state.stats,
    gameTime: state.gameTime
  };
}

const statBlackList = [
  'x', 'y', 'xp', 'teamId'
];

function mapDispatchToProps(dispatch) {
  return {
    updateGameTime: gameTime => (e) => dispatch(updateTime(gameTime)),
    setGameContext: function(context) {
      dispatch(setGameContext(context));
      return context;
    },
    handleMessage: function(statsMap) {
      return function(message) {
        const stat = statsMap.filter((stat) => stat.id === message.statid)[0];

        if (statBlackList.includes(stat.name)) {
          return;
        }

        if (message.teamid) {
          dispatch(updateTeam(message, stat, message.jsonvalue));
        } else if (message.playerid) {
          dispatch(updatePlayer(message, stat, message.jsonvalue));
        }
      }
    }
  };
}

class Container extends React.Component {
  componentDidMount() {
    fetchContext(70)
      .then((context) => this.props.setGameContext(context))
      .then(function(context) {
        const url = 'ws://52.207.220.185:9721/',
        ws = new WebsocketConnection(url,
          this.props.handleMessage(this.props.stats),
          {debug: false}
        );

        ws.connect();
      }.bind(this))
  }

  render() {
    return (
      <div className="app-container">
        <App
          {...this.props}
        />
      </div>
    );
  }
}

export const AppContainer = connect(mapStateToProps, mapDispatchToProps)(Container);
