import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers/ProductReducer';

const store = configureStore({
  reducer: rootReducer,
});

export default store;
