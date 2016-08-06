export default function gameTime(state = 0, action) {
  if (action.timestamp && action.timestamp > state) {
    return action.timestamp;
  } else {
    return state;
  }
}
