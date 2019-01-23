import { createAsyncAction } from './asyncActionCreator';
import {
  USER_DATA,
} from 'app/constants';

export const login = createAsyncAction(USER_DATA)('post', '/app/api/login');
export const getUser = createAsyncAction(USER_DATA)('get', '/app/api/user');
export const deleteUser = createAsyncAction(USER_DATA)('delete', '/app/api/user/:id');
