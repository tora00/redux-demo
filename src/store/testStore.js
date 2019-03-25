import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import testReducer from '../reducers/testReducer';

export default function configureStore() {
  return createStore(testReducer,applyMiddleware(thunk));
}