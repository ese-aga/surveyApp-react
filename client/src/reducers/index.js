import { combineReducers } from 'redux';
import { reducer as redoxForm} from 'redux-form';
import authReducer from './authReducer';
import surveysReducer from './surveysReducer';

export default combineReducers({
  auth: authReducer,
  form: redoxForm,
  surveys: surveysReducer
});
