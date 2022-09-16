import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Timestamp } from 'firebase/firestore';

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

export type ExperienceItem<DateType = Timestamp> = {
  title: string;
  description: string;
  from: DateType;
  to: DateType;
};

export type ProfileState = {
  personalInformation: PersonalInformation | null;
  skills: Skill[];
  experiences: ExperienceItem[];
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
} = profileSlice.actions;
