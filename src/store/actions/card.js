import { createAsyncAction } from './asyncActionCreator';
import {
  CARD_DATA,
} from 'app/constants';

export const getCards = createAsyncAction(CARD_DATA)('get', '/app/api/section/:sectionId/cards');
export const addCard = createAsyncAction(CARD_DATA)('post', '/app/api/card');
export const updateCard = createAsyncAction(CARD_DATA)('put', '/app/api/card');
export const deleteCard = createAsyncAction(CARD_DATA)('delete', '/app/api/card/:id');
