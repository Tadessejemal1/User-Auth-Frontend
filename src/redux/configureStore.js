import { combineReducers, applyMiddleware } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import loginReducer from './login/loginReducer';
import registerReducer from './register/registerSlice';

const rootReducer = combineReducers({
  login: loginReducer,
  register: registerReducer,
});

const store = configureStore(
  {
    reducer: rootReducer,
  },
  // eslint-disable-next-line comma-dangle
  applyMiddleware(thunk)
);

export default store;