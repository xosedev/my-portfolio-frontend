import { Action, combineReducers, Reducer } from '@reduxjs/toolkit';
import i18n from './i18nSlice';
import theme from './themeSlice';

const createReducer = (asyncReducers?:Reducer) => (state:any, action?:Action) => {
  const combinedReducer = combineReducers({
    theme,
    i18n,
    ...asyncReducers,
  });

  return combinedReducer(state, action as never);
};

export default createReducer;
