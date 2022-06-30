import { createAsyncThunk, createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const getMenus = createAsyncThunk('navBar/menus/getMenus', async () => {
  const response = await axios.get('/api/menus');
  const data = await response.data;
  return data;
});

const menusAdapter = createEntityAdapter({
});

export const {
  selectAll: selectMenus,
} = menusAdapter.getSelectors((state: any) =>  state.navBar.data);

const menusSlice = createSlice({
  name: 'navBar/menus',
  initialState:  menusAdapter.getInitialState([]),
  reducers: {},
  extraReducers: {
    [getMenus.fulfilled as any]: menusAdapter.setAll,
  },
});

export default menusSlice.reducer;
