import players from './players';
import teams from './teams';
import games from './games';
import gameTime from './gameTime';
import stats from './stats';
import { combineReducers } from 'redux';

export default combineReducers({
  games,
  players,
  teams,
  gameTime,
  stats
});
