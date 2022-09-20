import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Timestamp } from 'firebase/firestore';

export type Personal = {
  aboutMe: string;
  address: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
};

export type Skill = {
  name: string;
  experienceInMonths: string;
  rate: string;
};

export type ExperienceItem<DateType = Timestamp> = {
  title: string;
  description: string;
  from: DateType;
  to: DateType;
};

export type ProfileState = {
  personalInformation: Personal | null;
  skills: Skill[];
  experiences: ExperienceItem[];
  pending: boolean;
  error: Error | null;
};

const INITIAL_STATE: ProfileState = {
  experiences: [],
  personalInformation: {
    aboutMe: '',
    address: '',
    firstName: '',
    lastName: '',
    phoneNumber: '',
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
    updatePersonalInformation: (
      state,
      _: PayloadAction<(Personal & { uid: string }) | null>
    ) => {
      state.pending = true;
    },
    setPersonalInformation: (
      state,
      { payload }: PayloadAction<(Personal & { uid: string }) | null>
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
    setExperiences: (state, { payload }: PayloadAction<ExperienceItem[]>) => {
      state.experiences = payload;
      state.pending = false;
    },
    saveExperience: (
      state,
      _: PayloadAction<ExperienceItem<Date> & { uid: string }>
    ) => {
      state.pending = true;
    },
    deleteExperience: (state, _) => {
      state.pending = true;
    },
    setError: (state, { payload }) => {
      state.error = payload;
      state.pending = false;
    },
    resetState: () => INITIAL_STATE,
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
  deleteExperience,
  updatePersonalInformation,
  resetState,
} = profileSlice.actions;
