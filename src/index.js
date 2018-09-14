import React from 'react';
import ReactDOM from 'react-dom';
import  { Provider } from 'react-redux';
import App from './App';
import { unregister } from './registerServiceWorker';
import { storeHelper } from 'helpers';
import { ConnectedRouter } from 'connected-react-router';
import { Frontload } from 'react-frontload';
import Loadable from 'react-loadable';

require('es6-promise').polyfill();

const { history, store } = storeHelper.getStore();

ReactDOM.hydrate(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Frontload noServerRender>
        <App />
      </Frontload>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);

unregister();
