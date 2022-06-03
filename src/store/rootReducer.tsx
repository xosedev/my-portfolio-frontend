import { combineReducers } from '@reduxjs/toolkit';
import i18n from './i18nSlice';

const createReducer = (asyncReducers?:any) => (state?:any, action?:any) => {
  const combinedReducer = combineReducers({
    i18n,
    ...asyncReducers,
  });

  return combinedReducer(state, action as never);
};

export default createReducer;
