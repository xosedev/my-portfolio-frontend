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
  selectEntities: selectLabelsEntities,
  selectById: selectLabelById,
} = linksAdapter.getSelectors((state: any) =>  state.navBar.data);

const linksSlice = createSlice({
  name: 'page/links',
  initialState:  linksAdapter.getInitialState([]),
  reducers: {},
  extraReducers: {
    [getLinks.fulfilled as any]: linksAdapter.setAll,
  },
});

export default linksSlice.reducer;
