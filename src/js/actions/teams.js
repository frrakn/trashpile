import idGenerator from '../util/idGenerator';
import {teamSchema} from '../reducers/teams';

export const ADD_TEAM = 'ADD_TEAM';
export const REMOVE_TEAM = 'REMOVE_TEAM';

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
