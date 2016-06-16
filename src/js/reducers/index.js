const teamSchema = {
  kills: 0
}

const playerSchema = {
  items: []
}

const initialState = {
  gameTime: 0,
  teams: [
    teamSchema,
    teamSchema
  ],
  players: [
    playerSchema,
    playerSchema,
    playerSchema,
    playerSchema,
    playerSchema,
    playerSchema,
    playerSchema,
    playerSchema,
    playerSchema,
    playerSchema,
  ],
  skipFormatting: true
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case 'UPDATE_GAMETIME':
      return state.gameTime = action.gameTime;
    case 'UPDATE_STATE':
      return action.state;
    default:
      return state;
  }
}
