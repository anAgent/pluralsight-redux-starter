
import {LOAD_AUTHORS_SUCCESS} from './actionTypes';
import AuthorApi from '../api/mockAuthorApi';
import {begineAjaxCall} from './ajaxStatusActions';

export function loadAuthorSuccess(authors) {
  return {
    type: LOAD_AUTHORS_SUCCESS,
    authors
  };
}

export function loadAuthors () {

  return dispatch => {
    dispatch(begineAjaxCall());

    return AuthorApi.getAllAuthors()
      .then(authors => {
        dispatch(loadAuthorSuccess(authors));
      })
      .catch(error => {
        throw(error);
      });
  };
}
