import {createStore, applyMiddleware} from 'redux';
import rootReducer from '../reducers';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';

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
      reduxImmutableStateInvariant()
    )
  );
}
