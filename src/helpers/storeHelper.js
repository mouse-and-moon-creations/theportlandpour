import { createBrowserHistory } from 'history';
import { compose, createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import rootReducer from '../reducers';

const history = createBrowserHistory();

const store = createStore(
  connectRouter(history)(rootReducer),
  compose(applyMiddleware(routerMiddleware(history), thunkMiddleware))
);

const getStore = () => {

  return store;

};

const getHistory = () => {

  return history;

}

const storeHelper = {
  getHistory,
  getStore
}

export default storeHelper;
