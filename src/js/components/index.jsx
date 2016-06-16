import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import Reducer from '../reducers/index';
import { AppContainer } from '../containers/AppContainer';
import { updateTime, updateState } from '../actions/index';
import '../../css/app.scss';

const store = createStore(Reducer);

function websocketConnect(websocketUrl) {
  return new WebSocket(websocketUrl, 'emitter-protocol');
}

const gameId = '1001670144';

let ws = websocketConnect('ws://localhost:8080');
ws.onmessage = function(event) {
  let data = JSON.parse(event.data);
  if (data[gameId]) {
    store.dispatch(updateState(data[gameId]));
  }
}

console.log('---websocket bound---');

render(
  <Provider store={store}>
    <AppContainer />
  </Provider>,
  document.getElementById('root')
);
