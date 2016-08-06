import idGenerator from '../util/idGenerator';
import {playerSchema} from '../reducers/players';

export const ADD_PLAYER = 'ADD_PLAYER';
export const REMOVE_PLAYER = 'REMOVE_PLAYER';

export function addPlayer(player, teamId) {
  return {
    type: ADD_PLAYER,
    player: Object.assign({}, playerSchema, {
      id: idGenerator(),
      teamId: teamId
    })
  }
}

export function removePlayer(id) {
  return {
    type: REMOVE_PLAYER,
    id: id
  }
}
