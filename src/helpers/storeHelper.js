import { createBrowserHistory, createMemoryHistory } from 'history';
import { compose, createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import rootReducer from '../reducers';

const isServer = !(
  typeof window !== 'undefined' &&
  window.document &&
  window.document.createElement
);

const isClient = !isServer;

const getStore = (url = '/') => {

  let enhancers = [];

  if (process.env.NODE_ENV === 'development' && !isServer) {
    const devToolsExtension = window.devToolsExtension;

    if (typeof devToolsExtension === 'function') {
      enhancers.push(devToolsExtension());
    }
  }

  const history = isServer ? createMemoryHistory({ initialEntries: [url] }) : createBrowserHistory();

  const middleware = [ routerMiddleware(history), thunkMiddleware ];

  const composed = compose(applyMiddleware(...middleware), ...enhancers);

  const initialState = isClient ? window.__PRELOADED_STATE__ : {};

  if (isClient) {
    delete window.__PRELOADED_STATE__;
  }

  const store = createStore(
    connectRouter(history)(rootReducer),
    initialState,
    composed
  );

  return { store, history };

};

const storeHelper = {
  getStore
}

export default storeHelper;
