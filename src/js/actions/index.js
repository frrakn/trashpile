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
