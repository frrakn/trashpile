import {UPDATE_GAME, SET_CONTEXT} from '../actions/index';
import players from './players';
import teams from './teams';

const gameSchema = {
  id: -1,
  gameTime: 0,
  teamIds: []
}

export default function games(state = [], action) {
  switch (action.type) {
    case SET_CONTEXT:
      return [
        ...state,
        Object.assign({}, gameSchema, {
          id: action.context.game.GameID,
          teamIds: [action.context.game.BlueTeamID, action.context.game.RedTeamID]
        })
      ];
    default:
      return state;
  }
}
