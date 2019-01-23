import { createAsyncAction } from './asyncActionCreator';
import {
  SECTION_DATA,
} from 'app/constants';

export const getSections = createAsyncAction(SECTION_DATA)('get', '/app/api/sections');
export const createSection = createAsyncAction(SECTION_DATA)('post', '/app/api/section');
export const updateSection = createAsyncAction(SECTION_DATA)('put', '/app/api/section');
export const deleteSection = createAsyncAction(SECTION_DATA)('delete', '/app/api/section/:id');
