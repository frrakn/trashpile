import {UPDATE_GAME, SET_CONTEXT} from '../actions/index';
import players from './players';
import teams from './teams';

const gameSchema = {
  id: -1,
  gameTime: 0,
  teamIds: []
}

export default function games(state = [], action) {
  if (action.payload && action.payload.timestamp) {

    const gameId = +action.payload.gameid;
    const index = state.findIndex((game) => game.id === gameId);

    if (index !== -1) {
      state = [
        ...state.slice(0, index),
        Object.assign({}, state[index], {
          gameTime: action.payload.timestamp
        }),
        ...state.slice(index + 1)
      ];
    }
  }

  switch (action.type) {
    case SET_CONTEXT:
      return [
        Object.assign({}, gameSchema, {
          id: action.context.game.GameID,
          gameTime: 0,
          teamIds: [action.context.game.BlueTeamID, action.context.game.RedTeamID]
        }),
        ...state
      ];
    default:
      return state;
  }
}
