import { createSelector, createSlice } from '@reduxjs/toolkit';
import i18n from '../../i18n';

export const changeLanguage = (languageId: any) => (dispatch: any, getState: any) => {
  return i18n.changeLanguage(languageId).then(() => {
    dispatch(i18nSlice.actions.languageChanged(languageId));
  });
};

const i18nSlice = createSlice({
  name: 'i18n',
  initialState: {
    language: i18n.options.lng,
    languages: [
      { id: 'es', title: 'Spanish', flag: 'ES' },
    ],
  },
  reducers: {
    languageChanged: (state, action) => {
      state.language = action.payload;
    },
  },
});

export const selectCurrentLanguageId = ( _i18n: { language: any; } ) => _i18n.language;

export const selectLanguages = ( _i18n: { languages: any; } ) => _i18n.languages;

export const selectCurrentLanguageDirection = createSelector([selectCurrentLanguageId], (id) => {
  return i18n.dir(id);
});

export const selectCurrentLanguage = createSelector(
  [selectCurrentLanguageId, selectLanguages],
  (id, languages) => {
    return languages.find((lng: any) => lng.id === id);
  }
);

export default i18nSlice.reducer;
