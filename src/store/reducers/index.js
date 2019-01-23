import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { reducer as formReducer } from 'redux-form';
import confluenceReducer from './confluence';
import userReducer from './user';
import sectionReducer from './section';
import cardReducer from './card';

export default (history) => combineReducers({
  router: connectRouter(history),
  form: formReducer,
  confluence: confluenceReducer,
  user: userReducer,
  section: sectionReducer,
  card: cardReducer,
});