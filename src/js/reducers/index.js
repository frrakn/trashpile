import players from '../reducers/players';
import teams from '../reducers/teams';
import games from '../reducers/games';
import { combineReducers } from 'redux';

export default combineReducers({
  games,
  players,
  teams
});
