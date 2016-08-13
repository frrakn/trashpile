export default function gameTime(state = 0, action) {
  if (action.payload &&
      action.payload.timestamp &&
      action.payload.timestamp > state) {
    return action.payload.timestamp;
  } else {
    return state;
  }
}
