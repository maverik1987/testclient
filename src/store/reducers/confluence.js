import { combineReducers } from 'redux';
import { createAsyncReducer } from './asyncReducerCreator';
import {
  ACTION_CONFLUENCE_LOGIN,
  ACTION_CONFLUENCE_CONTENT,
} from 'app/constants';

export default combineReducers({
  'auth': createAsyncReducer(ACTION_CONFLUENCE_LOGIN),
  'content': createAsyncReducer(ACTION_CONFLUENCE_CONTENT),
});