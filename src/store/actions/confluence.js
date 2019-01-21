import { createAsyncAction } from './asyncActionCreator';
import {
  ACTION_CONFLUENCE_LOGIN,
  ACTION_CONFLUENCE_CONTENT,
} from 'app/constants';

export const login = createAsyncAction(ACTION_CONFLUENCE_LOGIN)('post', '/app/api/login');
export const fetchContent = createAsyncAction(ACTION_CONFLUENCE_CONTENT)('get', '/wiki/api/content/7241759/pages');
