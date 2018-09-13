import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import  { Provider } from 'react-redux';
import App from './App';
import { unregister } from './registerServiceWorker';
import { storeHelper } from 'helpers';

require('es6-promise').polyfill();

const store = storeHelper.getStore();

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

unregister();
