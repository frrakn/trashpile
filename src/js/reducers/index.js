import { List, Map } from 'immutable';

const init = Map({
  gameTime: 10000,
  kills: 10
});

export default function reducer(state=init, action) {
  switch(action.type) {
    case 'UPDATE_GAMETIME':
      return state.set('gameTime', action.payload);
    default:
      return state;
  }
}
