export const ADD_PLAYER = 'ADD_PLAYER';
export const REMOVE_PLAYER = 'REMOVE_PLAYER';

export const ADD_ITEM = 'ADD_ITEM';
export const REMOVE_ITEM = 'REMOVE_ITEM';

export const UPDATE_GAME = 'UPDATE_GAME';
export const SET_CONTEXT = 'SET_CONTEXT';

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

export function updateGame(payload) {
  return {
    type: UPDATE_GAME,
    payload: payload
  }
}

export function setGameContext(context) {
  return {
    type: SET_CONTEXT,
    context: context
  }
}
