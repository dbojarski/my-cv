import { PayloadAction } from '@reduxjs/toolkit';
import { all, call, put, takeLatest } from 'redux-saga/effects';

import {
  deleteDocument,
  getDocuments,
  setDocument,
} from '../../../utils/firebase/firestore';
import {
  ExperienceItem,
  setError,
  setExperiences,
  fetchExperiences as fetchExperiencesFromReducer,
} from '../profile.reducer';

function* saveExperience({
  payload,
}: PayloadAction<ExperienceItem & { uid: string }>) {
  try {
    const { uid, ...experience } = payload;

    yield call(setDocument, 'profile', experience, [
      uid,
      'experiences',
      experience.title,
    ]);
    yield put(fetchExperiencesFromReducer(uid));
  } catch (error) {
    yield put(setError(error));
  }
}

function* onSaveExperience() {
  yield takeLatest('profile/saveExperience', saveExperience);
}

function* fetchExperiences({ payload }: PayloadAction<string>): any {
  try {
    const response = yield call(getDocuments, 'profile', [
      payload,
      'experiences',
    ]);

    yield put(setExperiences(response));
  } catch (error) {
    yield put(setError(error));
  }
}

function* onFetchExperiences() {
  yield takeLatest('profile/fetchExperiences', fetchExperiences);
}

function* deleteExperience({
  payload,
}: PayloadAction<ExperienceItem & { uid: string }>) {
  const { uid, ...experience } = payload;

  try {
    yield call(deleteDocument, 'profile', [
      uid,
      'experiences',
      experience.title,
    ]);
    yield put(fetchExperiencesFromReducer(uid));
  } catch (error) {
    yield put(setError(error));
  }
}

function* onDeleteExperience() {
  yield takeLatest('profile/deleteExperience', deleteExperience);
}

export function* experienceSaga() {
  yield all([
    call(onSaveExperience),
    call(onFetchExperiences),
    call(onDeleteExperience),
  ]);
}
