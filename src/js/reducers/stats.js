import {SET_CONTEXT} from '../actions/index';

export const statSchema = {
  id: -1,
  name: ''
}

function createStat(props) {
  return Object.assign({}, statSchema, props);
}


export default function stats(state = [], action) {
  switch (action.type) {
    case SET_CONTEXT:
      return [
        ...state,
        ...action.context.stats.map(function(stat) {
          return createStat({
            id: stat.StatID,
            name: stat.RiotName
          })
        })
      ];

    default:
      return state;
  }
}
