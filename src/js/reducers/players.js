import {ADD_TEAM} from '../actions/players';

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
  summonerName: '',
  items: []
}

const initialState = [playerSchema];

export default function players(state = initialState, action) {
  switch (action.type) {
    case ADD_TEAM:
      return [
        ...state,
        action.player
      ];
    default:
      return state;
  }
}
