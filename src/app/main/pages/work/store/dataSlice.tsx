import { createAsyncThunk, createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const getWorks = createAsyncThunk('page/works/getWorks', async () => {
  const response = await axios.get('/api/works');
  const data = await response.data;
  return data;
});

const worksAdapter = createEntityAdapter({
});

export const {
  selectAll: selectWorks,
} = worksAdapter.getSelectors((state: any) => { 
  return state.worksPage.data
});

const worksSlice = createSlice({
  name: 'page/works',
  initialState:  worksAdapter.getInitialState([]),
  reducers: {},
  extraReducers: {
    [getWorks.fulfilled as any]: worksAdapter.setAll,
  },
});

export default worksSlice.reducer;
