import { toUpper } from 'lodash';
import { handleActions } from 'redux-actions';
import {
  FETCH_START,
  FETCH_FAIL,
  FETCH_SUCCESS,
} from 'app/constants';

const initialState = {
  data: null,
  meta: {
    isFetching: false,
    error: null,
  },
};

export const createAsyncReducer = key =>
  handleActions({
    [`${toUpper(key)}/${FETCH_START}`]: (state, action) => ({
      ...state,
      meta: {
        error: null,
        isFetching: true,
      }
    }),
    [`${toUpper(key)}/${FETCH_SUCCESS}`]: (state, action) => ({
      data: action.payload,
      meta: {
        error: null,
        isFetching: false,
      },
    }),
    [`${toUpper(key)}/${FETCH_FAIL}`]: (state, action) => ({
      data: null,
      meta: {
        error: action.meta.error,
        isFetching: false
      },
    }),
  }, initialState);
