import players from './players';
import teams from './teams';
import games from './games';
import gameTime from './gameTime';
import { combineReducers } from 'redux';

export default combineReducers({
  games,
  players,
  teams,
  gameTime
});
