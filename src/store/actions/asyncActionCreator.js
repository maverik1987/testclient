import { toUpper } from 'lodash';
import { createAction } from 'redux-actions';
import fetch from 'utils/api';
import {
  FETCH_START,
  FETCH_SUCCESS,
  FETCH_FAIL,
} from 'app/constants';

export const createAsyncAction = key => (method, url) => data => dispatch => {
  dispatch(createAction(`${toUpper(key)}/${FETCH_START}`)());

  return fetch({ method, url, data })
    .then(response => {
      const type = `${toUpper(key)}/${FETCH_SUCCESS}`;
      const action = createAction(type);
      dispatch(action(response.data));
    })
    .catch(err => {
      const type = `${toUpper(key)}/${FETCH_FAIL}`;
      const metaCreator = error => ({ error });
      const action = createAction(type, null, metaCreator);
      dispatch(action(err.response.data));
    });
};