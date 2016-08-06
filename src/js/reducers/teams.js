export const teamSchema = {
  id: -1
}

const initialState = [teamSchema, Object.assign({}, teamSchema, {
  id: -2
})
];

export default function teams(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}
