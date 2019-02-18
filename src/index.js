import React from 'react';
import ReactDOM from 'react-dom';
import  { Provider } from 'react-redux';
import dotenv from 'dotenv';
import App from './App';
import { unregister } from './registerServiceWorker';
import { storeHelper } from 'helpers';
import { ConnectedRouter } from 'connected-react-router';
import { Frontload } from 'react-frontload';
import Loadable from 'react-loadable';
import { ScrollContext } from 'react-router-scroll-4';

dotenv.config();

const { history, store } = storeHelper.getStore();

const root = document.getElementById('root');

const application = (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <ScrollContext>
        <Frontload noServerRender>
          <App />
        </Frontload>
      </ScrollContext>
    </ConnectedRouter>
  </Provider>
);

if (process.env.NODE_ENV === 'production') {
  Loadable.preloadReady().then(() => {
    ReactDOM.hydrate(application, root);
  });
} else {
  ReactDOM.render(application, root);
}

unregister();
