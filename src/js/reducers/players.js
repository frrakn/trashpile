const itemSchema = {
  name: '',
  image: ''
}

const playerSchema = {
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
    default:
      return state;
  }
}
