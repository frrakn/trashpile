const gameSchema = {
  id: -1,
  gameTime: 0,
  teamIds: [-2, -1],
  playerIds: [-1]
}

const initialState = [gameSchema];

export default function games(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}
