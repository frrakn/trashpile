import { connect } from 'react-redux';
import App from '../components/App';
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
  if (state.skipFormatting) {
    return state;
  }

  var players = Object.keys(state.playerStats).map(key => state.playerStats[key]);
  var team1 = players.slice(0, 5);
  var team2 = players.slice(5, 10);

  return {
    gameTime: state.t,
    teams: [
      formatTeamStats(state.teamStats['100'], team1),
      formatTeamStats(state.teamStats['200'], team2)
    ],
    players: players
  };
}

function mapDispatchToProps(dispatch) {
  return {
    updateGameTime: gameTime => (e) => dispatch(updateTime(gameTime)),
    setGameState: state => dispatch(updateState(state))
  };
}

export const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);
