import { configureStore } from '@reduxjs/toolkit';
import loginReducer from './reducers/AuthReducer';
import { combineReducers } from 'redux';


export type RootState = ReturnType<typeof rootReducerCombined>;

const rootReducerCombined = combineReducers({
  auth: loginReducer,
});

const store = configureStore({
  reducer: rootReducerCombined,
});

export default store;
