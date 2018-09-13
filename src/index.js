import React from 'react';
import ReactDOM from 'react-dom';
import  { Provider } from 'react-redux';
import App from './App';
import { unregister } from './registerServiceWorker';
import { storeHelper } from 'helpers';

require('es6-promise').polyfill();

const store = storeHelper.getStore();

ReactDOM.hydrate(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

unregister();
