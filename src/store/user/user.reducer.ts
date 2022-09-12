import { createSlice } from '@reduxjs/toolkit';
import { User } from 'firebase/auth';

export type UserSliceState = {
  data: User | null;
  error: Error | null;
};

const INITIAL_STATE: UserSliceState = {
  data: null,
  error: null,
};

export const userSlice = createSlice({
  name: 'user',
  initialState: INITIAL_STATE,
  reducers: {
    setUser: (state, { payload: data }) => {
      state.data = data;
    },
    setError: (state, { payload: error }) => {
      state.error = error;
    },
    signInStart: () => {},
    signOutStart: () => {},
  },
});

export const { setUser, setError, signInStart, signOutStart } =
  userSlice.actions;
