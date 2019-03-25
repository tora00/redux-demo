import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import testReducer from '../reducers/testReducer';
import {composeWithDevTools} from 'redux-devtools-extension';

export default function configureStore() {
  return createStore(testReducer, composeWithDevTools());
}