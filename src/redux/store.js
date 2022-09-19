import { configureStore, combineReducers } from '@reduxjs/toolkit';
import contactsSlice from './contacts/sliсeContacts';
import { filterSlise } from './filter/sliceFilter';
import authSlise from './auth/authSlise';

const rootReducer = combineReducers({
  auth: authSlise.reducer,
  contacts: contactsSlice.reducer,
  filter: filterSlise.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export default store;
