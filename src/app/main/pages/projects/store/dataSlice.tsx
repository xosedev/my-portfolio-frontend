import { createAsyncThunk, createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const getProjects = createAsyncThunk('page/projects/getProjects', async () => {
  const response = await axios.get('/api/projects');
  const data = await response.data;
  return data;
});

const projectsAdapter = createEntityAdapter({
});

export const {
  selectAll: selectProjects,
} = projectsAdapter.getSelectors((state: any) => { 
  return state.projectsPage.data
});

const projectsSlice = createSlice({
  name: 'page/projects',
  initialState:  projectsAdapter.getInitialState([]),
  reducers: {},
  extraReducers: {
    [getProjects.fulfilled as any]: projectsAdapter.setAll,
  },
});

export default projectsSlice.reducer;
