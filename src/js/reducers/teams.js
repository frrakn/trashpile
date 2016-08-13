import idGenerator from '../util/idGenerator';
import { UPDATE_TEAM } from '../actions/teams';
import {SET_CONTEXT} from '../actions/index';

export const teamSchema = {
  id: -1,
  tag: '',
  name: ''
}

function createTeam(props) {
  return Object.assign({}, teamSchema, props);
}

function updateTeam(team, props) {
  return Object.assign({}, team, props);
}

export default function teams(state = [], action) {
  switch (action.type) {
    case SET_CONTEXT:
      return [
        ...state,
        ...action.context.teams.map(function(team) {
          return createTeam({
            id: team.TeamID,
            tag: team.Tag,
            name: team.Name
          })
        })
      ];

    case UPDATE_TEAM:
      const teamId = +action.payload.teamid;
      const index = state.findIndex((team) => team.id === teamId);
      if (index !== -1) {
        const newProp = {
          [action.stat.name]: isNaN(action.value) ? action.value : +action.value
        };

        return [
          ...state.slice(0, index),
          updateTeam(state[index], newProp),
          ...state.slice(index + 1)
        ]
      } else {
        debugger;
        return [
          ...state,
          createTeam({
            id: teamId,
            gameId: +action.payload.gameid
          })
        ]
      }
    default:
      return state;
  }
}
