import {createStore, applyMiddleware} from 'redux';
import rootReducer from '../reducers';
import thunk from 'redux-thunk';

/**
 *
 * @param initialState
 * @returns {Store<any>}
 */
export default function defaultStore (initialState) {
  return createStore(
    rootReducer,
    initialState,
    applyMiddleware(
      thunk
    )
  );
}
