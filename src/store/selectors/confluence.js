import { createSelectors } from './selectorCreator';

const authSelectors = createSelectors('confluence', 'auth');
const contentSelectors = createSelectors('confluence', 'content');

export default ({
  auth: authSelectors,
  content: contentSelectors,
});
