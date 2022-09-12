import { createSlice } from '@reduxjs/toolkit';

export type PersonalInformation = {
  firstName: string;
  lastName: string;
  aboutMe: string;
};

export type ProfileState = {
  personalInformation: PersonalInformation;
  pending: boolean;
  error: Error | null;
};

const INITIAL_STATE: ProfileState = {
  personalInformation: {
    firstName: '',
    lastName: '',
    aboutMe: '',
  },
  pending: false,
  error: null,
};

export const profileSlice = createSlice({
  name: 'profile',
  initialState: INITIAL_STATE,
  reducers: {
    fetchPersonalInformation: (state: ProfileState, { payload }) => {
      state.pending = true;
    },
    setPersonalInformation: (state: ProfileState, { payload }) => {
      state.personalInformation = payload;
      state.pending = false;
    },
    setError: (state: ProfileState, { payload }) => {
      state.error = payload;
      state.pending = false;
    },
  },
});

export const { fetchPersonalInformation, setPersonalInformation, setError } =
  profileSlice.actions;
