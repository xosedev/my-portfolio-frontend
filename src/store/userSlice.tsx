import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const getUser = createAsyncThunk('user/getUser', async () => {
  const response = await axios.get('/api/owner');
  const data = await response.data;
  return data;
});


const userSlice = createSlice({
  name: 'user',
  initialState:[],
  reducers: {
  },
  extraReducers: {
    [getUser.fulfilled as any]: (state, action) => {
      console.log(action);
      
      return action.payload
    },
  },
});
export const selectUser = ({ user }: any) => user;


export default userSlice.reducer;
