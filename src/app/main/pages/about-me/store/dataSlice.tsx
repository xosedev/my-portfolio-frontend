import { createAsyncThunk, createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const getSkills = createAsyncThunk('page/aboutMe/getSkills', async () => {
  const response = await axios.get('/api/skills');
  const data = await response.data;
  return data;
});

const skillsAdapter = createEntityAdapter({
});

export const {
  selectAll: selectSkills,
} = skillsAdapter.getSelectors((state: any) => { 
  return state.aboutMePage.data
});

const linksSlice = createSlice({
  name: 'page/aboutMe',
  initialState:  skillsAdapter.getInitialState([]),
  reducers: {},
  extraReducers: {
    [getSkills.fulfilled as any]: skillsAdapter.setAll,
  },
});

export default linksSlice.reducer;
