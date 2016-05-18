import { connect } from 'react-redux';
import App from '../components/App';
import { updateTime } from '../actions/index';

function mapStateToProps(state) {
  return {
    gameTime: state.get('gameTime'),
    kills: state.get('kills')
  };
}

function mapDispatchToProps(dispatch) {
  let ws = websocketConnect('ws://localhost:8080');
  ws.onmessage = function(event) {
    let data = JSON.parse(event.data);
    if (data['1001600049']) {
      dispatch(updateTime(data['1001600049'].teamStats[100].gameLength));
    }
  }

  return {
    updateGameTime: gameTime => dispatch(updateTime(gameTime))
  };
}

function websocketConnect(websocketUrl) {
  return new WebSocket(websocketUrl, 'emitter-protocol');
}

export const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);
