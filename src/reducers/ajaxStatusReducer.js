import initialState from './initialState';
import * as types from '../actions/actionTypes';

// TODO: This can be moved out so it can be used with others.
function actionTypeEndsInSuccess(type) {
  return type.indexOf('SUCCESS') > -1;
}

export default function ajaxStatusReducer(state = initialState.ajaxCallsInProgress, action) {

  if (action.type === types.BEGIN_AJAX_CALL) {
    return state + 1;
  } else if(action.type === types.AJAX_CALL_ERROR || actionTypeEndsInSuccess(action.type)) {
    return state - 1;
  }
  return state;
}
