import idGenerator from '../util/idGenerator';
import {teamSchema} from '../reducers/teams';

export const ADD_TEAM = 'ADD_TEAM';
export const REMOVE_TEAM = 'REMOVE_TEAM';
export const UPDATE_TEAM = 'UPDATE_TEAM';

export function updateTeam(payload, stat, value) {
  return {
    type: UPDATE_TEAM,
    payload: payload,
    stat: stat,
    value: value
  }
}

export function addTeam(team) {
  return {
    type: ADD_TEAM,
    team: Object.assign({}, teamSchema, {
      id: idGenerator()
    })
  }
}

export function removeTeam(id) {
  return {
    type: REMOVE_TEAM,
    id: id
  }
}
