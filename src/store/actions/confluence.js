import { createAsyncAction } from './asyncActionCreator';
import {
  CONFLUENCE_CONTENT,
} from 'app/constants';

export const fetchContent = createAsyncAction(CONFLUENCE_CONTENT)('get', '/wiki/api/content/7241759/pages');
