import { createSelectors } from './selectorCreator';

const contentSelectors = createSelectors(['confluence', 'content']);

export default ({
  content: contentSelectors,
});
