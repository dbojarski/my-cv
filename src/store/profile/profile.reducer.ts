import { createSlice, PayloadAction } from '@reduxjs/toolkit';

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
  personalInformation: PersonalInformation | null;
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
    fetchPersonalInformation: (state, _) => {
      state.pending = true;
    },
    setPersonalInformation: (
      state,
      { payload }: PayloadAction<(PersonalInformation & { uid: string }) | null>
    ) => {
      state.personalInformation = payload;
      state.pending = false;
    },
    fetchSkills: (state, _) => {
      state.pending = true;
    },
    setSkills: (state, { payload }: PayloadAction<Skill[]>) => {
      state.skills = payload;
      state.pending = false;
    },
    saveSkill: (state, _) => {
      state.pending = true;
    },
    editSkill: (state, _) => {},
    deleteSkill: (state, _) => {
      state.pending = true;
    },
    setError: (state, { payload }) => {
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
  editSkill,
} = profileSlice.actions;
