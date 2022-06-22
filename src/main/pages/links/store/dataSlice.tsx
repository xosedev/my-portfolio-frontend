import { createAsyncThunk, createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const getLinks = createAsyncThunk('page/links/getLinks', async () => {
  const response = await axios.get('/api/links');
  const data = await response.data;
  return data;
});

const linksAdapter = createEntityAdapter({
});

export const {
  selectAll: selectLinks,
} = linksAdapter.getSelectors((state: any) => { 
  return state.linksPage.data
});

const linksSlice = createSlice({
  name: 'page/links',
  initialState:  linksAdapter.getInitialState([]),
  reducers: {},
  extraReducers: {
    [getLinks.fulfilled as any]: linksAdapter.setAll,
  },
});

export default linksSlice.reducer;
