import idGenerator from '../util/idGenerator';
import {playerSchema} from '../reducers/players';

export const ADD_PLAYER = 'ADD_PLAYER';
export const REMOVE_PLAYER = 'REMOVE_PLAYER';
export const UPDATE_PLAYER = 'UPDATE_PLAYER';

export function updatePlayer(payload, stat, value) {
  return {
    type: UPDATE_PLAYER,
    payload: payload,
    stat: stat,
    value: value
  }
}

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
