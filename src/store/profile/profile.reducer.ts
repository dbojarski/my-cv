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

export type Experience = {
  title: string;
  description: string;
  from: Date;
  to: Date;
};

export type ProfileState = {
  personalInformation: PersonalInformation | null;
  skills: Skill[];
  experiences: Experience[];
  pending: boolean;
  error: Error | null;
};

const INITIAL_STATE: ProfileState = {
  experiences: [],
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
    fetchExperiences: (state, _) => {
      state.pending = true;
    },
    setExperiences: (state, { payload }: PayloadAction<Experience[]>) => {
      state.experiences = payload;
      state.pending = false;
    },
    saveExperience: (state, _) => {
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
  fetchExperiences,
  setExperiences,
  saveExperience,
} = profileSlice.actions;
