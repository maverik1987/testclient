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
        ...state.meta,
        isFetching: true,
      }
    }),
    [`${toUpper(key)}/${FETCH_SUCCESS}`]: (state, action) => {
      console.log(action)
      return {
      data: action.payload,
      meta: {
        ...state.meta,
        isFetching: false,
      },
    }},
    [`${toUpper(key)}/${FETCH_FAIL}`]: (state, action) => ({
      data: null,
      meta: { error: action.meta.error, isFetching: false }
    }),
  }, initialState);
