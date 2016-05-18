import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import Reducer from '../reducers/index';
import { AppContainer } from '../containers/index';
import '../../css/app.scss';

const store = createStore(Reducer);

render(
  <Provider store={store}>
    <AppContainer />
  </Provider>,
  document.getElementById('root')
);
