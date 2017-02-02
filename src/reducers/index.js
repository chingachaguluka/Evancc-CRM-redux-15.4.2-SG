import { combineReducers } from 'redux';
import ComplaintsReducer from './reducer_complaints';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
  complaints: ComplaintsReducer,
  form: formReducer
});

export default rootReducer;
