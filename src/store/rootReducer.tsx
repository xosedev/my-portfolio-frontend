import { Action, combineReducers, Reducer } from '@reduxjs/toolkit';
import i18n from './i18nSlice';

const createReducer = (asyncReducers?:Reducer) => (state:any, action?:Action) => {
  const combinedReducer = combineReducers({
    i18n,
    ...asyncReducers,
  });

  return combinedReducer;
};

export default createReducer;
