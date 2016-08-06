export const ADD_PLAYER = 'ADD_PLAYER';
export const REMOVE_PLAYER = 'REMOVE_PLAYER';

export const ADD_ITEM = 'ADD_ITEM';
export const REMOVE_ITEM = 'REMOVE_ITEM';

export function updateState(state) {
  return {
    type: 'UPDATE_STATE',
    state: state
  }
}

export function updateTime(gameTime) {
  return {
    type: 'UPDATE_GAMETIME',
    gameTime: gameTime
  }
}
