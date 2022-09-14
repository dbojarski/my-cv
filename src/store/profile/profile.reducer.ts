import { createSlice } from '@reduxjs/toolkit';

export type PersonalInformation = {
  firstName: string;
  lastName: string;
  aboutMe: string;
};

export type Skill = {
  name: string;
  experienceInMonths: string;
  rate: string;
};

export type ProfileState = {
  personalInformation: PersonalInformation;
  skills: Skill[];
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
  skills: [],
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
    fetchSkills: (state: ProfileState, { payload: ownerId }) => {
      state.pending = true;
    },
    setSkills: (state: ProfileState, { payload }) => {
      state.skills = payload;
      state.pending = false;
    },
    saveSkill: (state: ProfileState, { payload }) => {
      state.pending = true;
    },
    deleteSkill: (state: ProfileState, { payload }) => {
      state.pending = true;
    },
    setError: (state: ProfileState, { payload }) => {
      state.error = payload;
      state.pending = false;
    },
  },
});

export const {
  fetchPersonalInformation,
  setPersonalInformation,
  setError,
  fetchSkills,
  saveSkill,
  setSkills,
  deleteSkill,
} = profileSlice.actions;
