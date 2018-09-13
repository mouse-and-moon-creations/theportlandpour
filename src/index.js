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

const Application = (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Frontload noServerRender>
        <App />
      </Frontload>
    </ConnectedRouter>
  </Provider>
);

const root = document.getElementById('root');

if (process.env.NODE_ENV === 'production') {
  Loadable.preloadReady().then(() => {
    ReactDOM.hydrate(Application, root);
  });
} else {
  ReactDOM.render(Application, root);
}

unregister();
