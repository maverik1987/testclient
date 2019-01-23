import { createAsyncAction } from './asyncActionCreator';
import {
  USER_DATA,
} from 'app/constants';

export const getCards = createAsyncAction(USER_DATA)('get', '/app/api/section/:sectionId/cards');
export const addCard = createAsyncAction(USER_DATA)('post', '/app/api/card');
export const updateCard = createAsyncAction(USER_DATA)('put', '/app/api/card');
export const deleteCard = createAsyncAction(USER_DATA)('delete', '/app/api/card/:id');
