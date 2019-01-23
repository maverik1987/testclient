import { combineReducers } from 'redux';
import { createAsyncReducer } from './asyncReducerCreator';
import {
  CONFLUENCE_CONTENT,
} from 'app/constants';

export default combineReducers({
  'content': createAsyncReducer(CONFLUENCE_CONTENT),
});