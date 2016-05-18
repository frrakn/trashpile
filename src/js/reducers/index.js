import { List, Map } from 'immutable';

const initialState = Map({
  gameTime: 10000,
  kills: 10
});

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case 'UPDATE_GAMETIME':
      return state.set('gameTime', action.payload);
    default:
      return state;
  }
}
