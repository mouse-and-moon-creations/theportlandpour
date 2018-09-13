import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import rootReducer from '../reducers';

const store = createStore(
  rootReducer,
  applyMiddleware(thunkMiddleware)
);

const getStore = () => {

  return store;

};

const storeHelper = {
  getStore
}

export default storeHelper;
