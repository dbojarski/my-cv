import { createSlice } from '@reduxjs/toolkit';
import { User } from 'firebase/auth';

export type UserSliceState = {
  data: User | null;
  signInPending: boolean;
  signInError: Error | null;
};

const INITIAL_STATE: UserSliceState = {
  data: null,
  signInPending: false,
  signInError: null,
};

export const userSlice = createSlice({
  name: 'user',
  initialState: INITIAL_STATE,
  reducers: {
    setUser: (state, { payload: data }) => ({
      ...state,
      data,
      signInPending: false,
    }),
    signInStart: (state) => ({ ...state, signInPending: true }),
    signInError: (state, { payload: error }) => ({
      ...state,
      signInPending: false,
      error,
    }),
  },
});

export const { setUser, signInStart, signInError } = userSlice.actions;
