import { combineReducers } from 'redux';
import contactsReducer from 'redux/slice/slice';

const rootReducer = combineReducers({
  contacts: contactsReducer,
});

export default rootReducer;
