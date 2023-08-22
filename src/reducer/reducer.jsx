import { combineReducers } from 'redux';
import contactsReducer from '../slice/slice';

const rootReducer = combineReducers({
  contacts: contactsReducer,
});

export default rootReducer;
