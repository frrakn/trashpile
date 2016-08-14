import { UPDATE_PLAYER } from '../actions/players';
import {SET_CONTEXT} from '../actions/index';

export const itemSchema = {
  name: '',
  image: ''
}

export const playerSchema = {
  id: -1,
  teamId: -1,
  kills: 0,
  deaths: 0,
  assists: 0,
  name: '',
  position: -1,
  items: []
}

function createPlayer(props) {
  return Object.assign({}, playerSchema, props);
}

function updatePlayer(player, props) {
  return Object.assign({}, player, props);
}


export default function players(state = [], action) {
  switch (action.type) {
    case SET_CONTEXT:
      return [
        ...state,
        ...action.context.players.map(function(player) {
          return createPlayer({
            id: player.PlayerID,
            name: player.Name,
            position: player.Position,
            teamId: +player.TeamID
          })
        })
      ];

    case UPDATE_PLAYER:
      const playerId = +action.payload.playerid;
      const index = state.findIndex((player) => player.id === playerId);

      if (index !== -1) {
        let value = action.value;
        if (!isNaN(value)) {
          value = +value;
        } else if (action.stat.name === 'championName') {
          value = value.replace(/['"]+/g, '');
        } else if (action.stat.name === 'items') {
          value = JSON.parse(value);
        }
        const newProp = {
          [action.stat.name]: value
        };

        return [
          ...state.slice(0, index),
          updatePlayer(state[index], newProp),
          ...state.slice(index + 1)
        ]
      } else {
        return [
          ...state,
          createPlayer({
            id: playerId
          })
        ]
      }
    default:
      return state;
  }
}
