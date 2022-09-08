import { createSlice } from '@reduxjs/toolkit';
import { User } from 'firebase/auth';

export type UserSliceState = {
  data: User | null;
};

const INITIAL_STATE: UserSliceState = {
  data: null,
};

export const userSlice = createSlice({
  name: 'user',
  initialState: INITIAL_STATE,
  reducers: {
    setUser: (state, { payload: data }) => ({ ...state, data }),
  },
});

export const { setUser } = userSlice.actions;
