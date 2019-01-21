import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { reducer as formReducer } from 'redux-form';
import confluenceReducer from './confluence';

export default (history) => combineReducers({
  router: connectRouter(history),
  form: formReducer,
  confluence: confluenceReducer,
});